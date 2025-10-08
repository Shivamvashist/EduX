import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from '../ThemeProvider';

// SVG Icons for the onboarding options
const TextIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 60h120M40 100h120M40 140h80"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <rect
      x="20"
      y="30"
      width="160"
      height="140"
      rx="16"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

const AudioIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="120" r="25" fill="currentColor" />
    <rect x="90" y="145" width="20" height="30" fill="currentColor" />
    <rect x="70" y="175" width="60" height="8" rx="4" fill="currentColor" />
    <path
      d="M65 120c0-19.33 15.67-35 35-35s35 15.67 35 35"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M50 120c0-27.61 22.39-50 50-50s50 22.39 50 50"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const VideoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="20"
      y="50"
      width="120"
      height="100"
      rx="12"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />
    <path
      d="M140 80l30-20v80l-30-20"
      fill="currentColor"
    />
    <circle cx="60" cy="90" r="8" fill="currentColor" />
    <circle cx="100" cy="90" r="8" fill="currentColor" />
    <path
      d="M45 110c0 8.28 11.19 15 25 15s25-6.72 25-15"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

interface OnboardingOption {
  id: 'text' | 'audio' | 'video';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const onboardingOptions: OnboardingOption[] = [
  {
    id: 'text',
    title: 'Text-based Onboarding',
    description: 'Fill a form with text to create your student account',
    icon: TextIcon,
  },
  {
    id: 'audio',
    title: 'Audio-based Onboarding',
    description: 'Talk with our AI agent and give us an intro to generate your account',
    icon: AudioIcon,
  },
  {
    id: 'video',
    title: 'Video-based Onboarding',
    description: 'Experience our AI Interviewer for your account generation based on your interview',
    icon: VideoIcon,
  },
];

interface OnboardingSelectionProps {
  onSelect: (option: 'text' | 'audio' | 'video') => void;
}

export const OnboardingSelection: React.FC<OnboardingSelectionProps> = ({ onSelect }) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useThemeContext();

  const handleMouseMove = (e: React.MouseEvent, optionId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredOption(optionId);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3">
        {onboardingOptions.map((option, index) => {
          const IconComponent = option.icon;
          const isHovered = hoveredOption === option.id;
          
          return (
            <motion.div
              key={option.id}
              className="relative flex flex-col items-center justify-center p-8 cursor-pointer overflow-hidden border-r border-primary/10 last:border-r-0"
              onMouseMove={(e) => handleMouseMove(e, option.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onSelect(option.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient overlay that follows cursor */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
                      isDark 
                        ? 'rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.1) 40%, transparent 70%'
                        : 'rgba(14, 165, 233, 0.08), rgba(37, 99, 235, 0.06) 40%, transparent 70%'
                    })`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Icon */}
              <motion.div
                className="relative mb-8"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <IconComponent 
                  className={`w-32 h-32 md:w-40 md:h-40 transition-colors duration-500 ${
                    isHovered 
                      ? isDark 
                        ? 'text-white drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                        : 'text-primary drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]'
                      : isDark
                        ? 'text-muted'
                        : 'text-secondary'
                  }`}
                />
                
                {/* Glow effect */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-20"
                    style={{
                      background: `radial-gradient(circle, ${
                        isDark ? '#06b6d4' : '#0ea5e9'
                      } 0%, transparent 70%)`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0.7,
                  y: isHovered ? -10 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                  isHovered 
                    ? 'text-primary bg-gradient-to-r from-accent-blue to-accent-neon bg-clip-text text-transparent'
                    : 'text-primary'
                }`}>
                  {option.title}
                </h3>
                
                <motion.p
                  className={`text-sm md:text-base max-w-xs mx-auto transition-all duration-300 ${
                    isHovered ? 'text-secondary' : 'text-muted'
                  }`}
                  animate={{ 
                    opacity: isHovered ? 1 : 0.6,
                    scale: isHovered ? 1.05 : 1 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {option.description}
                </motion.p>

                {/* Animated border */}
                {isHovered && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-neon rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 96, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                )}
              </motion.div>

              {/* Subtle background pattern */}
              <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${
                isDark ? 'bg-white' : 'bg-black'
              }`} 
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }} 
              />
            </motion.div>
          );
        })}
      </div>

      {/* Floating instruction */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="text-center text-muted text-sm md:text-base">
          Choose your preferred onboarding method
        </p>
      </motion.div>
    </div>
  );
};