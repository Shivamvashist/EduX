import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { RocketIcon, LightningBoltIcon, StarIcon } from '@radix-ui/react-icons';

interface LandingPageProps {
  onStartOnboarding: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartOnboarding }) => {
  const features = [
    {
      icon: RocketIcon,
      title: 'Smart Learning Paths',
      description: 'AI-powered course recommendations tailored to your learning style'
    },
    {
      icon: LightningBoltIcon,
      title: 'Interactive Experience',
      description: 'Engaging multimedia content with real-time feedback'
    },
    {
      icon: StarIcon,
      title: 'Achievement System',
      description: 'Earn rewards and track your progress with gamified learning'
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-neon bg-clip-text text-transparent">
            EduX Platform
          </h1>
          <p className="text-muted mt-1">Advanced Learning Management System</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ThemeToggle size="lg" />
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to the
            <br />
            <span className="bg-gradient-to-r from-accent-blue via-accent-neon to-accent-blue bg-clip-text text-transparent">
              Future of Learning
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience personalized education with our AI-powered platform. 
            Choose from multiple onboarding methods and unlock your full learning potential.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onStartOnboarding}
              glow={true}
              className="px-12 py-6 text-xl font-bold shadow-2xl"
            >
              <RocketIcon className="mr-3 w-6 h-6" />
              Start Your Journey
            </Button>
            <p className="text-sm text-muted mt-4">
              Get started with our smart onboarding process
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-8 bg-card border border-primary rounded-2xl glow-effect group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-accent-blue to-accent-neon flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {[
            { number: '10K+', label: 'Active Students' },
            { number: '500+', label: 'Expert Courses' },
            { number: '98%', label: 'Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
            >
              <motion.h4
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-neon bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-secondary font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-10 blur-2xl bg-gradient-to-r from-accent-blue to-accent-neon"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  );
};