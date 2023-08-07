import { styled } from '../../stitches.config';

export const Hero = styled('section', {
  alignItems: 'center',
  gap: '1rem',
  padding: '8rem 4rem 0',
  backgroundImage: "url('/homeBg.png') no-repeat center center",
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

    '.hero__description, .hero__btn': { fontFamily: '$poppins' },

    '.hero__description': {
      color: '$descriptions',
      fontWeight: '$lgt',
      lineHeight: '1.875rem',
      margin: '1rem 0 2rem',
    },
  },

  '.hero__img': {
    width: '80%',

    img: { width: '100%' },
  },
});
