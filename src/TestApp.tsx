import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';
import { TopBar } from './components/TopBar';
import './styles/globals.css';

type MainTab = 'dashboard' | 'courses' | 'skill-analysis' | 'redemption' | 'rewards';

function AppContent() {
  const [activeTab, setActiveTab] = useState<MainTab>('dashboard');

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
          <div className="min-h-screen bg-background text-foreground p-8">
            <h1 className="text-4xl font-bold mb-4">EduX Test - WITH TopBar</h1>
            <p className="text-lg">Testing if TopBar works... Current tab: {activeTab}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Test Button
              </button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
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