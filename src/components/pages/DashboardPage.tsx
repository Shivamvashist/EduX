import { motion } from 'framer-motion';
import { Trophy, Star, Target, Clock, BookOpen, Zap, Play } from 'lucide-react';
import QuestOverview from '../QuestOverview';

interface DashboardPageProps {
  onBackToOnboarding?: () => void;
}

export default function DashboardPage({ onBackToOnboarding }: DashboardPageProps) {
  // Astronaut Character Data
  const character = {
    name: "Space Explorer Alex",
    level: 15,
    experience: 2840,
    nextLevelXP: 3000,
    title: "Quantum Learner"
  };

  // Quest System - now handled by QuestOverview component

  // Achievement Badges
  const achievements = [
    { id: 1, name: "First Steps", icon: "👶", unlocked: true },
    { id: 2, name: "Speed Learner", icon: "⚡", unlocked: true },
    { id: 3, name: "Problem Solver", icon: "🧩", unlocked: true },
    { id: 4, name: "Code Warrior", icon: "⚔️", unlocked: false },
    { id: 5, name: "Master Builder", icon: "🏗️", unlocked: false },
    { id: 6, name: "Galaxy Explorer", icon: "🌌", unlocked: false }
  ];

  // Mission Stats
  const stats = [
    { label: "Missions Completed", value: "42", icon: Target },
    { label: "Skills Unlocked", value: "18", icon: Star },
    { label: "Study Hours", value: "127", icon: Clock },
    { label: "Courses Mastered", value: "6", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Mission Control Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back, Explorer. Ready for your next adventure?
        </p>
        
        {/* Onboarding Access Button - Top Right */}
        {onBackToOnboarding && (
          <motion.button
            onClick={() => {
              console.log('⚙️ Setup button clicked!');
              console.log('onBackToOnboarding function:', onBackToOnboarding);
              if (onBackToOnboarding) {
                console.log('✅ Calling onBackToOnboarding...');
                onBackToOnboarding();
              } else {
                console.log('❌ onBackToOnboarding is not defined!');
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-0 right-0 inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg shadow transition-all duration-300 border border-gray-600"
            title="Access Learning Setup"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Setup
          </motion.button>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Continue Learning CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            <Play size={18} />
            Continue Learning
          </motion.button>
          
          {/* Alternative Onboarding Access - More Prominent */}
          { (
            <motion.button
              onClick={() => {
                console.log('🎯 Learning Setup button clicked!');
                console.log('onBackToOnboarding function:', onBackToOnboarding);
                if (onBackToOnboarding) {
                  console.log('✅ Calling onBackToOnboarding...');
                  onBackToOnboarding();
                } else {
                  console.log('❌ onBackToOnboarding is not defined!');
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Learning Setup
            </motion.button>
          )}
        </div>
      </div>

      {/* Astronaut Character Section */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex items-center gap-6">
          {/* Astronaut Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                {/* Helmet Glass Effect */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/30 to-transparent border border-blue-400/50"></div>
                {/* Suit Details */}
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                  <div className="text-2xl">🚀</div>
                </div>
              </div>
            </div>
            {/* Level Badge */}
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
              {character.level}
            </div>
          </div>

          {/* Character Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-primary">{character.name}</h2>
            <p className="text-sm text-muted-foreground mb-2">{character.title}</p>
            
            {/* XP Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Experience</span>
                <span>{character.experience} / {character.nextLevelXP} XP</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${(character.experience / character.nextLevelXP) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border rounded-lg p-4 text-center space-y-2"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <stat.icon size={24} />
            </div>
            <p className="text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quest Overview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <QuestOverview onViewAllQuests={() => console.log('View all quests')} />
        </motion.div>

        {/* Achievement Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-primary" size={20} />
            <h3 className="font-semibold text-primary">Achievement Gallery</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-center p-2 transition-all ${
                  achievement.unlocked
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-muted-foreground/20 bg-muted/20 text-muted-foreground grayscale'
                }`}
              >
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <div className="text-xs font-medium leading-tight">
                  {achievement.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Reactor */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-primary" size={20} />
            <h3 className="font-semibold text-primary">Learning Reactor</h3>
          </div>
          
          <div className="space-y-4">
            {/* Energy Level */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Energy Level</span>
                <span className="text-primary font-medium">87%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-[87%] transition-all duration-300">
                </div>
              </div>
            </div>

            {/* Learning Streak */}
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Day Learning Streak</div>
              <div className="text-xs text-green-500 mt-1">🔥 On Fire!</div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-muted/30 rounded-lg p-3">
                <div className="text-lg font-bold text-primary">4.8</div>
                <div className="text-xs text-muted-foreground">Avg Score</div>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <div className="text-lg font-bold text-primary">24</div>
                <div className="text-xs text-muted-foreground">Rank</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Continue Learning CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center"
      >
        <h3 className="text-xl font-bold mb-2">Ready for Your Next Mission?</h3>
        <p className="text-blue-100 mb-4">
          Continue your learning journey and unlock new galaxies of knowledge
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
          Launch Next Quest
        </button>
      </motion.div>
    </div>
  );
}