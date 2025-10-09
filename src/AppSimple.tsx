import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import DashboardPage from './components/pages/DashboardPage';
import { CoursesPage } from './components/pages/CoursesPage';
import { SkillAnalysisPage } from './components/pages/SkillAnalysisPage';
import { RedemptionPage } from './components/pages/RedemptionPage';
import { RewardsPage } from './components/pages/RewardsPage';
import './styles/globals.css';

type MainTab = 'dashboard' | 'courses' | 'skill-analysis' | 'redemption' | 'rewards';

function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('dashboard');

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

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {/* Simple Tab Navigation */}
        <div className="bg-card border-b p-4">
          <div className="flex gap-4">
            {[
              { id: 'dashboard' as MainTab, label: 'Dashboard' },
              { id: 'courses' as MainTab, label: 'Courses' },
              { id: 'skill-analysis' as MainTab, label: 'Skill Analysis' },
              { id: 'redemption' as MainTab, label: 'Redemption' },
              { id: 'rewards' as MainTab, label: 'Rewards' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">
          {renderPageContent()}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;