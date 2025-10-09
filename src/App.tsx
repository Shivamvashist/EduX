import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { AnimatedBackground } from './components/AnimatedBackground';
import { OnboardingFlow } from './components/onboarding';
import DashboardPage from './components/pages/DashboardPage';
import { CoursesPage } from './components/pages/CoursesPage';
import { SkillAnalysisPage } from './components/pages/SkillAnalysisPage';
import { RedemptionPage } from './components/pages/RedemptionPage';
import { RewardsPage } from './components/pages/RewardsPage';
import './styles/globals.css';

type AppView = 'landing' | 'onboarding' | 'main';
type MainTab = 'dashboard' | 'courses' | 'skill-analysis' | 'redemption' | 'rewards';

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>('main');
  const [activeTab, setActiveTab] = useState<MainTab>('dashboard');

  const handleStartOnboarding = () => {
    setCurrentView('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentView('main');
  };

  const handleEnterApp = () => {
    setCurrentView('main');
  };

  const handleBackToOnboarding = () => {
    console.log('🚀 handleBackToOnboarding clicked! Switching to onboarding view...');
    setCurrentView('onboarding');
  };

  const renderPageContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage onBackToOnboarding={handleBackToOnboarding} />;
      case 'courses':
        return <CoursesPage />;
      case 'skill-analysis':
        return <SkillAnalysisPage />;
      case 'redemption':
        return <RedemptionPage />;
      case 'rewards':
        return <RewardsPage />;
      default:
        return <DashboardPage onBackToOnboarding={handleBackToOnboarding} />;
    }
  };

  if (currentView === 'onboarding') {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  if (currentView === 'landing') {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <LandingPage 
          onStartOnboarding={handleStartOnboarding}
          onEnterApp={handleEnterApp}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Simple Sidebar */}
      <div className="w-64 bg-card border-r p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">EduX</h1>
          <p className="text-sm text-muted-foreground">Learning Platform</p>
        </div>
        
        <nav className="space-y-2">
          {[
            { id: 'dashboard' as MainTab, label: 'Dashboard', icon: '🏠' },
            { id: 'courses' as MainTab, label: 'Courses', icon: '📚' },
            { id: 'skill-analysis' as MainTab, label: 'Skill Analysis', icon: '📊' },
            { id: 'redemption' as MainTab, label: 'Redemption', icon: '🎁' },
            { id: 'rewards' as MainTab, label: 'Rewards', icon: '🏆' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <div className="h-16 bg-card border-b px-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold capitalize">
              {activeTab.replace('-', ' ')}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => {}} 
              className="p-2 hover:bg-muted rounded-md"
            >
              🌙
            </button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">
              JD
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6">
          {renderPageContent()}
        </div>
      </div>
    </div>
  );
}

// Simple Landing Page Component
function LandingPage({ 
  onStartOnboarding, 
  onEnterApp 
}: { 
  onStartOnboarding: () => void;
  onEnterApp: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-blue-500">EduX</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Transform your learning journey with personalized education and skill development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onStartOnboarding}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Get Started
          </button>
          <button
            onClick={onEnterApp}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Enter App
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
