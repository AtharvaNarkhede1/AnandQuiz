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
  FolderSync
} from 'lucide-react';
import { defaultQuestions, prepareQuizData, type Question } from './data/questions';

function App() {
  // App Phase States
  const [quizState, setQuizState] = useState<'welcome' | 'quiz' | 'completed'>('welcome');
  
  // Game Play Data
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Custom Answers & Navigation Status Tracker
  const [userAnswers, setUserAnswers] = useState<Record<number, string | null>>({});
  const [questionStatus, setQuestionStatus] = useState<Record<number, 'submitted' | 'review' | 'unattempted'>>({});
  
  // Retractable Sidebar & Modals
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [showQuitModal, setShowQuitModal] = useState<boolean>(false);
  const [showFinishModal, setShowFinishModal] = useState<boolean>(false);

  const activeQuestion = questions[currentIndex];

  // Auto-fill selectedOption when user navigates to an already answered question
  useEffect(() => {
    if (activeQuestion && quizState === 'quiz') {
      const previouslySelected = userAnswers[currentIndex];
      setSelectedOption(previouslySelected !== undefined ? previouslySelected : null);
    }
  }, [currentIndex, quizState, userAnswers, activeQuestion]);

  // 1. Quiz Event Handlers

  // Start the quiz (resets states & shuffles questions)
  const handleStartQuiz = () => {
    const freshQuizData = prepareQuizData(defaultQuestions);
    setQuestions(freshQuizData);
    setCurrentIndex(0);
    setSelectedOption(null);
    setUserAnswers({});
    
    // Set all question statuses to unattempted initially
    const initialStatus: Record<number, 'submitted' | 'review' | 'unattempted'> = {};
    freshQuizData.forEach((_, idx) => {
      initialStatus[idx] = 'unattempted';
    });
    setQuestionStatus(initialStatus);
    
    setShowQuitModal(false);
    setShowFinishModal(false);
    setQuizState('quiz');
  };

  // Option clicked
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  // Action: Save & Next (Submit Answer)
  const handleSubmitAnswer = () => {
    if (!activeQuestion) return;

    // Save answer
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: selectedOption
    }));

    // Update status to submitted
    setQuestionStatus(prev => ({
      ...prev,
      [currentIndex]: 'submitted'
    }));

    // Advance index or stay
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Action: Mark for Review
  const handleMarkForReview = () => {
    if (!activeQuestion) return;

    // Save answer (can be null or selected value)
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: selectedOption
    }));

    // Update status to review
    setQuestionStatus(prev => ({
      ...prev,
      [currentIndex]: 'review'
    }));

    // Advance index or stay
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Action: Navigate Back / Previous Question
  const handleNavigateBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Action: Finish Quiz (Calculates score & triggers complete stage)
  const handleGradeQuiz = () => {
    setShowFinishModal(false);
    setQuizState('completed');
  };

  // Action: Quit Quiz
  const handleQuitQuizConfirm = () => {
    setShowQuitModal(false);
    setQuizState('welcome');
  };

  // Sidebar Status Statistics Calculations
  const submittedCount = Object.values(questionStatus).filter(status => status === 'submitted').length;
  const reviewCount = Object.values(questionStatus).filter(status => status === 'review').length;
  const unattemptedCount = questions.length - submittedCount - reviewCount;

  // Grade Statistics for Score Screen
  let scoreCorrect = 0;
  if (quizState === 'completed') {
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer && questionStatus[idx] === 'submitted') {
        scoreCorrect += 1;
      }
    });
  }

  const scorePercentage = questions.length > 0 ? Math.round((scoreCorrect / questions.length) * 100) : 0;
  const wrongCount = questions.length - scoreCorrect;

  return (
    <>
      {/* 1. APP HEADER */}
      <header>
        <div className="logo-container">
          <div className="logo-icon">T</div>
          <span className="logo-text">TwiQuiz</span>
        </div>
        
        {quizState === 'quiz' && (
          <div className="header-actions">
            <button 
              className="btn-secondary" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{ padding: '0.6rem 1.2rem', borderRadius: '10px' }}
            >
              {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
              {isSidebarOpen ? 'Close Navigation' : 'Open Navigation'}
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => setShowQuitModal(true)}
              style={{ borderColor: 'var(--error-border)', color: 'var(--error)' }}
            >
              <LogOut size={16} />
              Quit Quiz
            </button>
          </div>
        )}
      </header>

      {/* 2. APP VIEW GRID */}
      <div className="app-layout">
        
        {/* A. MAIN PANEL AREA */}
        <main className="main-content">
          
          {/* LOBBY / WELCOME SCREEN */}
          {quizState === 'welcome' && (
            <div className="glass-card welcome-hero">
              <div className="badge">Knowledge Assessment Redefined</div>
              <h1 className="hero-title">TwiQuiz Platform</h1>
              <p className="hero-subtitle">
                Welcome to TwiQuiz, a minimalist, high-end environment for modern assessments. 
                Questions sequence and options are shuffled dynamically on every start.
              </p>

              <button className="btn-primary" onClick={handleStartQuiz} style={{ marginTop: '1rem' }}>
                <Play size={18} />
                Start Dynamic Quiz
              </button>

              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon"><FolderSync size={20} /></div>
                  <div className="feature-title">Dynamic Shuffling</div>
                  <div className="feature-desc">Randomizes sequence lists and options for a secure test attempt.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><FileSpreadsheet size={20} /></div>
                  <div className="feature-title">Retractable Sidebar</div>
                  <div className="feature-desc">Interactive index panel for live visual status reviews.</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Trophy size={20} /></div>
                  <div className="feature-title">Assessment Scoring</div>
                  <div className="feature-desc">Premium accuracy charts, itemized audits, and key reviews.</div>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVE QUESTION PANEL */}
          {quizState === 'quiz' && activeQuestion && (
            <div className="glass-card">
              
              {/* Card Meta Row */}
              <div className="quiz-header">
                <div className="badge">{activeQuestion.category || "General Knowledge"}</div>
                <div className="quiz-progress-txt">
                  Active Card {currentIndex + 1} of {questions.length}
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
                
                {/* Answer Options */}
                <div className="options-list">
                  {activeQuestion.options.map((option, idx) => {
                    const letter = String.fromCharCode(65 + idx); // A, B, C, D
                    const isSelected = selectedOption === option;

                    return (
                      <div 
                        key={option}
                        className={`option-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        <div className="option-index">{letter}</div>
                        <div className="option-content">{option}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer buttons row */}
                <div className="quiz-footer-actions">
                  <button 
                    className="btn-secondary" 
                    onClick={handleNavigateBack}
                    disabled={currentIndex === 0}
                    style={{ opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>

                  <div className="actions-right">
                    <button 
                      className="btn-warning" 
                      onClick={handleMarkForReview}
                    >
                      Mark for Review
                    </button>

                    <button 
                      className="btn-primary" 
                      onClick={handleSubmitAnswer}
                      disabled={selectedOption === null}
                      style={{ 
                        opacity: selectedOption === null ? 0.6 : 1, 
                        cursor: selectedOption === null ? 'not-allowed' : 'pointer' 
                      }}
                    >
                      {currentIndex + 1 === questions.length ? 'Submit Answer' : 'Submit & Next'}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* COMPLETED REPORT CARD SCREEN */}
          {quizState === 'completed' && (
            <div className="glass-card completed-layout">
              <div className="badge" style={{ marginBottom: '1.25rem' }}>
                <Award size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> 
                Assessment Complete
              </div>
              <h2 className="completed-title">Assessment Results</h2>

              {/* Dynamic SVG Score Dial Gauge */}
              <div className="score-circle-container">
                <svg className="score-circle-svg">
                  <circle className="score-circle-bg" cx="90" cy="90" r="80" />
                  <circle 
                    className="score-circle-fill" 
                    cx="90" 
                    cy="90" 
                    r="80" 
                    style={{ strokeDashoffset: 502 - (502 * scorePercentage) / 100 }}
                  />
                </svg>
                <div className="score-text-absolute">
                  <span className="score-percentage">{scorePercentage}%</span>
                  <span className="score-fraction">{scoreCorrect} / {questions.length} Correct</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '540px', fontSize: '1rem', lineHeight: 1.5 }}>
                {scorePercentage >= 80 
                  ? "Outstanding! You have demonstrated exceptional mastery across all assessed core metrics." 
                  : scorePercentage >= 60 
                    ? "Well done! You have established a solid baseline understanding of the assessment categories." 
                    : "Review the answers below to address key concept areas and refine your baseline knowledge."}
              </p>

              {/* Core Statistics Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-icon purple"><Trophy size={16} /></span>
                  <span className="stat-val">{scorePercentage}%</span>
                  <span className="stat-lbl">Final Score</span>
                </div>

                <div className="stat-card">
                  <span className="stat-icon green"><CheckCircle2 size={16} /></span>
                  <span className="stat-val">{scoreCorrect}</span>
                  <span className="stat-lbl">Correct Answers</span>
                </div>

                <div className="stat-card">
                  <span className="stat-icon red"><XCircle size={16} /></span>
                  <span className="stat-val">{wrongCount}</span>
                  <span className="stat-lbl">Unsolved / Wrong</span>
                </div>
              </div>

              {/* Scrollable Answer Review Panels */}
              <h3 className="review-heading">
                <HelpCircle size={22} style={{ color: 'var(--primary)' }} />
                Itemized Concept Review
              </h3>
              
              <div className="review-list">
                {questions.map((question, index) => {
                  const selectedAnswer = userAnswers[index];
                  const wasCorrect = selectedAnswer === question.answer && questionStatus[index] === 'submitted';
                  const isSkipped = selectedAnswer === null || selectedAnswer === undefined;
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
                            {isSkipped ? "None (Skipped)" : selectedAnswer}
                          </span>
                        </div>
                        
                        {!wasCorrect && (
                          <div className="review-ans-row">
                            <span className="review-ans-lbl">Correct Ans:</span>
                            <span className="review-ans-val correct">
                              {question.answer}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="feedback-desc" style={{ fontSize: '0.9rem', marginTop: '0.75rem', borderLeft: '2px solid rgba(255,255,255,0.05)', paddingLeft: '0.75rem' }}>
                        <strong>Concept:</strong> {question.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Report Actions */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn-secondary" onClick={() => setQuizState('welcome')}>
                  Back to Lobby
                </button>
                <button className="btn-primary" onClick={handleStartQuiz}>
                  <RotateCcw size={18} />
                  Retake Quiz
                </button>
              </div>

            </div>
          )}

        </main>

        {/* B. PREMIUM RETRACTABLE SIDEBAR CONTAINER */}
        {quizState === 'quiz' && (
          <aside className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
            <h3 className="sidebar-title">
              <FileSpreadsheet size={20} style={{ color: 'var(--primary-hover)' }} />
              Visual Navigator
            </h3>

            {/* Assessment Progress Stats Widget */}
            <div className="sidebar-summary-box">
              <div className="sidebar-summary-title">Assessment Progress</div>
              <div className="summary-items-list">
                <div className="summary-item">
                  <span className="summary-dot-lbl">
                    <span className="status-dot submitted"></span> Submitted
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
                    onClick={() => setCurrentIndex(idx)}
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
                style={{ width: '100%', padding: '0.8rem 1rem', fontSize: '0.95rem' }}
              >
                <CheckCircle2 size={16} />
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
              <AlertTriangle size={24} />
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
                style={{ background: 'linear-gradient(135deg, var(--error), #dc2626)', boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)' }}
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
              <Award size={24} />
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
          <Trophy size={16} style={{ color: 'var(--primary)' }} />
          TwiQuiz Platform
        </div>
        <p className="footer-sub">
          A minimalist premium product of <a href="https://twistark.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twistark Technologies <ExternalLink size={11} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '2px' }} /></a>
        </p>
        <p className="footer-sub" style={{ fontSize: '0.75rem', marginTop: '8px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Twistark Technologies. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
