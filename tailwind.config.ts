import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme primary colors
        dark: {
          900: '#1E1E1E', // Deepest background (warmer than pure black)
          800: '#151518', // Card backgrounds
          700: '#1F1F23', // Elevated surfaces
          600: '#2A2A2F', // Interactive elements
          500: '#35353B', // Borders
          400: '#4A4A52', // Disabled text
          300: '#6B6B73', // Secondary text
          200: '#8B8B94', // Subtle text
          100: '#ADADB5', // Muted text
          50: '#D1D1D6',  // Primary text
        },
        accent: {
          primary: '#FF6B35',   // Vibrant orange-red
          secondary: '#F7931E', // Golden orange
          tertiary: '#00C4A7',  // Teal
          purple: '#8B5CF6',    // Modern purple
          blue: '#3B82F6',      // Electric blue
        },
        neutral: {
          white: '#FFFFFF',
          black: '#000000',
          gray: {
            50: '#F8F9FA',
            100: '#F1F3F4',
            200: '#E8EAED',
            300: '#DADCE0',
            400: '#BDC1C6',
            500: '#9AA0A6',
            600: '#80868B',
            700: '#5F6368',
            800: '#3C4043',
            900: '#202124',
          }
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'display': ['Clash Display', 'Inter', 'sans-serif'], // Modern display font
        'heading': ['Inter', 'system-ui', 'sans-serif'],     // Clean headings
        'body': ['Inter', 'system-ui', 'sans-serif'],        // Professional body
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'], // Technical text
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
