const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const plugins =
  process.env.NODE_ENV === 'production'
    ? ['postcss-easings', tailwindcss, autoprefixer, cssnano]
    : ['postcss-easings', tailwindcss, autoprefixer];

module.exports = { plugins };
