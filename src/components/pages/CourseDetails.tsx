import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Lock, CheckCircle, Clock, Star, Gift, Zap, Trophy, Target } from 'lucide-react';

interface CourseDetailsProps {
  courseId: number;
  onBack: () => void;
  onStartWeek: (weekId: number) => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courseId, onBack, onStartWeek }) => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  // Mock course data with weeks
  const courseData = {
    1: {
      title: 'Galactic React Mastery',
      description: 'Journey through the React universe and master component galaxies, hook nebulas, and state management constellations.',
      instructor: 'Captain Sarah Chen',
      totalWeeks: 8,
      weeks: [
        {
          id: 1,
          title: 'React Fundamentals',
          description: 'Master the basics of React components and JSX',
          status: 'completed',
          progress: 100,
          quests: 5,
          xp: 150,
          estimatedTime: '4 hours'
        },
        {
          id: 2,
          title: 'State & Props Management',
          description: 'Learn how to manage state and pass data between components',
          status: 'current',
          progress: 60,
          quests: 6,
          xp: 180,
          estimatedTime: '5 hours'
        },
        {
          id: 3,
          title: 'Hooks & Lifecycle',
          description: 'Deep dive into React hooks and component lifecycle',
          status: 'locked',
          progress: 0,
          quests: 7,
          xp: 220,
          estimatedTime: '6 hours'
        },
        {
          id: 4,
          title: 'Context & Reducers',
          description: 'Advanced state management with Context API and useReducer',
          status: 'locked',
          progress: 0,
          quests: 6,
          xp: 200,
          estimatedTime: '5 hours'
        },
        {
          id: 5,
          title: 'Performance Optimization',
          description: 'Optimize React applications for better performance',
          status: 'locked',
          progress: 0,
          quests: 8,
          xp: 250,
          estimatedTime: '7 hours'
        },
        {
          id: 6,
          title: 'Testing Components',
          description: 'Write comprehensive tests for React components',
          status: 'locked',
          progress: 0,
          quests: 5,
          xp: 180,
          estimatedTime: '4 hours'
        },
        {
          id: 7,
          title: 'Advanced Patterns',
          description: 'Learn advanced React patterns and best practices',
          status: 'locked',
          progress: 0,
          quests: 9,
          xp: 300,
          estimatedTime: '8 hours'
        },
        {
          id: 8,
          title: 'Final Project',
          description: 'Build a complete application using all learned concepts',
          status: 'locked',
          progress: 0,
          quests: 3,
          xp: 500,
          estimatedTime: '12 hours'
        }
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];
  if (!course) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={24} />;
      case 'current':
        return <Play className="text-blue-400" size={24} />;
      case 'locked':
        return <Lock className="text-gray-500" size={24} />;
      default:
        return <Lock className="text-gray-500" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500/20 to-green-600/20 border-green-500/30';
      case 'current':
        return 'from-blue-500/20 to-purple-600/20 border-blue-500/30';
      case 'locked':
        return 'from-gray-700/20 to-gray-800/20 border-gray-600/30';
      default:
        return 'from-gray-700/20 to-gray-800/20 border-gray-600/30';
    }
  };

  const completedWeeks = course.weeks.filter(w => w.status === 'completed').length;
  const totalXP = course.weeks.reduce((sum, week) => sum + (week.status === 'completed' ? week.xp : 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-white">{course.title}</h1>
          <p className="text-gray-300">by {course.instructor}</p>
        </div>
      </div>

      {/* Course Progress Overview */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{completedWeeks}/{course.totalWeeks}</div>
            <div className="text-gray-300 text-sm">Weeks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{totalXP}</div>
            <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
              <Zap size={16} />
              Total XP Earned
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {Math.round((completedWeeks / course.totalWeeks) * 100)}%
            </div>
            <div className="text-gray-300 text-sm">Course Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {course.weeks.reduce((sum, w) => sum + (w.status === 'completed' ? w.quests : 0), 0)}
            </div>
            <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
              <Target size={16} />
              Quests Completed
            </div>
          </div>
        </div>
      </div>

      {/* Week Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {course.weeks.map((week, index) => (
          <motion.div
            key={week.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-gradient-to-br ${getStatusColor(week.status)} backdrop-blur-md border rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300`}
            onClick={() => week.status !== 'locked' && onStartWeek(week.id)}
          >
            {/* Week Number */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-white">Week {week.id}</div>
              {getStatusIcon(week.status)}
            </div>

            {/* Week Title */}
            <h3 className="text-lg font-semibold text-white mb-2">{week.title}</h3>
            
            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{week.description}</p>

            {/* Progress Bar (for current week) */}
            {week.status === 'current' && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Progress</span>
                  <span className="text-xs text-gray-400">{week.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                    style={{ width: `${week.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Week Stats */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center p-2 bg-white/5 rounded-lg">
                <Target size={12} className="mx-auto mb-1 text-blue-400" />
                <div className="text-white font-medium">{week.quests}</div>
                <div className="text-gray-400">Quests</div>
              </div>
              <div className="text-center p-2 bg-white/5 rounded-lg">
                <Zap size={12} className="mx-auto mb-1 text-yellow-400" />
                <div className="text-white font-medium">{week.xp}</div>
                <div className="text-gray-400">XP</div>
              </div>
              <div className="text-center p-2 bg-white/5 rounded-lg">
                <Clock size={12} className="mx-auto mb-1 text-green-400" />
                <div className="text-white font-medium">{week.estimatedTime.split(' ')[0]}</div>
                <div className="text-gray-400">Hours</div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-4">
              {week.status === 'completed' && (
                <button className="w-full py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg text-sm font-medium">
                  ✓ Completed
                </button>
              )}
              {week.status === 'current' && (
                <button className="w-full py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors">
                  Continue
                </button>
              )}
              {week.status === 'locked' && (
                <button className="w-full py-2 bg-gray-700/20 border border-gray-600/30 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
                  🔒 Locked
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;