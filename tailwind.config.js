/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    container: {
      center: true,
    },

    animation: {
      shake: 'shake 0.5s linear infinite',
      rubber: 'rubber 650ms  alternate ease-out ',
      bounce: 'bounce 1s infinite',
    },

    keyframes: {
      shake: {
        '0%': { transform: 'translate(0, 0) rotate:(0deg)' },
        '25%': { transform: 'translate(5px, 5px) rotate(5deg)' },
        '50%': { transform: 'translate(0, 0) rotate(0eg)' },
        '75%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
        '100%': { transform: 'translate(0, 0) rotate(0deg)' },
      },
      rubber: {
        '0%': {
          transform: 'scaleX(1)',
        },
        '40%': {
          transform: 'scaleX(1.35) scaleY(0.74)',
        },
        '55%': {
          transform: 'scaleX(0.85) scaleY(1.2)',
          color: '#ec4899',
        },

        '75%': {
          transform: 'scaleX(1.4)  scaleY(0.6)',
        },

        '100%': {
          transform: 'scaleX(1) scaleY(1)',
        },
      },
      bounce: {
        '0% ,100%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': ' cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
    fontFamily: {
      lobster: ['Lobster'],
      roboto: ['Roboto'],
      prompt: ['Prompt'],
    },
    extend: {},
  },
};
