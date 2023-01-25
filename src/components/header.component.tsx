import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo-image.png';
import { LogoImage } from './particles/logoImage.particle';
import { LogoName } from './particles/logoName.particle';
import { HeaderBar } from './particles/headerBar.particle';
const Header = () => {
  return (
    <HeaderBar
      position="static"
      sx={(theme) => ({ backgroundColor: theme.palette.background.default })}
      enableColorOnDark
    >
      <Container>
        <Toolbar
          sx={{ gap: '5%', alignItems: 'center', justifyContent: 'center' }}
        >
          <LogoName>Johkker</LogoName>
          <LogoImage src={logo} alt="Johkker" />
          <LogoName about="inverted">WebDev</LogoName>
        </Toolbar>
      </Container>
    </HeaderBar>
  );
};

export default Header;
