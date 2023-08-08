import { styled } from '@stitches/react';

export const ClassContainer = styled('article', {
  alignItems: 'center',
  gap: '1.5rem',
  borderRadius: '.5rem',
  background: 'rgba(170, 180, 135, 0.12)',
  width: '45%',
  padding: '1.3rem',
  flexGrow: 1,
  minWidth: 403,

  '.class__title': { marginTop: 0 },

  '.class__description': { marginBottom: 0 },
});
