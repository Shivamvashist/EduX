import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Gift, Crown, Sparkles, Home, ArrowRight } from 'lucide-react';

interface CourseCompletionProps {
  courseTitle: string;
  totalXP: number;
  completedWeeks: number;
  totalQuests: number;
  onReturnHome: () => void;
  onViewCertificate: () => void;
}

const CourseCompletion: React.FC<CourseCompletionProps> = ({
  courseTitle,
  totalXP,
  completedWeeks,
  totalQuests,
  onReturnHome,
  onViewCertificate
}) => {
  const achievements = [
    { title: 'Course Master', icon: '👑', description: 'Completed all course content' },
    { title: 'XP Champion', icon: '⚡', description: `Earned ${totalXP} experience points` },
    { title: 'Quest Conqueror', icon: '🎯', description: `Completed ${totalQuests} quests` },
    { title: 'Week Warrior', icon: '📅', description: `Finished all ${completedWeeks} weeks` },
    { title: 'Knowledge Seeker', icon: '🧠', description: 'Gained valuable skills' },
    { title: 'Dedication Badge', icon: '🏆', description: 'Showed commitment to learning' }
  ];

  const rewards = [
    { type: 'Certificate', value: 'Completion Certificate', icon: '📜' },
    { type: 'XP', value: `${totalXP} Points`, icon: '⚡' },
    { type: 'Badge', value: 'Master Learner', icon: '🏅' },
    { type: 'Unlock', value: 'Advanced Courses', icon: '🔓' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Trophy Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <Trophy size={120} className="text-yellow-400 mx-auto" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4"
              >
                <Sparkles size={32} className="text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Congratulations Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-4">
              CONGRATULATIONS!
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">Course Completed!</h2>
            <h3 className="text-xl text-gray-300 mb-2">{courseTitle}</h3>
            <p className="text-gray-400">You've successfully mastered all the concepts and completed your learning journey!</p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{totalXP}</div>
              <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
                <Zap size={16} />
                Total XP Earned
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{completedWeeks}</div>
              <div className="text-gray-300 text-sm">Weeks Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{totalQuests}</div>
              <div className="text-gray-300 text-sm">Quests Mastered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Course Progress</div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Crown className="text-yellow-400" />
              Achievements Unlocked
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-md border border-yellow-500/30 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-yellow-400 font-bold text-sm mb-1">{achievement.title}</div>
                  <div className="text-gray-300 text-xs">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rewards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Gift className="text-yellow-400" />
              Your Rewards
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {rewards.map((reward, index) => (
                <motion.div
                  key={reward.type}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="bg-white/10 border border-white/20 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl mb-2">{reward.icon}</div>
                  <div className="text-white font-medium text-sm mb-1">{reward.type}</div>
                  <div className="text-gray-300 text-xs">{reward.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onViewCertificate}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold rounded-full text-lg shadow-2xl border border-white/20 flex items-center justify-center gap-3 transition-all duration-300"
            >
              <Star size={20} />
              View Certificate
            </button>
            
            <button
              onClick={onReturnHome}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-full text-lg flex items-center justify-center gap-3 transition-all duration-300"
            >
              <Home size={20} />
              Return to Dashboard
            </button>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-4">Ready for your next adventure?</p>
            <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center gap-2 mx-auto transition-colors">
              Explore Advanced Courses
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletion;