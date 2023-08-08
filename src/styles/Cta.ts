import { styled } from '@stitches/react';

export const Cta = styled('section', {
  padding: '8rem 4rem 0',
  alignItems: 'center',
  gap: '4rem',

  '.cta__content': { width: '85%' },

  '.cta__img': {
    width: '70%',

    img: { width: '100%' },
  },
});
