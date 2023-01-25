import styled from 'styled-components';
import { Typography } from '@mui/material';

export const LogoName = styled.h1`
  font-weight: 800 !important;
  text-align: center;

  background: ${(props) =>
    props.about === 'inverted'
      ? 'linear-gradient(45deg, #FF00FF, #00FFFF, #FF00FF)'
      : 'linear-gradient(45deg, #00FFFF, #FF00FF, #00FFFF)'};
  background-size: 200% auto;

  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 8s linear infinite;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;
