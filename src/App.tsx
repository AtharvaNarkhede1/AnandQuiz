import { useState, useEffect } from 'react';
import { 
  Trophy, 
  Play, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Award, 
  ExternalLink,
  HelpCircle,
  Menu,
  X,
  FileSpreadsheet,
  LogOut,
  FolderSync,
  Check
} from 'lucide-react';
import { defaultQuestions, type Question } from './data/questions';

// Helper to shuffle array locally to ensure safety
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  // SPA Custom Router Path state ('/' | '/start-quiz' | '/quiz')
  const [path, setPath] = useState<string>(() => {
    const currentPath = window.location.pathname;
    if (['/', '/start-quiz', '/quiz'].includes(currentPath)) {
      return currentPath;
    }
    return '/';
  });

  // App Phase States
  const [quizState, setQuizState] = useState<'welcome' | 'quiz' | 'completed'>('welcome');
  
  // Game Play Data
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  // Custom Answers, Checked, & Navigation Status Tracker
  const [userAnswers, setUserAnswers] = useState<Record<number, string[]>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({});
  const [questionStatus, setQuestionStatus] = useState<Record<number, 'submitted' | 'review' | 'unattempted'>>({});
  
  // Retractable Sidebar & Modals
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [showQuitModal, setShowQuitModal] = useState<boolean>(false);
  const [showFinishModal, setShowFinishModal] = useState<boolean>(false);

  // Configuration Setup states
  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem('twiquiz_username') || '';
  });
  
  // Dynamic categories aggregation
  const allTopics = Array.from(new Set(defaultQuestions.map(q => q.category || 'General Pharmacology')));
  const topicCounts = defaultQuestions.reduce((acc, q) => {
    const cat = q.category || 'General Pharmacology';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const [selectedTopics, setSelectedTopics] = useState<string[]>(() => {
    const saved = localStorage.getItem('twiquiz_selected_topics');
    if (saved) {
      try { return JSON.parse(saved); } catch (_) {}
    }
    return [...allTopics]; // Default to all topics selected
  });

  const [questionOrder, setQuestionOrder] = useState<'sequenced' | 'randomized'>(() => {
    const saved = localStorage.getItem('twiquiz_question_order');
    return (saved === 'sequenced' || saved === 'randomized') ? saved : 'sequenced';
  });

  const activeQuestion = questions[currentIndex];

  // Helper to update path & address history
  const navigateTo = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  // 1. Initial State Restoration from localStorage & Path Checking
  useEffect(() => {
    const savedPath = window.location.pathname;
    const savedProgressStr = localStorage.getItem('twiquiz_progress');
    
    if (savedProgressStr) {
      try {
        const savedProgress = JSON.parse(savedProgressStr);
        if (savedPath === '/quiz') {
          setQuestions(savedProgress.questions || []);
          setCurrentIndex(savedProgress.currentIndex || 0);
          setUserAnswers(savedProgress.userAnswers || {});
          setCheckedQuestions(savedProgress.checkedQuestions || {});
          setQuestionStatus(savedProgress.questionStatus || {});
          setUsername(savedProgress.username || '');
          setSelectedTopics(savedProgress.selectedTopics || []);
          setQuestionOrder(savedProgress.questionOrder || 'sequenced');
          
          if (savedProgress.quizState === 'completed') {
            setQuizState('completed');
          } else {
            setQuizState('quiz');
          }
          setPath('/quiz');
          return;
        }
      } catch (err) {
        console.error('Failed to parse saved progress:', err);
      }
    }
    
    // Fallback if not loading saved quiz
    if (savedPath === '/quiz') {
      window.history.replaceState({}, '', '/');
      setPath('/');
      setQuizState('welcome');
    } else if (savedPath === '/start-quiz') {
      setPath('/start-quiz');
      setQuizState('welcome');
    } else {
      setPath('/');
      setQuizState('welcome');
    }
  }, []);

  // 2. Setup Config Auto-Persistence
  useEffect(() => {
    localStorage.setItem('twiquiz_username', username);
    localStorage.setItem('twiquiz_selected_topics', JSON.stringify(selectedTopics));
    localStorage.setItem('twiquiz_question_order', questionOrder);
  }, [username, selectedTopics, questionOrder]);

  // 3. Quiz State Auto-Persistence Sync
  useEffect(() => {
    if (path === '/quiz' && questions.length > 0) {
      const progress = {
        questions,
        currentIndex,
        userAnswers,
        checkedQuestions,
        questionStatus,
        quizState,
        username,
        selectedTopics,
        questionOrder
      };
      localStorage.setItem('twiquiz_progress', JSON.stringify(progress));
    } else if (quizState === 'completed') {
      const progress = {
        questions,
        currentIndex,
        userAnswers,
        checkedQuestions,
        questionStatus,
        quizState: 'completed',
        username,
        selectedTopics,
        questionOrder
      };
      localStorage.setItem('twiquiz_progress', JSON.stringify(progress));
    } else if (path === '/' || path === '/start-quiz') {
      localStorage.removeItem('twiquiz_progress');
    }
  }, [questions, currentIndex, userAnswers, checkedQuestions, questionStatus, quizState, path, username, selectedTopics, questionOrder]);

  // 4. Browser Back/Forward popstate sync
  useEffect(() => {
    const handlePopState = () => {
      const activePath = window.location.pathname;
      setPath(activePath);
      
      if (activePath === '/quiz') {
        const progressStr = localStorage.getItem('twiquiz_progress');
        if (progressStr) {
          try {
            const saved = JSON.parse(progressStr);
            setQuestions(saved.questions || []);
            setCurrentIndex(saved.currentIndex || 0);
            setUserAnswers(saved.userAnswers || {});
            setCheckedQuestions(saved.checkedQuestions || {});
            setQuestionStatus(saved.questionStatus || {});
            setQuizState(saved.quizState || 'quiz');
            return;
          } catch (_) {}
        }
      }
      setQuizState('welcome');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 5. Auto-fill selectedOptions when user navigates to a card
  useEffect(() => {
    if (activeQuestion && path === '/quiz') {
      const previouslySelected = userAnswers[currentIndex];
      setSelectedOptions(previouslySelected || []);
    }
  }, [currentIndex, path, userAnswers, activeQuestion]);

  // Topic card toggle click
  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(prev => {
      if (prev.includes(topic)) {
        return prev.filter(t => t !== topic);
      } else {
        return [...prev, topic];
      }
    });
  };

  const handleSelectAllTopics = () => {
    setSelectedTopics([...allTopics]);
  };

  const handleClearAllTopics = () => {
    setSelectedTopics([]);
  };

  // Start quiz action
  const handleStartQuiz = () => {
    // Filter questions by selected categories
    let filtered = defaultQuestions.filter(q => {
      const cat = q.category || 'General Pharmacology';
      return selectedTopics.includes(cat);
    });

    if (filtered.length === 0) {
      filtered = [...defaultQuestions];
    }

    let finalQuestions: Question[] = [];
    if (questionOrder === 'sequenced') {
      // Sort questions in ascending order of their original IDs, options in original order
      finalQuestions = [...filtered].sort((a, b) => a.id - b.id);
    } else {
      // Shuffle questions and shuffle their options
      const shuffled = shuffleArray(filtered);
      finalQuestions = shuffled.map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
    }

    setQuestions(finalQuestions);
    setCurrentIndex(0);
    setSelectedOptions([]);
    setUserAnswers({});
    setCheckedQuestions({});
    
    // Set all question statuses to unattempted initially
    const initialStatus: Record<number, 'submitted' | 'review' | 'unattempted'> = {};
    finalQuestions.forEach((_, idx) => {
      initialStatus[idx] = 'unattempted';
    });
    setQuestionStatus(initialStatus);
    
    setShowQuitModal(false);
    setShowFinishModal(false);
    setQuizState('quiz');
    navigateTo('/quiz');
  };

  // Option selection click handler
  const handleOptionSelect = (option: string) => {
    if (!activeQuestion) return;
    // Prevent selections if the question is already checked
    if (checkedQuestions[currentIndex]) return;

    const isMultiSelect = activeQuestion.answers.length > 1;
    if (isMultiSelect) {
      setSelectedOptions(prev => {
        if (prev.includes(option)) {
          return prev.filter(o => o !== option);
        } else {
          return [...prev, option];
        }
      });
    } else {
      setSelectedOptions([option]);
    }
  };

  // Action: Check Answer (Locks option state and reveals correctness inline)
  const handleCheckAnswer = () => {
    if (!activeQuestion || selectedOptions.length === 0) return;

    // Save answer selection
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: selectedOptions
    }));

    // Record as checked
    setCheckedQuestions(prev => ({
      ...prev,
      [currentIndex]: true
    }));

    // Update status to submitted
    setQuestionStatus(prev => ({
      ...prev,
      [currentIndex]: 'submitted'
    }));
  };

  // Action: Next Question
  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptions([]);
    } else {
      // Last card, trigger Finish Grade confirmation dialog
      setShowFinishModal(true);
    }
  };

  // Action: Skip Question (Proceeds without inline correctness validation)
  const handleSkipQuestion = () => {
    if (!checkedQuestions[currentIndex]) {
      setQuestionStatus(prev => ({
        ...prev,
        [currentIndex]: 'unattempted'
      }));
    }
    
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptions([]);
    } else {
      setShowFinishModal(true);
    }
  };

  // Action: Toggle Mark for Review
  const handleMarkForReview = () => {
    if (!activeQuestion) return;

    setQuestionStatus(prev => {
      const currentStatus = prev[currentIndex];
      const nextStatus = currentStatus === 'review' 
        ? (checkedQuestions[currentIndex] ? 'submitted' : 'unattempted') 
        : 'review';
      return {
        ...prev,
        [currentIndex]: nextStatus
      };
    });
  };

  // Action: Finish Quiz (Triggers completion report view)
  const handleGradeQuiz = () => {
    // Save selections on active question if skipped check
    if (activeQuestion && selectedOptions.length > 0 && !checkedQuestions[currentIndex]) {
      setUserAnswers(prev => ({
        ...prev,
        [currentIndex]: selectedOptions
      }));
      setCheckedQuestions(prev => ({
        ...prev,
        [currentIndex]: true
      }));
      setQuestionStatus(prev => ({
        ...prev,
        [currentIndex]: 'submitted'
      }));
    }
    
    setShowFinishModal(false);
    setQuizState('completed');
  };

  // Action: Quit Quiz Confirm
  const handleQuitQuizConfirm = () => {
    setShowQuitModal(false);
    setQuizState('welcome');
    navigateTo('/');
  };

  // Statistics Calculations
  const submittedCount = Object.values(questionStatus).filter(status => status === 'submitted').length;
  const reviewCount = Object.values(questionStatus).filter(status => status === 'review').length;
  const unattemptedCount = questions.length - submittedCount - reviewCount;

  // Helper to check exact correctness of multi-select answers
  const areAnswersCorrect = (userSel: string[] | undefined, correctAnswers: string[]) => {
    if (!userSel || userSel.length !== correctAnswers.length) return false;
    return correctAnswers.every(ans => userSel.includes(ans));
  };

  // Grade Statistics for score summary display
  let scoreCorrect = 0;
  let attemptedCount = 0;
  
  if (quizState === 'completed') {
    questions.forEach((q, idx) => {
      let userSel = userAnswers[idx];
      if (idx === currentIndex && selectedOptions.length > 0 && (!userSel || userSel.length === 0)) {
        userSel = selectedOptions;
      }
      userSel = userSel || [];
      
      if (userSel.length > 0) {
        attemptedCount += 1;
        if (areAnswersCorrect(userSel, q.answers)) {
          scoreCorrect += 1;
        }
      }
    });
  }

  const scorePercentage = questions.length > 0 ? Math.round((scoreCorrect / questions.length) * 100) : 0;
  const attemptedAccuracy = attemptedCount > 0 ? Math.round((scoreCorrect / attemptedCount) * 100) : 0;

  // Total cumulative question counts for start summary card
  const totalSummaryQuestionsCount = selectedTopics.reduce((total, cat) => {
    return total + (topicCounts[cat] || 0);
  }, 0);

  // 6. Global Keyboard Keybindings (Double-Enter checked sequence, M for review)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (path !== '/quiz' || quizState !== 'quiz' || showQuitModal || showFinishModal) return;

      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const isChecked = checkedQuestions[currentIndex] === true;

      if (e.key === 'Enter') {
        e.preventDefault();
        if (!isChecked) {
          if (selectedOptions.length > 0) {
            handleCheckAnswer();
          }
        } else {
          handleNextQuestion();
        }
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        handleMarkForReview();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [path, quizState, showQuitModal, showFinishModal, selectedOptions, currentIndex, checkedQuestions, questions]);

  return (
    <>
      {/* 1. APP HEADER */}
      <header>
        <div className="logo-container" style={{ cursor: 'pointer' }} onClick={() => {
          if (quizState === 'quiz') {
            setShowQuitModal(true);
          } else {
            setQuizState('welcome');
            navigateTo('/');
          }
        }}>
          <div className="logo-icon">T</div>
          <span className="logo-text">TwiQuiz</span>
        </div>
        
        {path === '/quiz' && quizState === 'quiz' && (
          <div className="header-actions">
            <button 
              className="btn-secondary" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{ borderRadius: '8px', padding: '0.45rem 0.9rem' }}
            >
              {isSidebarOpen ? <X size={15} /> : <Menu size={15} />}
              {isSidebarOpen ? 'Hide Nav' : 'Show Nav'}
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => setShowQuitModal(true)}
              style={{ borderColor: 'var(--error-border)', color: 'var(--error)', borderRadius: '8px', padding: '0.45rem 0.9rem' }}
            >
              <LogOut size={13} />
              Quit Quiz
            </button>
          </div>
        )}
      </header>

      {/* 2. APP VIEW GRID */}
      <div className="app-layout">
        
        {/* A. MAIN PANEL AREA */}
        <main className="main-content">
          
          {/* LOBBY / REDESIGNED WELCOME HERO SCREEN */}
          {path === '/' && quizState === 'welcome' && (
            <div className="glass-card welcome-hero">
              <div className="welcome-logo">🧠</div>
              <div className="badge">Knowledge Assessment Redefined</div>
              <h1 className="hero-title">TwiQuiz Platform</h1>
              <p className="hero-subtitle">
                Welcome to TwiQuiz, a modern, minimalist assessment console designed by Twistark Technologies. 
                Configure topic categories, select sequence options, and challenge yourself.
              </p>

              <button className="btn-primary" onClick={() => navigateTo('/start-quiz')} style={{ marginTop: '0.5rem' }}>
                <Play size={15} />
                Configure Quiz Settings
                <ArrowRight size={15} />
              </button>

              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon"><FolderSync size={16} /></div>
                  <div className="feature-title">Inline Verifications</div>
                  <div className="feature-desc">Select options, press enter to immediately check your answer inline.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><FileSpreadsheet size={16} /></div>
                  <div className="feature-title">Topic Filtering</div>
                  <div className="feature-desc">Extract custom question lists under specific subjects dynamically.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Trophy size={16} /></div>
                  <div className="feature-title">Double-Enter Loop</div>
                  <div className="feature-desc">Keyboard-driven flow: click options, press enter to check, press enter again to skip.</div>
                </div>
              </div>
            </div>
          )}

          {/* CONFIGURATION SETUP SCREEN (/start-quiz) */}
          {path === '/start-quiz' && quizState === 'welcome' && (
            <div className="glass-card" style={{ animation: 'slideUp 0.4s ease-out' }}>
              <h2 className="config-title">Configure your quiz run</h2>
              <p className="config-subtitle">Name, topic selection, sequenced or randomized order, and inline question count controls.</p>
              
              {/* Name Input */}
              <div className="name-input-group">
                <label className="input-label">Your Name</label>
                <input 
                  type="text" 
                  className="name-input" 
                  placeholder="Enter your name to begin" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Topics Selection Grid */}
              <div className="topics-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="input-label">Topics Categories</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem', borderRadius: '4px' }} onClick={handleSelectAllTopics}>Select All</button>
                    <button className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem', borderRadius: '4px' }} onClick={handleClearAllTopics}>Clear All</button>
                  </div>
                </div>
                
                <div className="topics-grid">
                  {allTopics.map((topic, index) => {
                    const count = topicCounts[topic] || 0;
                    const isSelected = selectedTopics.includes(topic);
                    return (
                      <div 
                        key={topic} 
                        className={`topic-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleTopicToggle(topic)}
                      >
                        <div className="topic-card-info">
                          <span className="topic-card-title">{index + 1}. {topic}</span>
                          <span className="topic-card-count">{count} questions</span>
                        </div>
                        <div className="topic-card-checkbox">
                          {isSelected && <Check size={10} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Question Order Toggle */}
              <div className="order-section">
                <label className="input-label">Question Order</label>
                <div className="order-toggle-container">
                  <button 
                    className={`order-toggle-btn ${questionOrder === 'sequenced' ? 'active' : ''}`}
                    onClick={() => setQuestionOrder('sequenced')}
                  >
                    Sequenced
                  </button>
                  <button 
                    className={`order-toggle-btn ${questionOrder === 'randomized' ? 'active' : ''}`}
                    onClick={() => setQuestionOrder('randomized')}
                  >
                    Randomized
                  </button>
                </div>
              </div>

              {/* Selected Quiz Setup Box */}
              <div className="setup-summary-box">
                <div className="setup-summary-title">Selected Quiz Setup</div>
                <div className="setup-summary-columns">
                  <div className="setup-summary-col">
                    <span className="setup-summary-label">Topics Selected</span>
                    <span className="setup-summary-val" title={selectedTopics.length === allTopics.length ? 'All Topics Selected' : selectedTopics.join(', ') || 'None'}>
                      {selectedTopics.length === 0 
                        ? 'None selected' 
                        : selectedTopics.length === allTopics.length 
                          ? 'All Topics' 
                          : `${selectedTopics.length} TopicsSelected`}
                    </span>
                  </div>
                  <div className="setup-summary-col">
                    <span className="setup-summary-label">Questions</span>
                    <span className="setup-summary-val">{totalSummaryQuestionsCount}</span>
                  </div>
                  <div className="setup-summary-col">
                    <span className="setup-summary-label">Order Mode</span>
                    <span className="setup-summary-val" style={{ textTransform: 'capitalize' }}>{questionOrder}</span>
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
                <button 
                  className="btn-secondary" 
                  onClick={() => { navigateTo('/'); setQuizState('welcome'); }}
                >
                  Back to Lobby
                </button>
                <button 
                  className="btn-primary btn-cyan" 
                  onClick={handleStartQuiz}
                  disabled={selectedTopics.length === 0}
                  style={{ minWidth: '150px' }}
                >
                  <Play size={14} />
                  Start Quiz
                </button>
              </div>

            </div>
          )}

          {/* ACTIVE QUIZ VIEW SCREEN */}
          {path === '/quiz' && quizState === 'quiz' && activeQuestion && (
            <div className="glass-card">
              
              {/* Card Meta Row */}
              <div className="quiz-header">
                <div className="badge">{activeQuestion.category || "General Knowledge"}</div>
                <div className="quiz-progress-txt">
                  Card {currentIndex + 1} of {questions.length}
                </div>
              </div>

              {/* Progress Slider Indicator */}
              <div className="quiz-progress-bar-bg">
                <div 
                  className="quiz-progress-bar-fill" 
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              {/* Active Question Content */}
              <div className="question-container">
                <h2 className="question-text">{activeQuestion.question}</h2>
                
                {/* Multiple Correct Options Indicator */}
                {activeQuestion.answers.length > 1 && (
                  <div className="multiple-answers-indicator" style={{
                    background: 'rgba(6, 182, 212, 0.06)',
                    border: '1px solid rgba(6, 182, 212, 0.12)',
                    color: 'var(--accent-cyan)',
                    padding: '0.45rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <AlertTriangle size={12} /> Multiple correct options for this question
                  </div>
                )}

                {/* Answer Options list */}
                <div className="options-list">
                  {activeQuestion.options.map((option, idx) => {
                    const letter = String.fromCharCode(65 + idx); // A, B, C, D
                    const isSelected = selectedOptions.includes(option);
                    const isMultiSelect = activeQuestion.answers.length > 1;
                    const isChecked = checkedQuestions[currentIndex] === true;
                    const isCorrect = activeQuestion.answers.includes(option);

                    // Dynamic correctness highlights once checked
                    let cardClass = "option-card";
                    if (isSelected) cardClass += " selected";
                    if (isChecked) {
                      cardClass += " disabled";
                      if (isCorrect && isSelected) {
                        cardClass += " correct";
                      } else if (!isCorrect && isSelected) {
                        cardClass += " incorrect";
                      } else if (isCorrect && !isSelected) {
                        cardClass += " correct-missed";
                      }
                    }

                    return (
                      <div 
                        key={option}
                        className={cardClass}
                        onClick={() => handleOptionSelect(option)}
                      >
                        <div className="option-index" style={{ borderRadius: isMultiSelect ? '4px' : '50%' }}>
                          {isMultiSelect ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                              {(isChecked && isCorrect) ? '✓' : (isSelected && !isChecked) ? '✓' : letter}
                            </span>
                          ) : letter}
                        </div>
                        <div className="option-content">{option}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Inline Concept Feedback box panel */}
                {checkedQuestions[currentIndex] && (
                  <div className={`feedback-box ${areAnswersCorrect(userAnswers[currentIndex], activeQuestion.answers) ? 'correct' : 'incorrect'}`}>
                    <div className={`feedback-title-row ${areAnswersCorrect(userAnswers[currentIndex], activeQuestion.answers) ? 'correct' : 'incorrect'}`}>
                      {areAnswersCorrect(userAnswers[currentIndex], activeQuestion.answers) ? (
                        <>
                          <CheckCircle2 size={14} style={{ color: 'var(--success)' }} />
                          <span>Correct!</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={14} style={{ color: 'var(--error)' }} />
                          <span>Incorrect</span>
                        </>
                      )}
                    </div>
                    <p className="feedback-text">
                      <strong>Concept Explanation:</strong> {activeQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Footer buttons row matching mockups */}
                <div className="quiz-footer-actions">
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button 
                      className="btn-secondary" 
                      onClick={() => {
                        if (currentIndex > 0) {
                          setCurrentIndex(prev => prev - 1);
                          setSelectedOptions([]);
                        }
                      }}
                      disabled={currentIndex === 0}
                      style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
                    >
                      <ArrowLeft size={14} />
                      Prev
                    </button>

                    {!checkedQuestions[currentIndex] && (
                      <button 
                        className="btn-secondary" 
                        onClick={handleSkipQuestion}
                      >
                        Skip
                      </button>
                    )}
                  </div>

                  <div className="actions-right">
                    <button 
                      className="btn-warning" 
                      onClick={handleMarkForReview}
                    >
                      {questionStatus[currentIndex] === 'review' ? 'Marked for Review ✓' : 'Mark for Review'}
                    </button>

                    {/* Check Answer toggling with Next button */}
                    {!checkedQuestions[currentIndex] ? (
                      <button 
                        className="btn-primary btn-cyan" 
                        onClick={handleCheckAnswer}
                        disabled={selectedOptions.length === 0}
                        style={{ 
                          opacity: selectedOptions.length === 0 ? 0.5 : 1, 
                          cursor: selectedOptions.length === 0 ? 'not-allowed' : 'pointer' 
                        }}
                      >
                        Check Answer
                        <Check size={14} />
                      </button>
                    ) : (
                      <button 
                        className="btn-primary" 
                        onClick={handleNextQuestion}
                      >
                        {currentIndex + 1 === questions.length ? 'Submit Quiz' : 'Next Question'}
                        <ArrowRight size={14} />
                      </button>
                    )}

                    <button 
                      className="btn-primary" 
                      onClick={() => setShowFinishModal(true)}
                      style={{ background: 'linear-gradient(135deg, #a3e635, #65a30d)', boxShadow: '0 3px 12px rgba(132, 204, 22, 0.25)' }}
                    >
                      Submit test
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* COMPLETED REPORT CARD SCREEN */}
          {quizState === 'completed' && (
            <div className="glass-card completed-layout">
              <div className="badge" style={{ marginBottom: '0.75rem' }}>
                <Award size={12} style={{ marginRight: '3px', verticalAlign: 'middle' }} /> 
                Assessment Complete
              </div>
              <h2 className="completed-title">Assessment Results</h2>
              {username && <p style={{ fontSize: '1rem', color: 'white', fontWeight: 600, marginBottom: '0.75rem' }}>Tester: {username}</p>}

              {/* Dynamic SVG Score Dial Gauge */}
              <div className="score-circle-container">
                <svg className="score-circle-svg">
                  <circle className="score-circle-bg" cx="70" cy="70" r="60" />
                  <circle 
                    className="score-circle-fill" 
                    cx="70" 
                    cy="70" 
                    r="60" 
                    style={{ 
                      strokeDasharray: 377, 
                      strokeDashoffset: 377 - (377 * scorePercentage) / 100,
                      stroke: scorePercentage >= 80 ? 'var(--success)' : scorePercentage >= 60 ? 'var(--warning-gold)' : 'var(--error)'
                    }}
                  />
                </svg>
                <div className="score-text-absolute">
                  <span className="score-percentage" style={{
                    color: scorePercentage >= 80 ? 'var(--success)' : scorePercentage >= 60 ? 'var(--warning-gold)' : 'var(--error)'
                  }}>{scorePercentage}%</span>
                  <span className="score-fraction">{scoreCorrect} of {questions.length} Correct</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', maxWidth: '480px', fontSize: '0.85rem', lineHeight: 1.45 }}>
                {scorePercentage >= 80 
                  ? "Outstanding! You have demonstrated exceptional mastery across all assessed core metrics." 
                  : scorePercentage >= 60 
                    ? "Well done! You have established a solid baseline understanding of the assessment categories." 
                    : "Review the answers below to address key concept areas and refine your baseline knowledge."}
              </p>

              {/* Core Statistics Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-icon purple"><Trophy size={14} /></span>
                  <span className="stat-val">{scorePercentage}%</span>
                  <span className="stat-lbl">Overall Score</span>
                </div>

                <div className="stat-card">
                  <span className="stat-icon purple" style={{ color: 'var(--accent-cyan)' }}><FileSpreadsheet size={14} /></span>
                  <span className="stat-val">{attemptedCount} / {questions.length}</span>
                  <span className="stat-lbl">Attempted</span>
                </div>

                <div className="stat-card">
                  <span className="stat-icon green"><CheckCircle2 size={14} /></span>
                  <span className="stat-val">{attemptedAccuracy}%</span>
                  <span className="stat-lbl">Accuracy</span>
                </div>

                <div className="stat-card">
                  <span className="stat-icon red"><XCircle size={14} /></span>
                  <span className="stat-val">{questions.length - scoreCorrect}</span>
                  <span className="stat-lbl">Incorrect/Missed</span>
                </div>
              </div>

              {/* Scrollable Answer Review Panels */}
              <h3 className="review-heading">
                <HelpCircle size={18} style={{ color: 'var(--primary)' }} />
                Itemized Concept Review
              </h3>
              
              <div className="review-list">
                {questions.map((question, index) => {
                  const selectedAnswers = userAnswers[index] || [];
                  const wasCorrect = areAnswersCorrect(selectedAnswers, question.answers) && selectedAnswers.length > 0;
                  const isSkipped = selectedAnswers.length === 0;
                  const markedReviewOnly = questionStatus[index] === 'review';

                  return (
                    <div key={question.id} className="review-item">
                      <div className="review-q-header">
                        <h4 className="review-q-title">{index + 1}. {question.question}</h4>
                        <span className={`review-badge ${wasCorrect ? 'correct' : 'incorrect'}`}>
                          {wasCorrect 
                            ? 'Correct' 
                            : markedReviewOnly 
                              ? 'Reviewed Only' 
                              : isSkipped 
                                ? 'Unsubmitted' 
                                : 'Incorrect'}
                        </span>
                      </div>

                      <div className="review-answers-compare">
                        <div className="review-ans-row">
                          <span className="review-ans-lbl">Your Choice:</span>
                          <span className={`review-ans-val ${wasCorrect ? 'correct' : isSkipped ? '' : 'incorrect'}`}>
                            {isSkipped ? "None (Skipped)" : selectedAnswers.join(', ')}
                          </span>
                        </div>
                        
                        {!wasCorrect && (
                          <div className="review-ans-row">
                            <span className="review-ans-lbl">Correct Ans:</span>
                            <span className="review-ans-val correct">
                              {question.answers.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="feedback-desc" style={{ fontSize: '0.8rem', marginTop: '0.5rem', borderLeft: '2px solid rgba(255,255,255,0.05)', paddingLeft: '0.5rem', color: 'var(--text-secondary)' }}>
                        <strong>Concept Concept:</strong> {question.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Report Actions */}
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <button className="btn-secondary" onClick={() => {
                  setQuizState('welcome');
                  navigateTo('/');
                }}>
                  Back to Lobby
                </button>
                <button className="btn-primary" onClick={() => {
                  setQuizState('welcome');
                  navigateTo('/start-quiz');
                }}>
                  <RotateCcw size={14} />
                  Configure New Run
                </button>
              </div>

            </div>
          )}

        </main>

        {/* B. PREMIUM RETRACTABLE SIDEBAR CONTAINER */}
        {path === '/quiz' && quizState === 'quiz' && (
          <aside className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
            <h3 className="sidebar-title">
              <FileSpreadsheet size={16} style={{ color: 'var(--primary-hover)' }} />
              Visual Navigator
            </h3>

            {/* Assessment Progress Stats Widget */}
            <div className="sidebar-summary-box">
              <div className="sidebar-summary-title">Assessment Progress</div>
              <div className="summary-items-list">
                <div className="summary-item">
                  <span className="summary-dot-lbl">
                    <span className="status-dot submitted"></span> Attempted / Sub
                  </span>
                  <span className="summary-val submitted">{submittedCount}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-dot-lbl">
                    <span className="status-dot review"></span> Marked for Review
                  </span>
                  <span className="summary-val review">{reviewCount}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-dot-lbl">
                    <span className="status-dot unattempted"></span> Not Attempted
                  </span>
                  <span className="summary-val unattempted">{unattemptedCount}</span>
                </div>
              </div>
            </div>

            {/* Navigation Grid Circles */}
            <div className="question-nav-grid">
              {questions.map((_, idx) => {
                const status = questionStatus[idx];
                const isActive = currentIndex === idx;
                
                let bubbleClass = "q-bubble";
                if (isActive) bubbleClass += " active";
                if (status === 'submitted') bubbleClass += " submitted";
                else if (status === 'review') bubbleClass += " review";
                else bubbleClass += " unattempted";

                return (
                  <div 
                    key={idx}
                    className={bubbleClass}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setSelectedOptions([]);
                    }}
                    title={`Go to Question ${idx + 1}`}
                  >
                    {idx + 1}
                  </div>
                );
              })}
            </div>

            {/* Sidebar grading action */}
            <div className="sidebar-actions">
              <button 
                className="btn-primary" 
                onClick={() => setShowFinishModal(true)}
                style={{ width: '100%', padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}
              >
                <CheckCircle2 size={14} />
                Finish & Grade Quiz
              </button>
            </div>
          </aside>
        )}

      </div>

      {/* 3. CONFIRMATION OVERLAY MODALS */}

      {/* A. Quit Confirmation Modal */}
      {showQuitModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-alert-icon">
              <AlertTriangle size={20} />
            </div>
            <h3 className="modal-title">Quit Assessment?</h3>
            <p className="modal-desc">
              Do you really want to quit? Your active progress will not be saved and all answer logs will be lost.
            </p>
            <div className="modal-actions">
              <button 
                className="btn-secondary" 
                onClick={() => setShowQuitModal(false)}
              >
                Keep Testing
              </button>
              <button 
                className="btn-primary" 
                onClick={handleQuitQuizConfirm}
                style={{ background: 'linear-gradient(135deg, var(--error), #dc2626)', boxShadow: '0 3px 10px rgba(239, 68, 68, 0.3)' }}
              >
                Yes, Quit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* B. Finish and Grade Confirmation Modal */}
      {showFinishModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-alert-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)', color: 'var(--primary)' }}>
              <Award size={20} />
            </div>
            <h3 className="modal-title">Grade Assessment?</h3>
            <p className="modal-desc">
              Are you sure you want to finish the exam? You have:
              <br />
              <strong>{unattemptedCount}</strong> question(s) unattempted and 
              <strong> {reviewCount}</strong> marked for review.
            </p>
            <div className="modal-actions">
              <button 
                className="btn-secondary" 
                onClick={() => setShowFinishModal(false)}
              >
                Go Back
              </button>
              <button 
                className="btn-primary" 
                onClick={handleGradeQuiz}
              >
                Grade Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. BRANDING FOOTER */}
      <footer>
        <div className="footer-brand">
          <Trophy size={14} style={{ color: 'var(--primary)' }} />
          TwiQuiz Platform
        </div>
        <p className="footer-sub">
          A minimalist premium product of <a href="https://www.instagram.com/anandkolte03/" target="_blank" rel="noopener noreferrer" className="footer-link">Anand Kolte <ExternalLink size={10} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '1px' }} /></a>
        </p>
        <p className="footer-sub" style={{ fontSize: '0.68rem', marginTop: '6px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Anand Kolte. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
