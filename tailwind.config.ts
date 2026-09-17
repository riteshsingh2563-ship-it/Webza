import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--foreground)',
        },
        border: 'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--foreground)',
        },
        brand: {
          black: '#090a09',
          dark: '#0e110e',
          surface: '#141713',
          elevated: '#1a1f19',
          card: 'rgba(20, 23, 19, 0.75)',
          olive: {
            DEFAULT: '#6b7d50',
            light: '#829762',
            dark: '#242b1a',
            subtle: 'rgba(107, 125, 80, 0.15)',
          },
          cream: {
            DEFAULT: '#f5f4ee',
            pure: '#ffffff',
            sand: '#ebeae3',
            muted: '#d5d4cb',
          },
          gray: {
            muted: '#8e9189',
            dark: '#383b34',
            border: 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
      fontFamily: {
        heading: ['var(--fh)', 'Fraunces', 'Georgia', 'serif'],
        body: ['var(--fb)', 'Bricolage Grotesque', 'system-ui', 'sans-serif'],
        label: ['var(--fl)', 'Sora', 'system-ui', 'sans-serif'],
        fraunces: ['var(--fh)', 'Fraunces', 'Georgia', 'serif'],
        bricolage: ['var(--fb)', 'Bricolage Grotesque', 'system-ui', 'sans-serif'],
        sora: ['var(--fl)', 'Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
