import styled from 'styled-components';
import { AppBar } from '@mui/material';

export const HeaderBar = styled(AppBar)`
  --borderWidth: 3px;
  background: #1d1f20;
  position: relative;
  border-radius: var(--borderWidth);

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
