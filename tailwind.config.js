/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '5/7': '5 / 7',
      },
      colors: {
        'gray-rgba': 'rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        increase: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '-200% center' },
        },
      },
      animation: {
        'background-pan': 'increase 1s linear infinite',
      },
    },
  },
  plugins: [],
};
