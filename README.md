# What is this?

This site demonstrates how to add [postcss-easings](https://github.com/postcss/postcss-easings)'s easing functions to Tailwind CSS's [Transition Timing Functions](https://tailwindcss.com/docs/transition-timing-function).

## How does this work?

Tailwind CSS configuration file (`tailwind.config.js`) is extended to add `transitionTimingFunction` to extend existing Tailwind CSS's transition timing functions.

```js
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
```

## How to Use New Functions

`ease-*` prefix will provide the new functions.  
For default Tailwind CSS functions, check out https://tailwindcss.com/docs/transition-timing-function.

`easeInOutBack` is not available in Tailwind CSS by default but it will now work.

```html
<img
  src="{logo}"
  class="h-1/3 w-1/3 transition ease-easeInOutBack duration-300"
  alt="logo"
/>
```

### List of Functions by PostCSS-Easings

`postcss-easings` ([MIT licensed](https://github.com/postcss/postcss-easings/blob/master/LICENSE)) provides following easings in the [source code](https://github.com/postcss/postcss-easings/blob/master/index.js#L3-L28).

```js
const EASINGS = {
  easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};
```

## Future Plan

I will create a [Tailwind CSS Preset](https://tailwindcss.com/docs/presets) (an NPM package) to make it easier to include.
