import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, BackpackIcon, ClockIcon, CheckCircledIcon } from '@radix-ui/react-icons';

const RedemptionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [userPoints] = React.useState(2450);

  const rewards = [
    {
      id: 1,
      title: 'Premium Course Access',
      description: 'Unlock any premium course for 3 months',
      points: 500,
      category: 'Courses',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center',
      available: true,
      discount: 0
    },
    {
      id: 2,
      title: 'One-on-One Mentorship',
      description: '1 hour session with industry expert',
      points: 800,
      category: 'Mentorship',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center',
      available: true,
      discount: 20
    },
    {
      id: 3,
      title: 'Certificate of Excellence',
      description: 'Physical certificate with your achievements',
      points: 300,
      category: 'Certificates',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center',
      available: true,
      discount: 0
    },
    {
      id: 4,
      title: 'EduX Premium Hoodie',
      description: 'Exclusive EduX branded premium hoodie',
      points: 1200,
      category: 'Merchandise',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=200&fit=crop&crop=center',
      available: true,
      discount: 15
    },
    {
      id: 5,
      title: 'Tech Conference Ticket',
      description: 'Free ticket to next tech conference',
      points: 2000,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop&crop=center',
      available: true,
      discount: 0
    },
    {
      id: 6,
      title: 'Exclusive Workshop Access',
      description: 'Join limited workshop with top instructors',
      points: 1500,
      category: 'Workshops',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop&crop=center',
      available: false,
      discount: 0
    }
  ];

  const recentRedemptions = [
    { item: 'React Masterclass', points: 500, date: '2 days ago', status: 'completed' },
    { item: 'Certificate Package', points: 300, date: '1 week ago', status: 'delivered' },
    { item: 'Mentor Session', points: 800, date: '2 weeks ago', status: 'scheduled' }
  ];

  const categories = ['All', 'Courses', 'Mentorship', 'Certificates', 'Merchandise', 'Events', 'Workshops'];

  const filteredRewards = selectedCategory === 'All' 
    ? rewards 
    : rewards.filter(reward => reward.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'delivered': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const calculateDiscountedPoints = (points: number, discount: number) => {
    return Math.floor(points * (1 - discount / 100));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Reward Redemption
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Exchange your skill points for amazing rewards
        </p>
      </div>

      {/* Points Balance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Points Balance</h2>
              <p className="text-3xl font-bold">{userPoints.toLocaleString()} SP</p>
              <p className="text-blue-100 mt-2">Earn more by completing courses and challenges</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
              <HeartIcon className="h-12 w-12" />
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Available Rewards</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{rewards.filter(r => r.available).length}</p>
            </div>
            <BackpackIcon className="h-8 w-8 text-blue-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Redeemed This Month</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <CheckCircledIcon className="h-8 w-8 text-green-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Points Spent</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1,600</p>
            </div>
            <ClockIcon className="h-8 w-8 text-purple-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Savings</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">15%</p>
            </div>
            <HeartIcon className="h-8 w-8 text-orange-500" />
          </div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRewards.map((reward, index) => {
          const discountedPoints = reward.discount > 0 ? calculateDiscountedPoints(reward.points, reward.discount) : reward.points;
          const canAfford = userPoints >= discountedPoints;
          
          return (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition-all group cursor-pointer ${
                reward.available 
                  ? 'border-gray-200 dark:border-gray-700' 
                  : 'border-gray-300 dark:border-gray-600 opacity-75'
              }`}
            >
              {/* Reward Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={reward.image}
                  alt={reward.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!reward.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                )}
                {reward.discount > 0 && reward.available && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{reward.discount}%
                    </span>
                  </div>
                )}
              </div>

              {/* Reward Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                    {reward.category}
                  </span>
                  {reward.available && (
                    <div className="flex items-center gap-2">
                      {reward.discount > 0 && (
                        <span className="text-xs text-gray-400 line-through">
                          {reward.points} SP
                        </span>
                      )}
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {discountedPoints} SP
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {reward.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {reward.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!reward.available || !canAfford}
                  className={`w-full py-3 rounded-lg font-medium text-sm transition-colors ${
                    !reward.available
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                      : !canAfford
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {!reward.available 
                    ? 'Coming Soon' 
                    : !canAfford 
                    ? 'Insufficient Points' 
                    : 'Redeem Now'
                  }
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Redemptions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Recent Redemptions
        </h3>
        <div className="space-y-4">
          {recentRedemptions.map((redemption, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <HeartIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{redemption.item}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{redemption.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-900 dark:text-white">
                  -{redemption.points} SP
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(redemption.status)}`}>
                  {redemption.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RedemptionPage;
export { RedemptionPage };