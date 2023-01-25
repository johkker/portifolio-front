import {
  AppBar,
  CssBaseline,
  IconButton,
  Stack,
  ThemeProvider,
} from '@mui/material';
import { Header } from './components';
import { darkTheme, lightTheme } from './styles/muiTheme.style';
import { useState } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <CssBaseline />
      <IconButton
        sx={{ position: 'fixed', top: '0px', right: '5px' }}
        onClick={() => setDarkMode(!darkMode)}
      >
        <Brightness4Icon />
      </IconButton>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Stack sx={{ width: '100vw', height: '100vh' }}>
          <Header />;
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
