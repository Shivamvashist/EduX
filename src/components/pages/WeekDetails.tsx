import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Lock, CheckCircle, Clock, Star, Gift, Zap, Trophy, Target, BookOpen, Code, Video, FileText } from 'lucide-react';

interface WeekDetailsProps {
  weekId: number;
  courseId: number;
  onBack: () => void;
  onStartQuest: (questId: number) => void;
}

const WeekDetails: React.FC<WeekDetailsProps> = ({ weekId, courseId, onBack, onStartQuest }) => {
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null);

  // Mock week data with quests
  const weekData = {
    1: {
      id: 1,
      title: 'React Fundamentals',
      description: 'Master the basics of React components and JSX in this foundational week',
      estimatedTime: '4 hours',
      totalXP: 150,
      quests: [
        {
          id: 1,
          title: 'Understanding JSX',
          description: 'Learn the syntax and power of JSX in React applications',
          type: 'tutorial',
          status: 'completed',
          xp: 25,
          estimatedTime: '30 min',
          rewards: ['XP +25', '🎯 JSX Master Badge'],
          content: 'tutorial'
        },
        {
          id: 2,
          title: 'Creating Your First Component',
          description: 'Build your first React component from scratch',
          type: 'hands-on',
          status: 'completed',
          xp: 35,
          estimatedTime: '45 min',
          rewards: ['XP +35', '⚡ Component Creator'],
          content: 'coding'
        },
        {
          id: 3,
          title: 'Props and Data Flow',
          description: 'Master how data flows between React components using props',
          type: 'interactive',
          status: 'current',
          xp: 40,
          estimatedTime: '1 hour',
          rewards: ['XP +40', '🔗 Data Flow Expert', '🎁 Mystery Crate'],
          content: 'interactive'
        },
        {
          id: 4,
          title: 'Event Handling',
          description: 'Learn to handle user interactions and events in React',
          type: 'practical',
          status: 'locked',
          xp: 30,
          estimatedTime: '40 min',
          rewards: ['XP +30', '🎮 Event Master'],
          content: 'coding'
        },
        {
          id: 5,
          title: 'Component Composition',
          description: 'Master the art of composing components for reusable UI',
          type: 'project',
          status: 'locked',
          xp: 50,
          estimatedTime: '1.5 hours',
          rewards: ['XP +50', '🏗️ Architect Badge', '💎 Rare Components Kit'],
          content: 'project'
        }
      ]
    }
  };

  const week = weekData[weekId as keyof typeof weekData];
  if (!week) return null;

  const getQuestIcon = (type: string) => {
    switch (type) {
      case 'tutorial':
        return <BookOpen size={20} className="text-blue-400" />;
      case 'hands-on':
        return <Code size={20} className="text-green-400" />;
      case 'interactive':
        return <Play size={20} className="text-purple-400" />;
      case 'practical':
        return <Target size={20} className="text-orange-400" />;
      case 'project':
        return <Trophy size={20} className="text-yellow-400" />;
      default:
        return <BookOpen size={20} className="text-gray-400" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={20} />;
      case 'current':
        return <Play className="text-blue-400" size={20} />;
      case 'locked':
        return <Lock className="text-gray-500" size={20} />;
      default:
        return <Lock className="text-gray-500" size={20} />;
    }
  };

  const getQuestStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500/20 to-green-600/20 border-green-500/30 shadow-green-500/10';
      case 'current':
        return 'from-blue-500/20 to-purple-600/20 border-blue-500/30 shadow-blue-500/20';
      case 'locked':
        return 'from-gray-700/20 to-gray-800/20 border-gray-600/30';
      default:
        return 'from-gray-700/20 to-gray-800/20 border-gray-600/30';
    }
  };

  const completedQuests = week.quests.filter(q => q.status === 'completed').length;
  const earnedXP = week.quests.filter(q => q.status === 'completed').reduce((sum, quest) => sum + quest.xp, 0);

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
          <h1 className="text-3xl font-bold text-white">Week {week.id}: {week.title}</h1>
          <p className="text-gray-300">{week.description}</p>
        </div>
      </div>

      {/* Week Progress Overview */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{completedQuests}/{week.quests.length}</div>
            <div className="text-gray-300 text-sm">Quests Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{earnedXP}/{week.totalXP}</div>
            <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
              <Zap size={16} />
              XP Earned
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {Math.round((completedQuests / week.quests.length) * 100)}%
            </div>
            <div className="text-gray-300 text-sm">Week Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{week.estimatedTime}</div>
            <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
              <Clock size={16} />
              Estimated Time
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Week Progress</span>
            <span className="text-sm text-gray-400">{Math.round((completedQuests / week.quests.length) * 100)}%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedQuests / week.quests.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quest Timeline */}
      <div className="space-y-6">
        {week.quests.map((quest, index) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-gradient-to-r ${getQuestStatusColor(quest.status)} backdrop-blur-md border rounded-2xl p-6 shadow-2xl`}
          >
            {/* Quest Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                {/* Quest Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 mb-2">
                    <span className="text-white font-bold">{quest.id}</span>
                  </div>
                  {getQuestIcon(quest.type)}
                </div>
                
                {/* Quest Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{quest.title}</h3>
                  <p className="text-gray-300 mb-3">{quest.description}</p>
                  
                  {/* Quest Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-400" />
                      <span className="text-gray-300">{quest.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-yellow-400" />
                      <span className="text-gray-300">+{quest.xp} XP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target size={16} className="text-purple-400" />
                      <span className="text-gray-300 capitalize">{quest.type}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status Icon */}
              <div className="flex flex-col items-center gap-2">
                {getStatusIcon(quest.status)}
                <span className="text-xs text-gray-400 capitalize">{quest.status}</span>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-white/5 rounded-xl p-4 mb-4">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Gift size={16} className="text-yellow-400" />
                Quest Rewards
              </h4>
              <div className="flex flex-wrap gap-2">
                {quest.rewards.map((reward, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                  >
                    {reward}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end">
              {quest.status === 'completed' && (
                <button className="px-6 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg font-medium flex items-center gap-2">
                  <CheckCircle size={16} />
                  Completed
                </button>
              )}
              {quest.status === 'current' && (
                <button 
                  onClick={() => onStartQuest(quest.id)}
                  className="px-6 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg font-medium hover:bg-blue-500/30 transition-colors flex items-center gap-2"
                >
                  <Play size={16} />
                  Start Quest
                </button>
              )}
              {quest.status === 'locked' && (
                <button className="px-6 py-2 bg-gray-700/20 border border-gray-600/30 text-gray-500 rounded-lg font-medium cursor-not-allowed flex items-center gap-2">
                  <Lock size={16} />
                  Locked
                </button>
              )}
            </div>

            {/* Connection Line */}
            {index < week.quests.length - 1 && (
              <div className="absolute left-10 bottom-0 w-0.5 h-6 bg-gradient-to-b from-white/20 to-transparent transform translate-y-full"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WeekDetails;