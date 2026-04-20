/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      boxShadow: {
        '3d': '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        '3d-glow': '0 10px 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(168, 85, 247, 0.2)',
        '3d-lg': '0 30px 80px rgba(168, 85, 247, 0.3), 0 0 120px rgba(168, 85, 247, 0.15)',
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 15s linear infinite',
      },
    },
  },
  plugins: [],
}