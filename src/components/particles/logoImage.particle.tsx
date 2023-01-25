import styled from 'styled-components';

export const LogoImage = styled.img`
  width: 3rem;
  height: 3rem;

  animation: spin 8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 480px) {
    width: 4rem;
    height: 4rem;
  }
  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
  @media (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;
