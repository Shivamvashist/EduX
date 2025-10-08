/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', 'class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			dark: {
  				bg: {
  					primary: '#0a0a0a',
  					secondary: '#1a1a1a',
  					card: '#262626',
  					muted: '#404040'
  				},
  				text: {
  					primary: '#ffffff',
  					secondary: '#e5e5e5',
  					muted: '#a3a3a3',
  					accent: '#d4d4d8'
  				},
  				border: {
  					primary: '#404040',
  					secondary: '#525252',
  					accent: '#1e40af'
  				},
  				accent: {
  					blue: '#3b82f6',
  					neon: '#06b6d4',
  					grey: '#6b7280'
  				}
  			},
  			light: {
  				bg: {
  					primary: '#ffffff',
  					secondary: '#f8fafc',
  					card: '#f1f5f9',
  					muted: '#e2e8f0'
  				},
  				text: {
  					primary: '#0f172a',
  					secondary: '#334155',
  					muted: '#64748b',
  					accent: '#475569'
  				},
  				border: {
  					primary: '#e2e8f0',
  					secondary: '#cbd5e1',
  					accent: '#3b82f6'
  				},
  				accent: {
  					blue: '#2563eb',
  					neon: '#0891b2',
  					grey: '#475569'
  				}
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		backgroundImage: {
  			'dark-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f172a 100%)',
  			'light-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
  			'neon-glow': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
  		},
  		animation: {
  			'theme-transition': 'theme-fade 0.3s ease-in-out',
  			'glow-pulse': 'glow 2s ease-in-out infinite alternate'
  		},
  		keyframes: {
  			'theme-fade': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			glow: {
  				'0%': {
  					opacity: '0.5'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}