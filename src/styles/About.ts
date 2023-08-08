import { styled } from '../../stitches.config';

export const About = styled('section', {
  alignItems: 'center',
  gap: '5rem',
  padding: '8rem 4rem 0',
  background: "url('/about/aboutBg.png') center",
  backgroundSize: 'cover',

  '.about__content': {
    width: '85%',

    '.about__description': { lineHeight: '1.5rem' },
  },

  '.about__img': {
    width: '80%',

    img: { width: '100%' },
  },
});
