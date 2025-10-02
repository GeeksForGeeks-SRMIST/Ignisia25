/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1c1c1c',
        'brand-orange': '#f97316',
        'brand-gold': '#d4a34b',
        'brand-glow': '#ffae42',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        // ADDED: New font for navigation links
        'nav': ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 10px 0 rgba(255, 174, 66, 0.6)',
      }
    },
  },
  plugins: [],
}