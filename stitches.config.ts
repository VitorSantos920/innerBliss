import { createStitches, globalCss, keyframes } from '@stitches/react';

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

const move = keyframes({
  from: {
    transform: 'translateY(0)',
  },

  to: {
    transform: 'translateY(-10px)',
    filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, .7))',
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

  'img, article svg': {
    animation: `${move} 2s alternate infinite ease-in-out`,
  },

  'article svg': { filter: 'none !important' },
})();
