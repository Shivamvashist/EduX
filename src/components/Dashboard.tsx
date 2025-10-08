import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { DashboardPanel } from './ui/DashboardPanel';
import { StarIcon, RocketIcon, HeartIcon, PersonIcon } from '@radix-ui/react-icons';

interface DashboardProps {
  onStartOnboarding: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartOnboarding }) => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 border-b border-primary/10">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-neon bg-clip-text text-transparent">
            EduX Platform
          </h1>
          <p className="text-muted mt-1">Advanced Learning Management System</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={onStartOnboarding} className="flex items-center space-x-2">
            <PersonIcon className="w-4 h-4" />
            <span>New User</span>
          </Button>
          <ThemeToggle size="lg" />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-4">
              Welcome to the Future of Learning
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
              Experience seamless education with our advanced platform featuring dark/light themes, 
              smooth animations, and intuitive design.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="primary" size="lg" glow={true} onClick={onStartOnboarding}>
                Get Started with Onboarding
              </Button>
              <Button variant="secondary" size="lg">
                Explore Features
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardPanel
            title="Course Progress"
            icon={<RocketIcon className="w-4 h-4" />}
            action={<Button variant="ghost" size="sm">View All</Button>}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-secondary">React Fundamentals</span>
                <span className="text-accent-blue font-semibold">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-accent-blue to-accent-neon h-2 rounded-full w-[85%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">TypeScript Mastery</span>
                <span className="text-accent-blue font-semibold">72%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-accent-blue to-accent-neon h-2 rounded-full w-[72%]"></div>
              </div>
            </div>
          </DashboardPanel>

          <DashboardPanel
            title="Recent Activity"
            icon={<StarIcon className="w-4 h-4" />}
          >
            <div className="space-y-3">
              {[
                'Completed Quiz: React Hooks',
                'Submitted Assignment: TypeScript Project',
                'Joined Discussion: Best Practices',
                'Watched Video: Advanced Patterns'
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-2 h-2 bg-accent-neon rounded-full"></div>
                  <span className="text-secondary text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </DashboardPanel>

          <DashboardPanel
            title="Achievements"
            icon={<HeartIcon className="w-4 h-4" />}
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Fast Learner', color: 'from-yellow-400 to-orange-500' },
                { name: 'Perfect Score', color: 'from-green-400 to-emerald-500' },
                { name: 'Team Player', color: 'from-purple-400 to-pink-500' },
                { name: 'Consistent', color: 'from-blue-400 to-cyan-500' },
              ].map((achievement, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-muted hover:bg-card transition-colors">
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r ${achievement.color}`}></div>
                  <span className="text-xs text-secondary">{achievement.name}</span>
                </div>
              ))}
            </div>
          </DashboardPanel>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover={true} glow={true}>
            <h3 className="text-xl font-semibold text-primary mb-3">Dynamic Theming</h3>
            <p className="text-secondary mb-4">
              Switch seamlessly between dark and light modes with smooth animations and 
              carefully crafted color schemes optimized for learning.
            </p>
            <Button variant="primary" size="sm">
              Try Theme Toggle
            </Button>
          </Card>

          <Card hover={true} glow={true}>
            <h3 className="text-xl font-semibold text-primary mb-3">Smart Onboarding</h3>
            <p className="text-secondary mb-4">
              Experience our innovative onboarding system with text, audio, and video options 
              to create your personalized learning profile.
            </p>
            <Button variant="secondary" size="sm" onClick={onStartOnboarding}>
              Try Onboarding Flow
            </Button>
          </Card>
        </section>
      </main>
    </div>
  );
};