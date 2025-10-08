import React from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from './ThemeProvider';

export const AnimatedBackground: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f172a 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-64 h-64 rounded-full opacity-20 blur-3xl ${
            isDark ? 'bg-cyan-500' : 'bg-blue-300'
          }`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 0)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          opacity: isDark ? 0.03 : 0.02,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Subtle gradient overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};