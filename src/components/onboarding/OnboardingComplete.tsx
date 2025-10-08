import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircledIcon, RocketIcon, StarIcon } from '@radix-ui/react-icons';
import { useThemeContext } from '../ThemeProvider';

interface OnboardingCompleteProps {
  onboardingType: 'text' | 'audio' | 'video';
  onContinueToDashboard: () => void;
}

export const OnboardingComplete: React.FC<OnboardingCompleteProps> = ({ 
  onboardingType, 
  onContinueToDashboard 
}) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const { isDark } = useThemeContext();

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const getOnboardingTypeInfo = () => {
    switch (onboardingType) {
      case 'text':
        return {
          title: 'Text-Based Onboarding',
          description: 'Successfully completed form submission',
          icon: '📝'
        };
      case 'audio':
        return {
          title: 'Audio-Based Onboarding', 
          description: 'Successfully completed voice interview',
          icon: '🎙️'
        };
      case 'video':
        return {
          title: 'Video-Based Onboarding',
          description: 'Successfully completed video interview',
          icon: '🎥'
        };
      default:
        return {
          title: 'Onboarding Complete',
          description: 'Successfully registered',
          icon: '✅'
        };
    }
  };

  const typeInfo = getOnboardingTypeInfo();

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark
              ? [
                  'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)'
                ]
              : [
                  'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 20%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)'
                ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {showConfetti && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-accent-neon' : 'bg-accent-blue'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Success Icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.3, 
            type: "spring", 
            stiffness: 200 
          }}
        >
          <div className="relative inline-block">
            <motion.div
              className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                isDark
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                  : 'bg-gradient-to-br from-green-400 to-emerald-500'
              }`}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.3)',
                  '0 0 40px rgba(34, 197, 94, 0.5)',
                  '0 0 20px rgba(34, 197, 94, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircledIcon className="w-12 h-12 text-white" />
            </motion.div>

            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-400"
              animate={{ 
                scale: [1, 1.5, 2],
                opacity: [1, 0.5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </div>
        </motion.div>

        {/* Congratulations Message */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            <motion.span
              className="bg-gradient-to-r from-accent-blue via-accent-neon to-accent-blue bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Congratulations!
            </motion.span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-secondary mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Onboarding Complete
          </motion.p>

          <motion.div
            className="inline-flex items-center space-x-2 bg-card border border-primary rounded-full px-4 py-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="text-2xl">{typeInfo.icon}</span>
            <span className="text-sm text-secondary">{typeInfo.title}</span>
          </motion.div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-card border border-primary rounded-2xl p-6 glow-effect">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Welcome to EduX Platform! 🎉
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              You've successfully completed the {typeInfo.description.toLowerCase()}. 
              Your personalized learning journey is now ready to begin.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <motion.div
                className="text-center p-3 bg-secondary rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <RocketIcon className="w-6 h-6 mx-auto text-accent-blue mb-2" />
                <p className="text-sm font-medium text-primary">Ready to Learn</p>
              </motion.div>
              
              <motion.div
                className="text-center p-3 bg-secondary rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <StarIcon className="w-6 h-6 mx-auto text-accent-neon mb-2" />
                <p className="text-sm font-medium text-primary">Profile Created</p>
              </motion.div>
              
              <motion.div
                className="text-center p-3 bg-secondary rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircledIcon className="w-6 h-6 mx-auto text-green-400 mb-2" />
                <p className="text-sm font-medium text-primary">Setup Complete</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onContinueToDashboard}
            glow={true}
            className="px-8 py-4 text-lg font-semibold"
          >
            Continue to Dashboard
            <RocketIcon className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Fun Fact */}
        <motion.p
          className="text-sm text-muted mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          🎯 Your personalized learning experience awaits!
        </motion.p>
      </motion.div>
    </div>
  );
};