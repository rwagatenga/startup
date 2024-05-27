/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        19.53: '19.53%',
        55.62: '55.62%',
        8.86: '8.86%',
        54.63: '54.63%',
        1245: '1245px',
        455: '455px',
        21: '21px',
        3921.64: '3921.64px',
        232: '232px',
        134: '134px',
        641: '641px',
        924: '924px',
      },
      borderColor: {
        'custom-gray': '#DBDBDB',
        100: '#C7C7C7',
      },
      colors: {
        '0ff542': '#0FF542',
        '00d1ff': '#00D1FF',
        customGray: '#D9D9D999',
      },
      fontSize: {
        '44px': '44px',
        35: '35px',
      },
      lineHeight: {
        '53px': '53px',
        42: '42px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
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
        600: '#008C12',
      },
      yellow: '#DFF200',
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      transparent: 'transparent',
      current: 'currentColor',
      '0ff542': '#0FF542',
      '00d1ff': '#00D1FF',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
