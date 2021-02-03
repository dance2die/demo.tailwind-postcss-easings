const { easings } = require('postcss-easings');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: { ...easings },
    },
  },
  variants: {
    extend: {
      transitionTimingFunction: ['hover', 'focus'],
    },
  },
  plugins: [],
};
