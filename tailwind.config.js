/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      blue: {
        100: '#00D1FF',
        200: '#00A6CB',
        300: '#022F62',
        400: '#09284D',
        500: '#013647',
        600: '#011B2D',
        700: '#010209',
      },
      green: {
        100: '#37FA2C',
        200: '#172617',
      },
      yellow: '#DFF200',
      white: colors.white,
      gray: colors.gray,
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [],
};
