import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, BookmarkIcon, ClockIcon, CheckCircledIcon } from '@radix-ui/react-icons';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      description: 'Master React hooks, context, and performance optimization',
      progress: 75,
      duration: '12 hours',
      lessons: 24,
      category: 'Frontend',
      difficulty: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&crop=center',
      instructor: 'Sarah Chen',
      enrolled: true
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Learn the basics of ML algorithms and data science',
      progress: 30,
      duration: '18 hours',
      lessons: 32,
      category: 'Data Science',
      difficulty: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center',
      instructor: 'Dr. Alex Kumar',
      enrolled: true
    },
    {
      id: 3,
      title: 'UX/UI Design Principles',
      description: 'Create beautiful and intuitive user experiences',
      progress: 0,
      duration: '15 hours',
      lessons: 28,
      category: 'Design',
      difficulty: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop&crop=center',
      instructor: 'Maya Rodriguez',
      enrolled: false
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      description: 'Build scalable server-side applications with Node.js',
      progress: 0,
      duration: '20 hours',
      lessons: 35,
      category: 'Backend',
      difficulty: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop&crop=center',
      instructor: 'James Wilson',
      enrolled: false
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Data Science', 'Design', 'Mobile'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Continue learning and discover new skills
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Enrolled</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
            </div>
            <BookmarkIcon className="h-8 w-8 text-blue-500" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Completed</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Hours Learned</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">42</p>
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Avg. Progress</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">52%</p>
            </div>
            <PlayIcon className="h-8 w-8 text-orange-500" />
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

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow group cursor-pointer"
          >
            {/* Course Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {course.enrolled && course.progress > 0 && (
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    In Progress
                  </span>
                </div>
              )}
              {!course.enrolled && (
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Available
                  </span>
                </div>
              )}
            </div>

            {/* Course Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                  {course.difficulty}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{course.category}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3 w-3" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <PlayIcon className="h-3 w-3" />
                  {course.lessons} lessons
                </div>
              </div>

              {course.enrolled && course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="text-xs text-gray-600 dark:text-gray-300">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  by {course.instructor}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    course.enrolled
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {course.enrolled ? (course.progress > 0 ? 'Continue' : 'Start') : 'Enroll'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
export { CoursesPage };