/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Основные фоны
        'bg-dark': '#000000',
        'bg-darker': '#0a0a0a',
        'bg-card': '#111111',
        'bg-card-hover': '#1a1a1a',

        // Текст
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-muted': '#999999',

        // Акценты
        'accent-orange': '#ff4500',
        'accent-orange-hover': '#ff6b00',
        'accent-red': '#dc2626',
        'accent-red-hover': '#ef4444',
        'accent-green': '#00ff88',
        'accent-green-hover': '#10b981',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Bebas Neue', 'Impact', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', '5rem', '6rem'],
        'section': ['2.5rem', '3rem'],
        'card-title': ['1.25rem', '1.5rem'],
        'body': ['1rem', '1.125rem'],
      },
      spacing: {
        'section': '6rem',
        'container': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}