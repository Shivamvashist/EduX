import React from 'react';
import { motion } from 'framer-motion';
import { 
  DashboardIcon, 
  BookmarkIcon, 
  BarChartIcon, 
  ArchiveIcon, 
  StarIcon,
  PersonIcon,
  GearIcon,
  ExitIcon
} from '@radix-ui/react-icons';
import { useThemeContext } from './ThemeProvider';

type SidebarTab = 'dashboard' | 'courses' | 'skill-analysis' | 'redemption' | 'rewards';

interface SidebarItem {
  id: SidebarTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

interface SidebarProps {
  currentTab: SidebarTab;
  onTabChange: (tab: SidebarTab) => void;
  onProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
  { id: 'courses', label: 'Courses', icon: BookmarkIcon, badge: '12' },
  { id: 'skill-analysis', label: 'Skill Analysis', icon: BarChartIcon },
  { id: 'redemption', label: 'Redemption', icon: ArchiveIcon, badge: 'New' },
  { id: 'rewards', label: 'Rewards', icon: StarIcon, badge: '3' },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentTab, 
  onTabChange, 
  onProfile, 
  onSettings, 
  onLogout 
}) => {
  const { isDark } = useThemeContext();

  return (
    <motion.div
      className="w-64 h-full bg-card border-r border-primary flex flex-col"
      initial={{ x: -264 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="p-6 border-b border-primary/10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-neon bg-clip-text text-transparent">
            EduX
          </h1>
          <p className="text-xs text-muted mt-1">Learning Platform</p>
        </motion.div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {sidebarItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = currentTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 relative group ${
                isActive
                  ? 'bg-gradient-to-r from-accent-blue to-accent-neon text-white shadow-lg'
                  : 'text-secondary hover:text-primary hover:bg-secondary'
              }`}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="flex items-center space-x-3">
                <IconComponent 
                  className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-white' : 'text-secondary group-hover:text-primary'
                  }`} 
                />
                <span className={`font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-secondary group-hover:text-primary'
                }`}>
                  {item.label}
                </span>
              </div>

              {/* Badge */}
              {item.badge && (
                <motion.div
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    isActive 
                      ? 'bg-white/20 text-white'
                      : item.badge === 'New'
                        ? 'bg-green-500 text-white'
                        : 'bg-accent-blue text-white'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {item.badge}
                </motion.div>
              )}

              {/* Hover glow effect */}
              {!isActive && (
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-accent-blue/10 to-accent-neon/10'
                    : 'bg-gradient-to-r from-accent-blue/5 to-accent-neon/5'
                }`} />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-primary/10 space-y-2">
        {/* Profile */}
        <motion.button
          onClick={onProfile}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-secondary hover:text-primary hover:bg-secondary transition-all duration-300"
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <PersonIcon className="w-5 h-5" />
          <span className="font-medium">Profile</span>
        </motion.button>

        {/* Settings */}
        <motion.button
          onClick={onSettings}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-secondary hover:text-primary hover:bg-secondary transition-all duration-300"
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <GearIcon className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </motion.button>

        {/* Logout */}
        <motion.button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300"
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExitIcon className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </motion.button>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-accent-blue/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};