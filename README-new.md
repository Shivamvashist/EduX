# EduX Platform - Advanced Theme System

A comprehensive Vite + React + TypeScript project with advanced dark/light theme support, smooth animations, and modern UI components.

## 🚀 Features

- **Advanced Theme System**: Seamless dark/light mode switching with Zustand state management
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Modern UI Components**: Card, Button, DashboardPanel components with theme-aware styling
- **Custom Color Scheme**: Carefully crafted color palette optimized for both themes
- **Animated Background**: Dynamic background that responds to theme changes
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **TypeScript Support**: Full type safety throughout the application
- **Performance Optimized**: Efficient re-renders and smooth transitions

## 🎨 Color Scheme

### Dark Mode
- **Backgrounds**: Pure black (#0a0a0a), Dark grey (#1a1a1a), Card grey (#262626)
- **Text**: White (#ffffff), Light grey (#e5e5e5), Muted grey (#a3a3a3)
- **Accents**: Blue (#3b82f6), Neon cyan (#06b6d4), Border grey (#404040)

### Light Mode
- **Backgrounds**: Pure white (#ffffff), Light grey (#f8fafc), Card light (#f1f5f9)
- **Text**: Dark slate (#0f172a), Medium grey (#334155), Muted grey (#64748b)
- **Accents**: Blue (#2563eb), Cyan (#0891b2), Border light (#e2e8f0)

## 📁 Project Structure

```
src/
├── components/
│   ├── ThemeProvider.tsx      # Theme context provider
│   ├── ThemeToggle.tsx        # Animated theme toggle button
│   ├── AnimatedBackground.tsx # Dynamic background component
│   └── ui/
│       ├── Card.tsx          # Reusable card component
│       ├── Button.tsx        # Themed button component
│       └── DashboardPanel.tsx # Advanced panel component
├── hooks/
│   └── useTheme.ts           # Theme management hook
├── stores/
│   └── themeStore.ts         # Zustand theme store
├── styles/
│   └── globals.css           # Global styles and CSS variables
├── lib/
│   └── utils.ts              # Utility functions and animations
└── App.tsx                   # Main application component
```

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎯 Usage

### Theme Management

```tsx
import { useTheme } from './hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <div className={isDark ? 'dark-specific-class' : 'light-specific-class'}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### Using UI Components

```tsx
import { Card, Button, DashboardPanel, ThemeToggle } from './components';

function Dashboard() {
  return (
    <>
      <ThemeToggle size="lg" />
      
      <Card hover glow>
        <h3>My Card Title</h3>
        <p>Card content goes here</p>
      </Card>
      
      <Button variant="primary" size="lg" glow>
        Primary Action
      </Button>
      
      <DashboardPanel
        title="Analytics"
        icon={<AnalyticsIcon />}
        action={<Button variant="ghost">View All</Button>}
      >
        Panel content here
      </DashboardPanel>
    </>
  );
}
```

### Custom CSS Variables

The theme system uses CSS variables for easy customization:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  --accent-blue: #2563eb;
  /* ... more variables */
}

.dark {
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  --accent-blue: #3b82f6;
  /* ... dark mode overrides */
}
```

## 🎭 Animation System

Built-in animation variants for Framer Motion:

```tsx
import { fadeInUp, scaleIn, slideInFromRight } from './lib/utils';

function AnimatedComponent() {
  return (
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      exit={fadeInUp.exit}
      transition={fadeInUp.transition}
    >
      Content with smooth animations
    </motion.div>
  );
}
```

## 🔧 Configuration

### TailwindCSS Configuration

The project includes a comprehensive Tailwind config with:
- Custom color tokens
- Dark mode support (`darkMode: 'class'`)
- Custom animations and keyframes
- Extended theme with project-specific colors

### Theme Persistence

Themes are automatically saved to localStorage and restored on page reload. The system also respects system preferences for initial theme selection.

## 📱 Responsive Design

All components are built with mobile-first responsive design:
- Cards adapt to screen size
- Typography scales appropriately
- Touch-friendly interactive elements
- Optimized for various screen densities

## 🚀 Performance Features

- **Efficient Re-renders**: Zustand prevents unnecessary re-renders
- **Smooth Transitions**: Hardware-accelerated CSS transitions
- **Optimized Animations**: Framer Motion's performance optimizations
- **Minimal Bundle Size**: Tree-shaking enabled for unused components

## 🎨 Customization

### Adding New Themes

1. Extend the color palette in `tailwind.config.js`
2. Add new CSS variables in `globals.css`
3. Update the theme store in `themeStore.ts`
4. Modify components to use new theme variables

### Creating Custom Components

Follow the established patterns:
- Use CSS variables for colors
- Include hover states and transitions
- Support both theme variants
- Add Framer Motion animations
- Include TypeScript interfaces

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌟 Key Features in Action

1. **Theme Toggle**: Click the sun/moon icon to switch themes
2. **Smooth Transitions**: All elements transition smoothly between themes
3. **Animated Background**: Background patterns change with theme
4. **Glow Effects**: Subtle glow effects enhance the visual experience
5. **Responsive Layout**: Try different screen sizes to see responsive behavior

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new UI components
- Improving animations
- Enhancing the color scheme
- Optimizing performance
- Adding new features

---

**Built with ❤️ using React, TypeScript, TailwindCSS, Zustand, and Framer Motion**