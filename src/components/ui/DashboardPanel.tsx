import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { clsx } from 'clsx';

interface DashboardPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  action?: ReactNode;
  loading?: boolean;
}

export const DashboardPanel: React.FC<DashboardPanelProps> = ({
  title,
  children,
  className = '',
  icon,
  action,
  loading = false,
}) => {
  return (
    <Card 
      className={clsx('relative overflow-hidden', className)}
      glow={true}
    >
      {/* Header */}
      {(title || icon || action) && (
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary">
          <div className="flex items-center space-x-3">
            {icon && (
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-accent-blue to-accent-neon text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {icon}
              </motion.div>
            )}
            {title && (
              <h3 className="text-lg font-semibold text-primary">
                {title}
              </h3>
            )}
          </div>
          {action && (
            <div className="flex items-center space-x-2">
              {action}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm flex items-center justify-center z-10">
            <motion.div
              className="w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-8 translate-x-8 opacity-5">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-accent-blue to-accent-neon rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-neon/5 via-transparent to-transparent pointer-events-none" />
    </Card>
  );
};