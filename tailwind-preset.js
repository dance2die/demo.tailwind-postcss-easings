const { easings } = require('postcss-easings');

module.exports = {
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
};
