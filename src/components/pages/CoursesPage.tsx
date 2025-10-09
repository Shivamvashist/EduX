import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Clock, Users, Star, Gift, Zap } from 'lucide-react';
import CourseDetails from './CourseDetails';
import WeekDetails from './WeekDetails';
import QuestContent from './QuestContent';
import CourseCompletion from './CourseCompletion';
import MentorsPage from './MentorsPage';
import ChatPage from './ChatPage';

type ViewType = 'courses' | 'course-details' | 'week-details' | 'quest-content' | 'completion' | 'mentors' | 'chat';

const CoursesPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentView, setCurrentView] = useState<ViewType>('courses');
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<{ id: number; type: string } | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Galactic React Mastery',
      description: 'Journey through the React universe and master component galaxies, hook nebulas, and state management constellations.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=600&fit=crop&crop=center',
      duration: '12 hours',
      students: '2.4k',
      difficulty: 'Advanced',
      rating: 4.9,
      rewards: {
        xp: 850,
        mystery: 'Legendary React Toolkit'
      },
      category: 'Frontend',
      instructor: 'Captain Sarah Chen'
    },
    {
      id: 2,
      title: 'AI Neural Networks',
      description: 'Unlock the secrets of artificial intelligence and train neural networks that can think, learn, and evolve.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=600&fit=crop&crop=center',
      duration: '18 hours',
      students: '1.8k',
      difficulty: 'Expert',
      rating: 4.8,
      rewards: {
        xp: 1200,
        mystery: 'AI Commander Badge'
      },
      category: 'AI/ML',
      instructor: 'Dr. Alex Kumar'
    },
    {
      id: 3,
      title: 'Design Universe Explorer',
      description: 'Navigate the infinite cosmos of user experience and create interfaces that transcend dimensions.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop&crop=center',
      duration: '15 hours',
      students: '3.2k',
      difficulty: 'Intermediate',
      rating: 4.7,
      rewards: {
        xp: 650,
        mystery: 'Design Mastery Kit'
      },
      category: 'Design',
      instructor: 'Commander Maya'
    },
    {
      id: 4,
      title: 'Backend Space Station',
      description: 'Build and maintain powerful backend infrastructures that can handle intergalactic traffic and data flows.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=600&fit=crop&crop=center',
      duration: '20 hours',
      students: '1.9k',
      difficulty: 'Advanced',
      rating: 4.8,
      rewards: {
        xp: 950,
        mystery: 'Server Admiral Rank'
      },
      category: 'Backend',
      instructor: 'Admiral James'
    },
    {
      id: 5,
      title: 'Quantum Mobile Development',
      description: 'Master the art of creating mobile applications that work across multiple dimensions and platforms.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&crop=center',
      duration: '16 hours',
      students: '2.1k',
      difficulty: 'Intermediate',
      rating: 4.6,
      rewards: {
        xp: 750,
        mystery: 'Mobile Pioneer Certificate'
      },
      category: 'Mobile',
      instructor: 'Navigator Lisa'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-400 to-green-600';
      case 'Intermediate': return 'from-yellow-400 to-orange-500';
      case 'Advanced': return 'from-red-400 to-pink-600';
      case 'Expert': return 'from-purple-500 to-indigo-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const nextCourse = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const currentCourse = courses[currentIndex];

  // Navigation handlers
  const handleLaunchMission = () => {
    setSelectedCourse(currentCourse.id);
    setCurrentView('course-details');
  };

  const handleStartWeek = (weekId: number) => {
    setSelectedWeek(weekId);
    setCurrentView('week-details');
  };

  const handleStartQuest = (questId: number) => {
    setSelectedQuest(questId);
    setCurrentView('quest-content');
  };

  const handleCompleteQuest = () => {
    // Logic for quest completion
    setCurrentView('week-details'); // Return to week view
  };

  const handleCourseComplete = () => {
    setCurrentView('completion');
  };

  const handleStartChat = (mentorId: number, mentorType: string) => {
    setSelectedMentor({ id: mentorId, type: mentorType });
    setCurrentView('chat');
  };

  const handleBackToView = (view: ViewType) => {
    setCurrentView(view);
  };

  // Render different views
  if (currentView === 'course-details' && selectedCourse) {
    return (
      <CourseDetails
        courseId={selectedCourse}
        onBack={() => setCurrentView('courses')}
        onStartWeek={handleStartWeek}
      />
    );
  }

  if (currentView === 'week-details' && selectedWeek) {
    return (
      <WeekDetails
        weekId={selectedWeek}
        courseId={selectedCourse || 1}
        onBack={() => setCurrentView('course-details')}
        onStartQuest={handleStartQuest}
      />
    );
  }

  if (currentView === 'quest-content' && selectedQuest) {
    return (
      <QuestContent
        questId={selectedQuest}
        weekId={selectedWeek || 1}
        onBack={() => setCurrentView('week-details')}
        onComplete={handleCompleteQuest}
      />
    );
  }

  if (currentView === 'completion') {
    return (
      <CourseCompletion
        courseTitle={currentCourse.title}
        totalXP={850}
        completedWeeks={8}
        totalQuests={45}
        onReturnHome={() => setCurrentView('courses')}
        onViewCertificate={() => console.log('View certificate')}
      />
    );
  }

  if (currentView === 'mentors') {
    return (
      <MentorsPage
        onStartChat={handleStartChat}
      />
    );
  }

  if (currentView === 'chat' && selectedMentor) {
    return (
      <ChatPage
        mentorId={selectedMentor.id}
        mentorType={selectedMentor.type}
        onBack={() => setCurrentView('mentors')}
      />
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gray-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gray-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-8">
        <div className="flex justify-between items-center">
          <div></div> {/* Spacer */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-2">
              LEARNING GALAXY
            </h1>
            <p className="text-gray-300 text-lg">Choose Your Next Adventure</p>
          </div>
          <button
            onClick={() => setCurrentView('mentors')}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-medium border border-gray-500"
          >
            Mentors
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevCourse}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextCourse}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight size={28} />
      </button>

      {/* Main Course Display */}
      <div className="flex items-center justify-center h-full pt-24 pb-8">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center space-y-8 max-w-2xl px-8"
        >
          {/* Course Image */}
          <div className="relative">
            <div className="w-80 h-72 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={currentCourse.image}
                alt={currentCourse.title}
                className="w-full h-full object-cover"
              />
              
              
            </div>
            <div className='flex flex-row gap-2'>
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star size={12} className="text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{currentCourse.rating}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getDifficultyColor(currentCourse.difficulty)}`}>
                  {currentCourse.difficulty}
                </div>
            </div>
          </div>

          {/* Course Title */}
          <h2 className="text-3xl font-bold text-white mb-2">
            {currentCourse.title}
          </h2>

          {/* Course Description */}
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            {currentCourse.description}
          </p>

          {/* Course Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={16} className="text-blue-400" />
              <span className="text-white text-sm">{currentCourse.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users size={16} className="text-green-400" />
              <span className="text-white text-sm">{currentCourse.students}</span>
            </div>
            <div className="text-white text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              by {currentCourse.instructor}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
              <Gift size={20} className="text-yellow-400" />
              Mission Rewards
            </h3>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Zap size={16} className="text-yellow-400" />
                  <span className="text-2xl font-bold text-yellow-400">+{currentCourse.rewards.xp}</span>
                </div>
                <p className="text-blue-200 text-xs">Experience Points</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <div className="text-2xl">🎁</div>
                </div>
                <p className="text-blue-200 text-xs">{currentCourse.rewards.mystery}</p>
              </div>
            </div>
          </div>

          {/* Start Course Button */}
          <motion.button
            onClick={handleLaunchMission}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl border border-white/20 flex items-center justify-center gap-3 mx-auto transition-all duration-300"
          >
            <Play size={20} fill="currentColor" />
            Launch Mission
          </motion.button>
        </motion.div>
      </div>

      {/* Course Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {courses.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
export { CoursesPage };