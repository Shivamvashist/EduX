import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { AnimatedBackground } from './components/AnimatedBackground';
import { OnboardingFlow } from './components/onboarding';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';
import { TopBar } from './components/TopBar';
import { DashboardPage } from './components/pages/DashboardPage';
import { CoursesPage } from './components/pages/CoursesPage';
import { SkillAnalysisPage } from './components/pages/SkillAnalysisPage';
import { RedemptionPage } from './components/pages/RedemptionPage';
import { RewardsPage } from './components/pages/RewardsPage';
import './styles/globals.css';

type AppView = 'landing' | 'onboarding' | 'main';
type MainTab = 'dashboard' | 'courses' | 'skill-analysis' | 'redemption' | 'rewards';

function AppContent() {
  const [currentView, setCurrentView] = useState<AppView>('main'); // Start with main for testing
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

  const renderPageContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'courses':
        return <CoursesPage />;
      case 'skill-analysis':
        return <SkillAnalysisPage />;
      case 'redemption':
        return <RedemptionPage />;
      case 'rewards':
        return <RewardsPage />;
      default:
        return <DashboardPage />;
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
    <SidebarProvider>
      <AppSidebar 
        currentTab={activeTab} 
        onTabChange={setActiveTab}
        onProfile={() => console.log('Profile clicked')}
        onSettings={() => console.log('Settings clicked')}
        onLogout={() => console.log('Logout clicked')}
      />
      <SidebarInset>
        <TopBar 
          currentTab={activeTab}
          onProfile={() => console.log('Profile clicked')}
          onSettings={() => console.log('Settings clicked')}
          onLogout={() => console.log('Logout clicked')}
        />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {renderPageContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
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