import React, { createContext, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTheme, type Theme } from '../hooks/useTheme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children,
}) => {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    // Ensure the theme is applied to the document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-bg-animated min-h-screen bg-primary text-primary">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};