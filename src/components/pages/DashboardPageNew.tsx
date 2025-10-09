import React from 'react';

interface DashboardPageProps {
  onBackToOnboarding?: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onBackToOnboarding }) => {
  const achievements = [
    { id: 1, name: 'First Course', icon: '🎯', earned: true },
    { id: 2, name: 'Speed Learner', icon: '⚡', earned: true },
    { id: 3, name: 'Consistent', icon: '🔥', earned: true },
    { id: 4, name: 'Expert', icon: '👑', earned: false },
    { id: 5, name: 'Master', icon: '🏆', earned: false },
    { id: 6, name: 'Scholar', icon: '📚', earned: false },
  ];

  const quests = [
    {
      id: 1,
      title: 'Complete React Fundamentals',
      progress: 75,
      status: 'current',
      reward: '150 XP',
      type: 'Course Quest'
    },
    {
      id: 2,
      title: 'JavaScript Advanced Concepts',
      progress: 100,
      status: 'completed',
      reward: '200 XP',
      type: 'Skill Quest'
    },
    {
      id: 3,
      title: 'Build a Full Stack Project',
      progress: 0,
      status: 'next',
      reward: '300 XP',
      type: 'Project Quest'
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* BIG OBVIOUS ONBOARDING BUTTON - TEST */}
      {onBackToOnboarding && (
        <div className="bg-red-500 text-white p-6 rounded-xl text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">🚨 ONBOARDING ACCESS TEST 🚨</h2>
          <button
            onClick={onBackToOnboarding}
            className="bg-white text-red-500 font-bold px-8 py-4 rounded-lg text-xl hover:bg-gray-100 transition-colors"
          >
            CLICK HERE TO GO TO ONBOARDING
          </button>
          <p className="mt-2 text-sm">If you can see this red box, the onboarding button should work!</p>
        </div>
      )}
      
      {/* Main Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Character & Greeting Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full"></div>
          </div>
          
          <div className="relative z-10 flex items-center gap-8">
            {/* Character Section */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 relative">
                {/* Astronaut Character - Inspired by the second image */}
                <div className="w-full h-full bg-gradient-to-b from-slate-300 to-slate-600 rounded-full relative overflow-hidden border-4 border-slate-400">
                  {/* Helmet Glass Effect */}
                  <div className="absolute inset-2 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-full">
                    {/* Reflection */}
                    <div className="absolute top-4 left-4 w-8 h-12 bg-white opacity-20 rounded-full blur-sm"></div>
                    <div className="absolute top-6 right-6 w-4 h-8 bg-white opacity-15 rounded-full blur-sm"></div>
                  </div>
                  
                  {/* Helmet Details */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-slate-500 rounded-t-full border-2 border-slate-400"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-red-500 rounded"></div>
                  
                  {/* Side Details */}
                  <div className="absolute top-12 left-2 w-4 h-6 bg-orange-500 rounded"></div>
                  <div className="absolute top-12 right-2 w-4 h-6 bg-blue-500 rounded"></div>
                </div>
                
                {/* Suit Shoulders */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-56 h-20 bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-t-3xl border-4 border-slate-600"></div>
              </div>
            </div>

            {/* Greeting & CTA Section */}
            <div className="flex-1 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome back, Explorer!</h1>
                  <p className="text-xl text-slate-300 mb-6">
                    Ready for your next learning adventure? The universe of knowledge awaits you.
                  </p>
                </div>
                
                {/* Settings/Onboarding Access */}
                {onBackToOnboarding && (
                  <button
                    onClick={onBackToOnboarding}
                    className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
                    title="Re-do Onboarding"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Setup
                  </button>
                )}
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg">
                Continue Learning Mission
              </button>
            </div>
          </div>
        </div>

        {/* Stats Panel */}
        <div className="bg-slate-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Mission Stats</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Level</span>
              <span className="text-2xl font-bold text-blue-400">12</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-300">XP Points</span>
              <span className="text-2xl font-bold text-purple-400">2,450</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Missions Completed</span>
              <span className="text-2xl font-bold text-green-400">8</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Study Hours</span>
              <span className="text-2xl font-bold text-orange-400">127h</span>
            </div>

            {/* Progress to Next Level */}
            <div className="pt-4">
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Progress to Level 13</span>
                <span>750/1000 XP</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-3 bg-slate-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Achievements</h3>
          
          <div className="grid grid-cols-6 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`aspect-square rounded-xl flex items-center justify-center text-4xl border-2 ${
                  achievement.earned
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 border-yellow-500'
                    : 'bg-slate-700 border-slate-600 opacity-50'
                }`}
              >
                {achievement.icon}
              </div>
            ))}
          </div>
        </div>
        
        {/* Onboarding Access Card */}
        {onBackToOnboarding && (
          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-6 border border-purple-600">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Learning Setup</h4>
              <p className="text-purple-200 text-sm mb-4">
                Customize your learning experience or redo the setup process
              </p>
              <button
                onClick={onBackToOnboarding}
                className="w-full bg-white text-purple-800 font-semibold py-3 px-4 rounded-lg hover:bg-purple-100 transition-colors duration-300"
              >
                Access Setup
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quest Section */}
      <div className="bg-slate-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Active Quests</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className={`rounded-xl p-4 border-2 ${
                quest.status === 'current'
                  ? 'bg-blue-900/50 border-blue-500'
                  : quest.status === 'completed'
                  ? 'bg-green-900/50 border-green-500'
                  : 'bg-slate-700 border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm px-2 py-1 rounded ${
                  quest.status === 'current'
                    ? 'bg-blue-600 text-white'
                    : quest.status === 'completed'
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-600 text-slate-300'
                }`}>
                  {quest.type}
                </span>
                <span className="text-yellow-400 font-semibold">{quest.reward}</span>
              </div>
              
              <h4 className="font-semibold text-white mb-3">{quest.title}</h4>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-slate-400 mb-1">
                  <span>Progress</span>
                  <span>{quest.progress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      quest.status === 'current'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                        : quest.status === 'completed'
                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                        : 'bg-slate-600'
                    }`}
                    style={{ width: `${quest.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className={`text-sm font-medium ${
                quest.status === 'current'
                  ? 'text-blue-400'
                  : quest.status === 'completed'
                  ? 'text-green-400'
                  : 'text-slate-400'
              }`}>
                {quest.status === 'current' && 'In Progress'}
                {quest.status === 'completed' && 'Completed ✓'}
                {quest.status === 'next' && 'Coming Next'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;