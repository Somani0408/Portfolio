/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyber-black": "#050505", // Deepest black
        "cyber-dark": "#0a0a0a", // Standard dark background
        "cyber-gray": "#121212", // Component background
        "cyber-light-gray": "#1e1e1e", // Borders/Accents
        "neon-cyan": "#00f0ff", // Primary accent
        "neon-cyan-dim": "rgba(0, 240, 255, 0.1)", // Dim accent for backgrounds
        "neon-cyan-hover": "#33f3ff", // Lighter cyan for hover
        "neon-red": "#ff003c", // Secondary accent (Offensive/Alert)
        "text-primary": "#f8f8f2",
        "text-secondary": "#a0a0a0",
        "text-dim": "#666666",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 5px rgba(0, 240, 255, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)',
        'neon-strong': '0 0 10px rgba(0, 240, 255, 0.6), 0 0 20px rgba(0, 240, 255, 0.4)',
        'neon-hover': '0 0 15px rgba(0, 240, 255, 0.7), 0 0 30px rgba(0, 240, 255, 0.4)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-inset': 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'cyber-gradient': 'radial-gradient(circle at 50% 50%, #1a1d26 0%, #0a0a0a 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      }
    },
  },
  plugins: [],
}
