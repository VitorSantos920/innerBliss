import { styled } from '@stitches/react';

export const ServiceContainer = styled('article', {
  backgroundColor: 'rgba(170, 180, 135, 0.12)',
  textAlign: 'center',
  borderRadius: '1.25rem',
  width: '30%',
  padding: '1rem',
  flexGrow: 1,
  minWidth: 260,

  '.service__description': { margin: '1rem 0 0' },
});

export const ServiceTitle = styled('h4', {
  fontFamily: '$merriweather',
  fontSize: '1.25rem',
  marginTop: '.5rem',
});
