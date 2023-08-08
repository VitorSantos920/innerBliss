import { styled } from '../../stitches.config';

export const About = styled('section', {
  alignItems: 'center',
  gap: '5rem',
  padding: '8rem 4rem 0',
  background: "url('/about/aboutBg.png') center",
  backgroundSize: 'cover',

  '.about__content': {
    width: '85%',

    '.about__description': {
      fontFamily: '$poppins',
      color: '$descriptions',
      fontWeight: '$lgt',
      lineHeight: '1.5rem',
      margin: '1rem 0 2rem',
      textTransform: 'capitalize',
    },
  },

  '.about__img': {
    width: '80%',

    img: { width: '100%' },
  },
});
