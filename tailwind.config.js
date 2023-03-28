/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      'dm-sans': ['"DM Sans"', 'sans-serif'],
    },
    colors: {
      'primary-color': '#edf2f8',
      'secondary-color': '#0074ff',
      'black-color': '#030303',
      'lightGray-color': '#e4e4e4',
      'gray-color': '#6b7688',
      'brown-color': '#46364a',
      'white-color': '#ffffff',
    },
  },
  plugins: [],
};
