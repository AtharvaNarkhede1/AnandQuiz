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

// ==========================================
// SUPABASE CONFIGURATION
// Configure your keys here or set them in a .env file as VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY
// ==========================================
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://xvklpcgwfaeyltqgsvch.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2a2xwY2d3ZmFleWx0cWdzdmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMjU3MzAsImV4cCI6MjA5NTkwMTczMH0.1CWtSzr6ONg-9xAAKImszuZ_Wc73fsjDxchJABKgkJg";

// ==========================================
// PROFANITY / SLANG WORD FILTER
// Includes both English and Hinglish slang words to keep the leaderboard clean
// ==========================================
const BANNED_WORDS = [
  // English slangs
  'fuck', 'shit', 'bitch', 'asshole', 'cunt', 'dick', 'cock', 'pussy', 'bastard', 'whore', 'slut', 'faggot', 'nigger', 'retard',
  // Hinglish / Hindi slangs
  'chutiya', 'gandu', 'loda', 'lodu', 'bhosadi', 'bhosdike', 'madarchod', 'behenchod', 'harami', 'saala', 'chut', 'kamine', 'bsdk',
  'mc', 'bc', 'gand', 'bhosad', 'madrchod', 'behanchod', 'kaminey', 'laund', 'lauda', 'chutiyapa', 'randi', 'saali', 'hrami',
  'tatte', 'jhat', 'jhant', 'goti'
];

function containsProfanity(name: string): boolean {
  const normalized = name.toLowerCase().trim();
  if (!normalized) return false;
  
  // Clean special characters for safety checks
  const cleanText = normalized.replace(/[^a-z0-9\s]/g, '');
  const words = cleanText.split(/\s+/);
  
  for (const banned of BANNED_WORDS) {
    if (banned.length <= 3) {
      // For short keywords (like mc, bc, bsdk), check for exact word matching
      if (words.includes(banned)) return true;
    } else {
      // For longer slangs, check substring matches
      if (normalized.includes(banned)) return true;
    }
  }
  return false;
}

// Helper to shuffle array locally to ensure safety
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

interface LeaderboardRecord {
  id: number;
  name: string;
  score_percentage: number;
  correct_count: number;
  total_count: number;
  topics: string[];
  order_mode: string;
  created_at: string;
}

function App() {
  // SPA Custom Router Path state ('/' | '/start-quiz' | '/quiz' | '/twi')
  const [path, setPath] = useState<string>(() => {
    const currentPath = window.location.pathname;
    if (['/', '/start-quiz', '/quiz', '/twi'].includes(currentPath)) {
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

  // Leaderboard state
  const [leaderboard, setLeaderboard] = useState<LeaderboardRecord[]>([]);
  const [isLeaderboardLoading, setIsLeaderboardLoading] = useState<boolean>(false);
  const [leaderboardError, setLeaderboardError] = useState<string>('');

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
  
  // Validation flags for Name
  const isNameEmpty = username.trim() === '';
  const isNameInvalid = containsProfanity(username);

  // Helper to update path & address history
  const navigateTo = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  // 1. Initial State Restoration from localStorage & Path Checking
  useEffect(() => {
    const savedPath = window.location.pathname;
    const savedProgressStr = localStorage.getItem('twiquiz_progress');
    
    if (savedPath === '/twi') {
      setPath('/twi');
      setQuizState('welcome');
      fetchLeaderboard();
      return;
    }

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
    } else if (path === '/' || path === '/start-quiz' || path === '/twi') {
      localStorage.removeItem('twiquiz_progress');
    }
  }, [questions, currentIndex, userAnswers, checkedQuestions, questionStatus, quizState, path, username, selectedTopics, questionOrder]);

  // 4. Browser Back/Forward popstate sync
  useEffect(() => {
    const handlePopState = () => {
      const activePath = window.location.pathname;
      setPath(activePath);
      
      if (activePath === '/twi') {
        fetchLeaderboard();
        setQuizState('welcome');
        return;
      }
      
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

  // 5. Fetch leaderboard score trigger when path becomes /twi
  useEffect(() => {
    if (path === '/twi') {
      fetchLeaderboard();
    }
  }, [path]);

  // 6. Auto-fill selectedOptions when user navigates to a card
  useEffect(() => {
    if (activeQuestion && path === '/quiz') {
      const previouslySelected = userAnswers[currentIndex];
      setSelectedOptions(previouslySelected || []);
    }
  }, [currentIndex, path, userAnswers, activeQuestion]);

  // Fetch leaderboard statistics from Supabase REST API
  const fetchLeaderboard = async () => {
    if (SUPABASE_URL.includes("your-supabase-url") || SUPABASE_ANON_KEY.includes("your-anon-key")) {
      setLeaderboardError('keys_not_set');
      return;
    }
    
    setIsLeaderboardLoading(true);
    setLeaderboardError('');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/twiquiz_leaderboard?order=created_at.desc`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      if (!res.ok) throw new Error(`Server returned code ${res.status}`);
      const data = await res.json();
      setLeaderboard(data || []);
    } catch (err: any) {
      console.error('Failed to load leaderboard data:', err);
      setLeaderboardError(err.message || 'Failed to connect to Supabase database.');
    } finally {
      setIsLeaderboardLoading(false);
    }
  };

  // Asynchronously save score to Supabase leaderboard
  const saveScoreToLeaderboard = async (finalCorrect: number, finalTotal: number, finalPct: number) => {
    if (SUPABASE_URL.includes("your-supabase-url") || SUPABASE_ANON_KEY.includes("your-anon-key")) {
      console.log("Supabase placeholder detected. Leaderboard database save bypassed.");
      return;
    }

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/twiquiz_leaderboard`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: username.trim(),
          score_percentage: finalPct,
          correct_count: finalCorrect,
          total_count: finalTotal,
          topics: selectedTopics,
          order_mode: questionOrder,
          created_at: new Date().toISOString()
        })
      });
      console.log("Score successfully logged to Supabase leaderboard!");
    } catch (err) {
      console.error("Failed to post score record to Supabase:", err);
    }
  };

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
    if (isNameEmpty || isNameInvalid) return;

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
      finalQuestions = [...filtered].sort((a, b) => a.id - b.id);
    } else {
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

  // Action: Check Answer
  const handleCheckAnswer = () => {
    if (!activeQuestion || selectedOptions.length === 0) return;

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
  };

  // Action: Next Question
  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptions([]);
    } else {
      setShowFinishModal(true);
    }
  };

  // Action: Skip Question
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
    const finalTotal = questions.length;
    
    // Save selections on active question if skipped check
    let activeSelected = selectedOptions;
    if (activeQuestion && activeSelected.length > 0 && !checkedQuestions[currentIndex]) {
      setUserAnswers(prev => ({
        ...prev,
        [currentIndex]: activeSelected
      }));
      setCheckedQuestions(prev => ({
        ...prev,
        [currentIndex]: true
      }));
      setQuestionStatus(prev => ({
        ...prev,
        [currentIndex]: 'submitted'
      }));
    } else {
      activeSelected = userAnswers[currentIndex] || [];
    }

    // Re-calculate correctness exactly to submit to cloud database immediately
    let recalculatedCorrect = 0;
    questions.forEach((q, idx) => {
      let sel = userAnswers[idx];
      if (idx === currentIndex && activeSelected.length > 0) {
        sel = activeSelected;
      }
      sel = sel || [];
      if (sel.length > 0 && areAnswersCorrect(sel, q.answers)) {
        recalculatedCorrect += 1;
      }
    });

    const recalculatedPercentage = finalTotal > 0 ? Math.round((recalculatedCorrect / finalTotal) * 100) : 0;
    
    // Post to Supabase Leaderboard
    saveScoreToLeaderboard(recalculatedCorrect, finalTotal, recalculatedPercentage);

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
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (path === '/start-quiz') {
        if (e.key === 'Enter') {
          if (selectedTopics.length > 0 && !isNameEmpty && !isNameInvalid) {
            e.preventDefault();
            handleStartQuiz();
          }
        }
        return;
      }

      if (path !== '/quiz' || quizState !== 'quiz' || showQuitModal || showFinishModal) return;

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
  }, [path, quizState, showQuitModal, showFinishModal, selectedOptions, currentIndex, checkedQuestions, questions, selectedTopics, username]);

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
        
        <div className="header-actions">
          {path !== '/twi' && (
            <button 
              className="btn-secondary" 
              onClick={() => { setQuizState('welcome'); navigateTo('/twi'); }}
              style={{ borderRadius: '8px', padding: '0.45rem 0.9rem', borderColor: 'var(--primary)' }}
            >
              🏆 Leaderboard
            </button>
          )}
          
          {path === '/twi' && (
            <button 
              className="btn-secondary" 
              onClick={() => navigateTo('/')}
              style={{ borderRadius: '8px', padding: '0.45rem 0.9rem' }}
            >
              🏠 Home
            </button>
          )}

          {path === '/quiz' && quizState === 'quiz' && (
            <>
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
            </>
          )}
        </div>
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
                Welcome to TwiQuiz, a modern, minimalist assessment console designed by Anand Kolte. 
                Configure topic categories, select sequence options, and challenge yourself.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button className="btn-primary" onClick={() => navigateTo('/start-quiz')}>
                  <Play size={15} />
                  Configure Quiz Settings
                  <ArrowRight size={15} />
                </button>
                
                <button className="btn-secondary" onClick={() => navigateTo('/twi')} style={{ borderColor: 'var(--primary)' }}>
                  View Live Leaderboard
                </button>
              </div>

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
              
              {/* Name Input (MANDATORY AND SANITIZED WITH SLANG FILTER) */}
              <div className="name-input-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="input-label">Your Name <span style={{ color: 'var(--error)' }}>*</span></label>
                  {isNameInvalid && (
                    <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.25)', color: 'var(--error)', fontSize: '0.68rem', textTransform: 'none', padding: '0.2rem 0.5rem' }}>
                      Banned words/slangs are not allowed!
                    </span>
                  )}
                </div>
                <input 
                  type="text" 
                  className="name-input" 
                  placeholder="Enter your name to begin (Required)" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ borderColor: isNameInvalid ? 'var(--error)' : BANNED_WORDS.some(w => username.toLowerCase().includes(w)) ? 'var(--error)' : '' }}
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
                          : `${selectedTopics.length} Topics`}
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
                  disabled={selectedTopics.length === 0 || isNameEmpty || isNameInvalid}
                  style={{ minWidth: '150px' }}
                  title={(isNameEmpty) ? "Please enter your name to start" : (isNameInvalid) ? "Banned slang detected!" : "Start Quiz"}
                >
                  <Play size={14} />
                  Start Quiz
                </button>
              </div>

              {/* Keyboard Shortcuts Footer */}
              <div className="keyboard-shortcuts-footer" style={{ marginTop: '1.25rem' }}>
                <span className="shortcut-item">
                  <kbd className="key-tag">Enter</kbd> <span>to start quiz</span>
                </span>
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

                {/* Keyboard Shortcuts Footer */}
                <div className="keyboard-shortcuts-footer" style={{ marginTop: '1.25rem' }}>
                  <span className="shortcut-item">
                    <kbd className="key-tag">Enter</kbd> <span>to check answer & load next card</span>
                  </span>
                  <span className="shortcut-divider">•</span>
                  <span className="shortcut-item">
                    <kbd className="key-tag">M</kbd> <span>to toggle review status</span>
                  </span>
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
                        <strong>Concept Explanation:</strong> {question.explanation}
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

          {/* DYNAMIC LEADERBOARD / DATABASE LOG RECORDS VIEW SCREEN (/twi) */}
          {path === '/twi' && (
            <div className="glass-card" style={{ animation: 'slideUp 0.4s ease-out', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div>
                  <h2 className="config-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    🏆 TwiQuiz Leaderboard
                  </h2>
                  <p className="config-subtitle" style={{ marginBottom: 0 }}>Chronological history logs of student attempts synchronized from Supabase cloud database.</p>
                </div>
                
                <button 
                  className="btn-secondary" 
                  onClick={fetchLeaderboard}
                  disabled={isLeaderboardLoading}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.9rem' }}
                >
                  <RotateCcw size={13} className={isLeaderboardLoading ? 'spin-anim' : ''} />
                  Refresh
                </button>
              </div>

              {isLeaderboardLoading ? (
                <div style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div className="spin-loader"></div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Connecting to database and reading records...</p>
                </div>
              ) : leaderboardError === 'keys_not_set' ? (
                /* Keys not set warning box */
                <div style={{
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--primary-hover)' }}>
                    <HelpCircle size={32} style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>Leaderboard is Ready for Connection!</h4>
                      <p style={{ fontSize: '0.85rem', lineHeight: 1.45, color: 'var(--text-secondary)' }}>
                        You have successfully activated the `/twi` leaderboards routing and display console! To start permanently saving student names and scores in the cloud, simply link your Supabase database:
                      </p>
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '8px',
                    padding: '1rem',
                    fontFamily: 'monospace',
                    fontSize: '0.78rem',
                    color: '#c084fc',
                    border: '1px solid var(--border-light)',
                    lineHeight: 1.5
                  }}>
                    <span style={{ color: '#64748b' }}># 1. Create a table in your Supabase SQL Editor:</span>
                    <br />
                    create table twiquiz_leaderboard (
                    <br />
                    &nbsp;&nbsp;id bigint generated always as identity primary key,
                    <br />
                    &nbsp;&nbsp;name text not null,
                    <br />
                    &nbsp;&nbsp;score_percentage integer not null,
                    <br />
                    &nbsp;&nbsp;correct_count integer not null,
                    <br />
                    &nbsp;&nbsp;total_count integer not null,
                    <br />
                    &nbsp;&nbsp;topics text[] not null,
                    <br />
                    &nbsp;&nbsp;order_mode text not null,
                    <br />
                    &nbsp;&nbsp;created_at timestamp with time zone default timezone('utc'::text, now()) not null
                    <br />
                    );
                  </div>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    <strong>Next Step:</strong> Paste your Supabase URL and Anon Key into the top configuration block of <code>src/App.tsx</code> (or add them inside a <code>.env</code> file as <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>). Once connected, student scores will save and display here automatically!
                  </p>
                </div>
              ) : leaderboardError ? (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.15)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  color: 'var(--error)',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <AlertTriangle size={16} />
                  <span>Error: {leaderboardError}. Please verify your Supabase keys and table structure.</span>
                </div>
              ) : leaderboard.length === 0 ? (
                <div style={{ padding: '3.5rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>No quiz attempts logged yet.</p>
                  <p style={{ fontSize: '0.78rem', marginTop: '0.25rem' }}>Be the first to complete a quiz and post your score!</p>
                  <button className="btn-primary" onClick={() => navigateTo('/start-quiz')} style={{ marginTop: '1rem', padding: '0.5rem 1.25rem', fontSize: '0.82rem' }}>
                    Configure & Start Quiz
                  </button>
                </div>
              ) : (
                /* Leaderboard Table Display */
                <div style={{ overflowX: 'auto', marginTop: '1rem', border: '1px solid var(--border-light)', borderRadius: '10px', background: 'rgba(0,0,0,0.15)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-light)', color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                        <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Rank</th>
                        <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Tester</th>
                        <th style={{ padding: '0.75rem 1rem', fontWeight: 700, textAlign: 'center' }}>Score</th>
                        <th style={{ padding: '0.75rem 1rem', fontWeight: 700, textAlign: 'center' }}>Accuracy</th>
                        <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Topics Categories</th>
                        <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Order</th>
                        <th style={{ padding: '0.75rem 1rem', fontWeight: 700, textAlign: 'right' }}>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((record, index) => {
                        const date = new Date(record.created_at).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        });
                        const topicsList = Array.isArray(record.topics) ? record.topics : [];
                        const isHigh = record.score_percentage >= 80;
                        const isMid = record.score_percentage >= 60 && record.score_percentage < 80;

                        return (
                          <tr key={record.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s ease' }} className="leaderboard-row">
                            <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: index === 0 ? 'var(--warning-gold)' : index === 1 ? '#cbd5e1' : index === 2 ? '#b45309' : 'var(--text-muted)' }}>
                              #{index + 1}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'white' }}>
                              {record.name}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 600 }}>
                              {record.correct_count} / {record.total_count}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                              <span style={{
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                background: isHigh ? 'rgba(16, 185, 129, 0.1)' : isMid ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                color: isHigh ? 'var(--success)' : isMid ? 'var(--warning-gold)' : 'var(--error)',
                                border: isHigh ? '1px solid rgba(16, 185, 129, 0.2)' : isMid ? '1px solid rgba(245, 158, 11, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)'
                              }}>
                                {record.score_percentage}%
                              </span>
                            </td>
                            <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)', maxWidth: '220px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={topicsList.join(', ')}>
                              {topicsList.length === 0 ? 'None' : topicsList.length === allTopics.length ? 'All Topics' : topicsList.join(', ')}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', textTransform: 'capitalize', color: 'var(--text-muted)' }}>
                              {record.order_mode}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--text-secondary)' }}>
                              {date}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Actions row */}
              <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button 
                  className="btn-secondary" 
                  onClick={() => navigateTo('/')}
                >
                  Back to Lobby
                </button>
                <button 
                  className="btn-primary" 
                  onClick={() => navigateTo('/start-quiz')}
                >
                  <Play size={14} />
                  Configure & Start Quiz
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
