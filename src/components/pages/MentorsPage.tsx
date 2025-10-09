import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Brain, Target, Users, Zap, Star, Clock, Award } from 'lucide-react';

interface MentorsPageProps {
  onStartChat: (mentorId: number, mentorType: string) => void;
}

const MentorsPage: React.FC<MentorsPageProps> = ({ onStartChat }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Commander Sarah Chen',
      type: 'execution',
      title: 'Execution Mentor',
      specialty: 'Project Management & Implementation',
      description: 'Master the art of turning ideas into reality with strategic execution and project management expertise.',
      avatar: '👩‍💼',
      rating: 4.9,
      sessions: 1200,
      responseTime: '< 2 hours',
      expertise: ['Project Planning', 'Team Leadership', 'Agile Methods', 'Goal Setting'],
      status: 'online',
      price: 'Free'
    },
    {
      id: 2,
      name: 'Dr. Alex Kumar',
      type: 'expert',
      title: 'Expert Mentor',
      specialty: 'Technical Excellence & Advanced Concepts',
      description: 'Deep dive into complex technical concepts with industry-leading expertise and real-world experience.',
      avatar: '👨‍🔬',
      rating: 4.8,
      sessions: 980,
      responseTime: '< 4 hours',
      expertise: ['Advanced Architecture', 'System Design', 'Code Review', 'Best Practices'],
      status: 'online',
      price: 'Premium'
    },
    {
      id: 3,
      name: 'Maya Rodriguez',
      type: 'counselor',
      title: 'Learning Counselor',
      specialty: 'Career Guidance & Personal Development',
      description: 'Navigate your learning journey with personalized guidance on career paths and skill development.',
      avatar: '👩‍🎓',
      rating: 4.9,
      sessions: 1500,
      responseTime: '< 1 hour',
      expertise: ['Career Planning', 'Skill Assessment', 'Learning Strategy', 'Goal Setting'],
      status: 'online',
      price: 'Free'
    },
    {
      id: 4,
      name: 'AI Assistant Nova',
      type: 'ai',
      title: 'AI Support',
      specialty: '24/7 Instant Learning Support',
      description: 'Get immediate answers to your questions with AI-powered support tailored to your current learning progress.',
      avatar: '🤖',
      rating: 4.7,
      sessions: 'Unlimited',
      responseTime: 'Instant',
      expertise: ['Code Help', 'Concept Explanation', 'Debugging', 'Practice Problems'],
      status: 'online',
      price: 'Free'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Mentors', icon: Users },
    { id: 'execution', name: 'Execution', icon: Target },
    { id: 'expert', name: 'Expert', icon: Brain },
    { id: 'counselor', name: 'Counselor', icon: Award },
    { id: 'ai', name: 'AI Support', icon: Zap }
  ];

  const filteredMentors = selectedCategory === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.type === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-400';
      case 'busy':
        return 'bg-yellow-400';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Learning Mentors
        </h1>
        <p className="text-gray-300 text-lg">Connect with expert mentors to accelerate your learning journey</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
          >
            <category.icon size={18} />
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredMentors.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            {/* Mentor Header */}
            <div className="flex items-start gap-6 mb-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl border-2 border-white/20">
                  {mentor.avatar}
                </div>
                {/* Status Indicator */}
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getStatusColor(mentor.status)} rounded-full border-2 border-black`}></div>
              </div>
              
              {/* Mentor Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                  {mentor.price === 'Premium' && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      PREMIUM
                    </span>
                  )}
                </div>
                <p className="text-blue-400 font-medium mb-1">{mentor.title}</p>
                <p className="text-gray-400 text-sm mb-3">{mentor.specialty}</p>
                
                {/* Rating & Stats */}
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span>{mentor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} className="text-green-400" />
                    <span>{mentor.sessions} sessions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-purple-400" />
                    <span>{mentor.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">{mentor.description}</p>

            {/* Expertise Tags */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              onClick={() => onStartChat(mentor.id, mentor.type)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg group-hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Start Conversation
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">How Mentoring Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-blue-400" size={24} />
            </div>
            <h4 className="text-white font-medium mb-2">Choose Your Mentor</h4>
            <p className="text-gray-400 text-sm">Select a mentor based on your learning needs and goals</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="text-purple-400" size={24} />
            </div>
            <h4 className="text-white font-medium mb-2">Start Chatting</h4>
            <p className="text-gray-400 text-sm">Begin a conversation and get personalized guidance</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="text-green-400" size={24} />
            </div>
            <h4 className="text-white font-medium mb-2">Achieve Your Goals</h4>
            <p className="text-gray-400 text-sm">Get expert advice to accelerate your learning progress</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MentorsPage;