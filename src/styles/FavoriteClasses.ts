import { styled } from '@stitches/react';

export const FavoriteClasses = styled('section', {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '8rem 4rem 0px',

  '.classes__subtitle': { textAlign: 'center', marginBottom: '1rem' },

  '.classes__class-items': {
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
});
