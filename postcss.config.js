const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssEasings = require('postcss-easings');

const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssEasings, tailwindcss, autoprefixer, cssnano]
    : [postcssEasings, tailwindcss, autoprefixer];

module.exports = { plugins };
