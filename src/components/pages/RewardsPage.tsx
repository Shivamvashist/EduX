import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, HeartIcon, RocketIcon, CheckCircledIcon } from '@radix-ui/react-icons';

const RewardsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState('achievements');

  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first course',
      icon: RocketIcon,
      progress: 100,
      points: 100,
      unlocked: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Quick Learner',
      description: 'Complete 3 courses in a week',
      icon: StarIcon,
      progress: 67,
      points: 250,
      unlocked: false,
      date: null
    },
    {
      id: 3,
      title: 'Streak Master',
      description: 'Maintain a 7-day learning streak',
      icon: HeartIcon,
      progress: 100,
      points: 200,
      unlocked: true,
      date: '2024-01-20'
    },
    {
      id: 4,
      title: 'Knowledge Seeker',
      description: 'Complete 10 courses',
      icon: StarIcon,
      progress: 20,
      points: 500,
      unlocked: false,
      date: null
    },
    {
      id: 5,
      title: 'Perfect Score',
      description: 'Score 100% on any assessment',
      icon: CheckCircledIcon,
      progress: 100,
      points: 300,
      unlocked: true,
      date: '2024-01-22'
    },
    {
      id: 6,
      title: 'Social Learner',
      description: 'Help 5 fellow students in discussions',
      icon: HeartIcon,
      progress: 40,
      points: 150,
      unlocked: false,
      date: null
    }
  ];

  const badges = [
    {
      id: 1,
      name: 'React Expert',
      description: 'Mastered React development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center',
      earned: true,
      rarity: 'Epic'
    },
    {
      id: 2,
      name: 'JavaScript Ninja',
      description: 'Advanced JavaScript skills',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center',
      earned: true,
      rarity: 'Rare'
    },
    {
      id: 3,
      name: 'UI/UX Wizard',
      description: 'Exceptional design skills',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop&crop=center',
      earned: false,
      rarity: 'Legendary'
    },
    {
      id: 4,
      name: 'Full Stack Hero',
      description: 'Complete full-stack development',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop&crop=center',
      earned: false,
      rarity: 'Epic'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 4520, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=center' },
    { rank: 2, name: 'Sarah Wilson', points: 3890, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=center' },
    { rank: 3, name: 'You', points: 2450, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=center', isUser: true },
    { rank: 4, name: 'Mike Rodriguez', points: 2180, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=center' },
    { rank: 5, name: 'Emma Johnson', points: 1920, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=center' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'from-yellow-400 to-orange-500';
      case 'Epic': return 'from-purple-400 to-pink-500';
      case 'Rare': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const tabs = [
    { id: 'achievements', label: 'Achievements' },
    { id: 'badges', label: 'Badges' },
    { id: 'leaderboard', label: 'Leaderboard' }
  ];

  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Rewards & Achievements
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track your progress and celebrate your accomplishments
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Points</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-300">{totalPoints}</p>
            </div>
            <StarIcon className="h-8 w-8 text-blue-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">Achievements</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-300">{unlockedCount}/{achievements.length}</p>
            </div>
            <CheckCircledIcon className="h-8 w-8 text-green-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Badges Earned</p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-300">{badges.filter(b => b.earned).length}</p>
            </div>
            <HeartIcon className="h-8 w-8 text-purple-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Leaderboard Rank</p>
              <p className="text-2xl font-bold text-orange-900 dark:text-orange-300">#3</p>
            </div>
            <RocketIcon className="h-8 w-8 text-orange-500" />
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
              selectedTab === tab.id
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      {selectedTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border transition-all hover:shadow-lg ${
                achievement.unlocked 
                  ? 'border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  achievement.unlocked 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <achievement.icon className={`h-6 w-6 ${
                    achievement.unlocked 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold ${
                      achievement.unlocked 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {achievement.title}
                    </h3>
                    {achievement.unlocked && (
                      <CheckCircledIcon className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {achievement.points} points
                      </span>
                    </div>
                    {achievement.date && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Earned {achievement.date}
                      </span>
                    )}
                  </div>
                  {!achievement.unlocked && (
                    <div className="mt-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600 dark:text-gray-300">Progress</span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedTab === 'badges' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border text-center transition-all hover:shadow-lg ${
                badge.earned 
                  ? 'border-gray-200 dark:border-gray-700' 
                  : 'border-gray-300 dark:border-gray-600 opacity-60'
              }`}
            >
              <div className="relative mb-4">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${getRarityColor(badge.rarity)} p-1`}>
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {badge.earned && (
                  <CheckCircledIcon className="absolute -top-1 -right-1 h-6 w-6 text-green-500 bg-white dark:bg-gray-800 rounded-full" />
                )}
              </div>
              <h3 className={`font-semibold mb-2 ${
                badge.earned 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {badge.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {badge.description}
              </p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getRarityColor(badge.rarity)} text-white`}>
                {badge.rarity}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {selectedTab === 'leaderboard' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Top Performers This Month
          </h3>
          <div className="space-y-4">
            {leaderboard.map((user, index) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                  user.isUser 
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800' 
                    : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                  user.rank <= 3 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}>
                  {user.rank}
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className={`font-medium ${
                    user.isUser 
                      ? 'text-blue-900 dark:text-blue-100' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {user.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.points.toLocaleString()} points
                  </p>
                </div>
                {user.rank <= 3 && (
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardsPage;
export { RewardsPage };