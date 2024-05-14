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
        '19.53': '19.53%',
        '55.62': '55.62%',
        '8.86': '8.86%',
        '54.63': '54.63%',
        '1245': '1245px',  // Custom width for the main container
        '455': '455px',    // Custom width for the lines
        '21': '21px',      // Custom top position for the lines based on half the container height (assuming height: '42px')
        '3921.64': '3921.64px', // Custom top position for the main container
        '232': '232px',     // Custom width for the text container
        '134': '134px',     // Custom left position for the first line
        '641': '641px',     // Custom left position for the text container
        '924': '924px',
      },
      borderColor: {
        'custom-gray': '#DBDBDB', // Custom border color
      },
      colors: {
        '0ff542': '#0FF542',
        '00d1ff': '#00D1FF',
        customGray: '#D9D9D999',
      },
      fontSize: {
        '44px': '44px',
        '35': '35px'
      },
      lineHeight: {
        '53px': '53px',
        '42': '42px'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Assuming 'Inter' font is declared
      }
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
      },
      yellow: '#DFF200',
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      transparent: 'transparent',
      current: 'currentColor',
      '0ff542': '#0FF542',
      '00d1ff': '#00D1FF'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
