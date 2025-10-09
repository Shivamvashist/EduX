import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Lock, CheckCircle, ChevronRight, ChevronLeft, BookOpen, Code, Video, FileText, Target, Zap, Trophy, Gift, Clock, Menu, X } from 'lucide-react';

interface QuestContentProps {
  questId: number;
  weekId: number;
  onBack: () => void;
  onComplete: () => void;
}

const QuestContent: React.FC<QuestContentProps> = ({ questId, weekId, onBack, onComplete }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Mock quest content data
  const questData = {
    1: {
      id: 1,
      title: 'Understanding JSX',
      content: {
        type: 'tutorial',
        sections: [
          {
            title: 'What is JSX?',
            content: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It makes React code more readable and easier to write.',
            codeExample: `
const element = <h1>Hello, world!</h1>;

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
            `
          },
          {
            title: 'JSX Rules',
            content: 'There are some important rules to follow when writing JSX. Elements must be properly closed, and you can only return one parent element.',
            codeExample: `
// ✅ Correct - Single parent element
return (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);

// ❌ Wrong - Multiple parent elements
return (
  <h1>Title</h1>
  <p>Content</p>
);
            `
          }
        ]
      },
      rewards: ['XP +25', '🎯 JSX Master Badge'],
      estimatedTime: '30 min'
    }
  };

  // Mock week quests for the sheet
  const weekQuests = {
    1: [
      { id: 1, title: 'Understanding JSX', status: 'current', xp: 25 },
      { id: 2, title: 'Creating Your First Component', status: 'locked', xp: 35 },
      { id: 3, title: 'Props and Data Flow', status: 'locked', xp: 40 },
      { id: 4, title: 'Event Handling', status: 'locked', xp: 30 },
      { id: 5, title: 'Component Composition', status: 'locked', xp: 50 }
    ]
  };

  const quest = questData[questId as keyof typeof questData];
  const quests = weekQuests[weekId as keyof typeof weekQuests] || [];

  if (!quest) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={16} />;
      case 'current':
        return <Play className="text-blue-400" size={16} />;
      case 'locked':
        return <Lock className="text-gray-500" size={16} />;
      default:
        return <Lock className="text-gray-500" size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-xl font-bold text-white">{quest.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {quest.estimatedTime}
                </span>
                <span className="flex items-center gap-1">
                  <Zap size={14} className="text-yellow-400" />
                  +{quest.rewards[0].split('+')[1].split(' ')[0]} XP
                </span>
              </div>
            </div>
          </div>
          
          {/* Quest Navigation Sheet Toggle */}
          <button
            onClick={() => setIsSheetOpen(!isSheetOpen)}
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6 lg:mr-80">
          <div className="max-w-4xl mx-auto">
            {/* Quest Content */}
            <div className="space-y-8">
              {quest.content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{section.content}</p>
                  
                  {/* Code Example */}
                  {section.codeExample && (
                    <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 overflow-x-auto">
                      <pre className="text-green-400 font-mono text-sm">
                        <code>{section.codeExample.trim()}</code>
                      </pre>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Complete Quest Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Quest Complete!</h3>
              <p className="text-gray-300 mb-6">You've mastered the fundamentals of JSX. Ready to claim your rewards?</p>
              
              {/* Rewards */}
              <div className="flex justify-center gap-4 mb-8">
                {quest.rewards.map((reward, idx) => (
                  <div key={idx} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium">
                    {reward}
                  </div>
                ))}
              </div>
              
              <button
                onClick={onComplete}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full text-lg shadow-2xl border border-white/20 flex items-center justify-center gap-3 mx-auto transition-all duration-300"
              >
                <Trophy size={20} />
                Complete Quest
              </button>
            </motion.div>
          </div>
        </div>

        {/* Quest Navigation Sheet - Desktop */}
        <div className="hidden lg:block fixed right-0 top-0 h-full w-80 bg-black/80 backdrop-blur-md border-l border-white/10 z-20">
          <div className="p-6 h-full overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Target size={20} className="text-blue-400" />
              Week {weekId} Quests
            </h3>
            
            <div className="space-y-4">
              {quests.map((q, index) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
                    q.id === questId
                      ? 'bg-blue-500/20 border-blue-500/30'
                      : q.status === 'completed'
                      ? 'bg-green-500/10 border-green-500/20'
                      : q.status === 'locked'
                      ? 'bg-gray-800/50 border-gray-600/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {q.id}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm mb-1">{q.title}</h4>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(q.status)}
                        <span className="text-xs text-gray-400 capitalize">{q.status}</span>
                        <span className="text-xs text-yellow-400">+{q.xp} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quest Navigation Sheet - Mobile */}
        <AnimatePresence>
          {isSheetOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSheetOpen(false)}
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              />
              
              {/* Sheet */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="fixed right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-md border-l border-white/10 z-40 lg:hidden"
              >
                <div className="p-6 h-full overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Target size={20} className="text-blue-400" />
                      Week {weekId} Quests
                    </h3>
                    <button
                      onClick={() => setIsSheetOpen(false)}
                      className="p-2 bg-white/10 rounded-lg text-white"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {quests.map((q, index) => (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border ${
                          q.id === questId
                            ? 'bg-blue-500/20 border-blue-500/30'
                            : q.status === 'completed'
                            ? 'bg-green-500/10 border-green-500/20'
                            : q.status === 'locked'
                            ? 'bg-gray-800/50 border-gray-600/30'
                            : 'bg-white/5 border-white/10'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {q.id}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm mb-1">{q.title}</h4>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(q.status)}
                              <span className="text-xs text-gray-400 capitalize">{q.status}</span>
                              <span className="text-xs text-yellow-400">+{q.xp} XP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuestContent;