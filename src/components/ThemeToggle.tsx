import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useThemeContext } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const { toggleTheme, isDark } = useThemeContext();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center
        ${sizeClasses[size]}
        rounded-full
        bg-secondary
        border border-primary
        hover:border-accent
        hover:bg-muted
        focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2
        glow-effect
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        rotate: isDark ? 180 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="absolute"
      >
        <SunIcon className={`${iconSizeClasses[size]} text-amber-500`} />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="absolute"
      >
        <MoonIcon className={`${iconSizeClasses[size]} text-blue-400`} />
      </motion.div>

      {/* Glow effect for dark mode */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
        initial={false}
        animate={{
          opacity: isDark ? 0.6 : 0,
          scale: isDark ? 1 : 0.8,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.button>
  );
};