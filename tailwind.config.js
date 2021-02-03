module.exports = {
  purge: [],
  presets: [require('./tailwind-preset.js')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // transitionTimingFunction: ['hover', 'focus'],
    },
  },
  plugins: [],
};
