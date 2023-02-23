/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#198754',
          dark: '#157347',
        },
        secondary: {
          main: '#16496f',
        },
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '600px' },
      // => @media (max-width: 600px) { ... }
      xs: { max: '450px' },
      // => @media (max-width: 450px) { ... }
    },
  },
  plugins: [],
};
