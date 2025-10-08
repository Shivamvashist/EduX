import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { DashboardPanel } from '../ui/DashboardPanel';
import { StarIcon, RocketIcon, HeartIcon, ArrowUpIcon } from '@radix-ui/react-icons';

const DashboardPage: React.FC = () => {
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Welcome Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-3xl font-bold text-primary mb-2">
          Welcome back, Student! 👋
        </h1>
        <p className="text-secondary">
          Ready to continue your learning journey? Here's your progress overview.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Courses Completed', value: '12', change: '+2 this week', icon: StarIcon },
          { label: 'Study Hours', value: '48h', change: '+6h this week', icon: RocketIcon },
          { label: 'Skill Points', value: '2,450', change: '+120 points', icon: ArrowUpIcon },
          { label: 'Achievements', value: '8', change: '2 new badges', icon: HeartIcon },
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              className="bg-card border border-primary rounded-xl p-4 glow-effect"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <IconComponent className="w-5 h-5 text-accent-blue" />
                <span className="text-xs text-green-400 font-medium">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-secondary">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Progress */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <DashboardPanel
            title="Current Courses"
            icon={<RocketIcon className="w-4 h-4" />}
            action={<Button variant="ghost" size="sm">View All</Button>}
          >
            <div className="space-y-4">
              {[
                { name: 'Advanced React Patterns', progress: 85, color: 'from-blue-500 to-cyan-500' },
                { name: 'TypeScript Mastery', progress: 72, color: 'from-purple-500 to-pink-500' },
                { name: 'Node.js & Express', progress: 45, color: 'from-green-500 to-emerald-500' },
                { name: 'Database Design', progress: 30, color: 'from-orange-500 to-red-500' },
              ].map((course, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-secondary rounded-lg hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-primary">{course.name}</span>
                    <span className="text-sm font-bold text-accent-blue">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </DashboardPanel>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <DashboardPanel
            title="Recent Activity"
            icon={<StarIcon className="w-4 h-4" />}
          >
            <div className="space-y-3">
              {[
                { action: 'Completed', item: 'React Hooks Quiz', time: '2 hours ago', type: 'success' },
                { action: 'Started', item: 'TypeScript Project', time: '1 day ago', type: 'info' },
                { action: 'Earned', item: 'Problem Solver Badge', time: '2 days ago', type: 'achievement' },
                { action: 'Joined', item: 'Study Group Discussion', time: '3 days ago', type: 'social' },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-400' :
                    activity.type === 'achievement' ? 'bg-yellow-400' :
                    activity.type === 'info' ? 'bg-blue-400' : 'bg-purple-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-primary">
                      <span className="font-medium">{activity.action}</span> {activity.item}
                    </p>
                    <p className="text-xs text-muted">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </DashboardPanel>
        </motion.div>
      </div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-xl font-bold text-primary mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Advanced CSS Animations', level: 'Intermediate', duration: '4h 30m' },
            { title: 'GraphQL Fundamentals', level: 'Beginner', duration: '6h 15m' },
            { title: 'System Design Patterns', level: 'Advanced', duration: '8h 45m' },
          ].map((course, index) => (
            <Card key={index} hover glow className="p-4">
              <h3 className="font-semibold text-primary mb-2">{course.title}</h3>
              <div className="flex items-center justify-between text-sm text-secondary mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {course.level}
                </span>
                <span>{course.duration}</span>
              </div>
              <Button variant="primary" size="sm" className="w-full">
                Start Learning
              </Button>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;
export { DashboardPage };