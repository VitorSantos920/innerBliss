import { styled } from '../../../stitches.config';

export const ButtonContainer = styled('button', {
  backgroundColor: '$darkGreen',
  cursor: 'pointer',
  padding: '1rem 2rem',
  fontWeight: '$med',
  border: 'none',
  borderRadius: '0.625rem',
  color: '#fff',

  '&:hover': { opacity: '0.8' },
});
