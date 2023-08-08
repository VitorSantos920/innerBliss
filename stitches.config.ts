import { createStitches, globalCss } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    fonts: {
      poppins: 'Poppins, sans-serif',
      merriweather: 'Merriweather Sans, sans-serif',
    },

    colors: {
      darkGreen: '#374600 ',
      lightGreen: '#AAB487',
      titles: '#000000 ',
      descriptions: '#575757 ',
    },

    fontWeights: {
      lgt: 300,
      reg: 400,
      med: 500,
      bd: 700,
    },
  },
});

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ul: { listStyleType: 'none' },

  '.flex': { display: 'flex' },

  'a, button': {
    fontFamily: 'inherit',
    color: 'inherit',
  },

  a: { textDecoration: 'none' },
})();
