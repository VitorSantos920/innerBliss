import { styled } from '../../stitches.config';

export const Hero = styled('section', {
  alignItems: 'center',
  gap: '1rem',
  padding: '8rem 4rem 0',
  backgroundImage: "url('/hero/heroBg.png')",
  backgroundSize: 'cover',

  '.hero__content': {
    width: '85%',

    '.hero__title, .hero__description': { textTransform: 'capitalize' },

    '.hero__title': {
      color: '#2F241F',
      fontFamily: 'Merriweather Sans',
      fontSize: '3rem',
      fontWeight: '$med',
    },
  },

  '.hero__img': {
    width: '80%',

    img: { width: '100%' },
  },
});
