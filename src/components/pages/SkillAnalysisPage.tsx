import React from 'react';
import { motion } from 'framer-motion';
import { BarChartIcon, ArrowUpIcon, ArrowDownIcon, ActivityLogIcon } from '@radix-ui/react-icons';

const SkillAnalysisPage: React.FC = () => {
  const skills = [
    { name: 'React', level: 85, change: 5, category: 'Frontend' },
    { name: 'TypeScript', level: 78, change: 8, category: 'Programming' },
    { name: 'Node.js', level: 72, change: 3, category: 'Backend' },
    { name: 'Python', level: 65, change: -2, category: 'Programming' },
    { name: 'UI/UX Design', level: 58, change: 12, category: 'Design' },
    { name: 'Machine Learning', level: 45, change: 15, category: 'Data Science' },
    { name: 'MongoDB', level: 62, change: 4, category: 'Database' },
    { name: 'AWS', level: 55, change: 7, category: 'Cloud' }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Programming', 'Design', 'Data Science', 'Database', 'Cloud'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getSkillTextColor = (level: number) => {
    if (level >= 80) return 'text-green-600 dark:text-green-400';
    if (level >= 60) return 'text-blue-600 dark:text-blue-400';
    if (level >= 40) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const strengthAreas = skills.filter(skill => skill.level >= 70).slice(0, 3);
  const improvementAreas = skills.filter(skill => skill.level < 60).slice(0, 3);
  const trendingSkills = skills.filter(skill => skill.change > 5).slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Skill Analysis
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track your progress and identify areas for improvement
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Skills</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{skills.length}</p>
            </div>
            <BarChartIcon className="h-8 w-8 text-blue-500" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Avg Level</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
              </p>
            </div>
            <ActivityLogIcon className="h-8 w-8 text-green-500" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Strengths</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{strengthAreas.length}</p>
            </div>
            <ArrowUpIcon className="h-8 w-8 text-purple-500" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Growth Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">+6.5%</p>
            </div>
            <ActivityLogIcon className="h-8 w-8 text-orange-500" />
          </div>
        </motion.div>
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strength Areas */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
        >
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-4">
            Your Strengths
          </h3>
          <div className="space-y-3">
            {strengthAreas.map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-green-800 dark:text-green-300">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Improvement Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800"
        >
          <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-4">
            Areas for Growth
          </h3>
          <div className="space-y-3">
            {improvementAreas.map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-700 dark:text-orange-400">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-orange-800 dark:text-orange-300">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trending Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Trending Up
          </h3>
          <div className="space-y-3">
            {trendingSkills.map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                  {skill.name}
                </span>
                <div className="flex items-center gap-1">
                  <ArrowUpIcon className="h-3 w-3 text-green-500" />
                  <span className="text-sm font-bold text-blue-800 dark:text-blue-300">
                    +{skill.change}%
                  </span>
                </div>
              </div>
            ))}
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

      {/* Skills List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          All Skills
        </h3>
        <div className="space-y-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{skill.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${getSkillTextColor(skill.level)}`}>
                      {skill.level}%
                    </span>
                    <div className="flex items-center gap-1">
                      {skill.change > 0 ? (
                        <>
                          <ArrowUpIcon className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-green-500">+{skill.change}%</span>
                        </>
                      ) : skill.change < 0 ? (
                        <>
                          <ArrowDownIcon className="h-4 w-4 text-red-500" />
                          <span className="text-sm text-red-500">{skill.change}%</span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-400">0%</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAnalysisPage;
export { SkillAnalysisPage };