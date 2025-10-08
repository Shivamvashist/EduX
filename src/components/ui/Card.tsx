import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = true,
  glow = false,
  gradient = false
}) => {
  return (
    <motion.div
      className={clsx(
        'card',
        {
          'glow-effect': glow,
          'bg-gradient': gradient,
        },
        className
      )}
      whileHover={hover ? { y: -2 } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};