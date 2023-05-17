import { transformWithEsbuild } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12273D',
        secondary: '#741906',
        ghost: '#EBEBEB',
        background: '#fafafa',
      },
      keyframes: {
        show: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        hide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        show: 'show .5s ease  forwards',
        hide: 'hide .3s ease-out forwards',
      },
      backgroundImage: {
        'background-image': 'url(./src/assets/images/Background.png)',
        'services-bg': 'url(./src/assets/images/services-bg.png)',
      },
      boxShadow: {
        'car-shadow': ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        'nav-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
      fontFamily: {
        lora: ['lora', 'serif'],
      },
    },
  },
  extend: {},
  plugins: [],
};
