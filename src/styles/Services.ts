import { styled } from '../../stitches.config';

export const Services = styled('section', {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '8rem 4rem 0px',
  textAlign: 'center',
  background: 'url(/service/serviceBg.png) center',
  backgroundSize: 'contain',

  '.services__subtitle': {
    marginBottom: '1rem',
  },

  '.services__service-items': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
});
