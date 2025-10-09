import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Play, Lock, Clock, Zap, Target, ArrowRight } from 'lucide-react';

interface QuestOverviewProps {
  onViewAllQuests: () => void;
}

const QuestOverview: React.FC<QuestOverviewProps> = ({ onViewAllQuests }) => {
  // Mock quest data for dashboard
  const quests = [
    {
      id: 1,
      title: 'Understanding JSX',
      course: 'React Fundamentals',
      status: 'completed',
      xp: 25,
      type: 'tutorial',
      progress: 100,
      timeAgo: '2 days ago'
    },
    {
      id: 2,
      title: 'Creating Your First Component',
      course: 'React Fundamentals', 
      status: 'completed',
      xp: 35,
      type: 'hands-on',
      progress: 100,
      timeAgo: '1 day ago'
    },
    {
      id: 3,
      title: 'Props and Data Flow',
      course: 'React Fundamentals',
      status: 'current',
      xp: 40,
      type: 'interactive',
      progress: 60,
      timeAgo: 'In progress'
    },
    {
      id: 4,
      title: 'Event Handling',
      course: 'React Fundamentals',
      status: 'next',
      xp: 30,
      type: 'practical',
      progress: 0,
      timeAgo: 'Unlocks next'
    },
    {
      id: 5,
      title: 'Component Composition',
      course: 'React Fundamentals',
      status: 'locked',
      xp: 50,
      type: 'project',
      progress: 0,
      timeAgo: 'Week 2'
    },
    {
      id: 6,
      title: 'Neural Network Basics',
      course: 'AI Fundamentals',
      status: 'locked',
      xp: 75,
      type: 'advanced',
      progress: 0,
      timeAgo: 'Future course'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={16} />;
      case 'current':
        return <Play className="text-blue-400" size={16} />;
      case 'next':
        return <Clock className="text-yellow-400" size={16} />;
      case 'locked':
        return <Lock className="text-gray-500" size={16} />;
      default:
        return <Lock className="text-gray-500" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500/10 to-green-600/5 border-green-500/20';
      case 'current':
        return 'from-blue-500/20 to-purple-600/10 border-blue-500/30';
      case 'next':
        return 'from-yellow-500/10 to-orange-500/5 border-yellow-500/20';
      case 'locked':
        return 'from-gray-700/10 to-gray-800/5 border-gray-600/20';
      default:
        return 'from-gray-700/10 to-gray-800/5 border-gray-600/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tutorial':
        return '📖';
      case 'hands-on':
        return '💻';
      case 'interactive':
        return '🎮';
      case 'practical':
        return '🛠️';
      case 'project':
        return '🚀';
      case 'advanced':
        return '🧠';
      default:
        return '📋';
    }
  };

  const completedQuests = quests.filter(q => q.status === 'completed').length;
  const totalXP = quests.filter(q => q.status === 'completed').reduce((sum, quest) => sum + quest.xp, 0);

  return (
    <div className="bg-card border rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Target className="text-primary" size={24} />
          <div>
            <h3 className="text-lg font-semibold text-primary">Quest Progress</h3>
            <p className="text-sm text-muted-foreground">Your learning journey</p>
          </div>
        </div>
        <button
          onClick={onViewAllQuests}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View All
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-primary mb-1">{completedQuests}</div>
          <div className="text-xs text-muted-foreground">Completed</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-yellow-500 mb-1">{totalXP}</div>
          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Zap size={12} />
            XP Earned
          </div>
        </div>
      </div>

      {/* Quest Timeline */}
      <div className="space-y-3">
        {quests.slice(0, 5).map((quest, index) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-gradient-to-r ${getStatusColor(quest.status)} backdrop-blur-md border rounded-lg p-4 group hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Connection Line */}
            {index < quests.slice(0, 5).length - 1 && (
              <div className="absolute left-6 bottom-0 w-0.5 h-3 bg-gradient-to-b from-border to-transparent transform translate-y-full"></div>
            )}

            <div className="flex items-center gap-4">
              {/* Quest Status & Number */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center text-xs font-bold mb-1">
                  {quest.id}
                </div>
                {getStatusIcon(quest.status)}
              </div>

              {/* Quest Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{getTypeIcon(quest.type)}</span>
                  <h4 className="font-medium text-foreground truncate">{quest.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{quest.course}</p>
                
                {/* Progress Bar (for current quest) */}
                {quest.status === 'current' && quest.progress > 0 && (
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted-foreground">Progress</span>
                      <span className="text-xs text-muted-foreground">{quest.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                        style={{ width: `${quest.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Zap size={10} className="text-yellow-500" />
                      +{quest.xp} XP
                    </span>
                    <span>{quest.timeAgo}</span>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    quest.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    quest.status === 'current' ? 'bg-blue-500/20 text-blue-400' :
                    quest.status === 'next' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-500'
                  }`}>
                    {quest.status === 'current' ? 'In Progress' : quest.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.button
        onClick={onViewAllQuests}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary rounded-lg font-medium text-sm transition-all duration-300"
      >
        View All Quests
      </motion.button>
    </div>
  );
};

export default QuestOverview;