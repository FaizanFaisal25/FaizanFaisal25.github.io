// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
        display: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      boxShadow: {
        soft: '0 8px 28px -18px rgba(15, 23, 42, 0.2)',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/filters'),
  ],
};
