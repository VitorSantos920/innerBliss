import { styled } from '../../../stitches.config';

export const HeaderContainer = styled('header', {
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  top: 0,
  maxWidth: 1366,
  width: '100%',
  padding: '2rem 4rem',
  zIndex: 2,

  '.header__logo': {
    fontFamily: '$merriweather',
    fontSize: '1.5rem',
  },

  '.header__menu-items': {
    alignItems: 'center',
    fontFamily: '$poppins',
    gap: '2rem',

    'li.header__item--active': { fontWeight: '$bd' },

    'li > a': {
      position: 'relative',

      '&::before': {
        content: '',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 2,
        width: 0,
        backgroundColor: '$darkGreen',
        transition: '.5s',
      },

      '&:hover': {
        color: '$darkGreen',

        '&::before': { width: '100%' },
      },
    },

    '> a': {
      marginLeft: '1.5rem',

      '.header__btn': {
        backgroundColor: '$darkGreen',
        cursor: 'pointer',
        padding: '1rem 2rem',
        fontWeight: '$med',
        border: 'none',
        borderRadius: '0.625rem',
        color: '#fff',

        '&:hover': { opacity: '0.8' },
      },
    },
  },
});
