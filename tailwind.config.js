/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9333ea',
          dark: '#7e22ce',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1e1e1e',
        }
      }
    },
  },
  plugins: [],
};