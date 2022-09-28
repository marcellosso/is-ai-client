/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#393E46',
        detail: '#FFD369',
        letter: '#EEEEEE',
      },
      fontFamily: {
        Kanit: ['Kanit', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs2: '280px',
      xs: '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
