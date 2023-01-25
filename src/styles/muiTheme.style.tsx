import { PaletteMode, createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'light'
        ? {
            main: '#00FFFF',
            light: '#E0FFFF',
            dark: '#00008B',
          }
        : {
            main: '#00008B',
            light: '#E0FFFF',
            dark: '#00FFFF',
          }),
    },
    secondary: {
      ...(mode === 'light'
        ? {
            main: '#FF00FF',
            light: '#FFB6C1',
            dark: '#8B008B',
          }
        : {
            main: '#8B008B',
            light: '#FFB6C1',
            dark: '#FF00FF',
          }),
    },
    error: {
      main: '#8B0000',
    },
    warning: {
      main: '#ffa600',
    },
    text: {
      ...(mode === 'light'
        ? {
            primary: '#000000',
            secondary: '#999999',
          }
        : {
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
          }),
    },
    background: {
      ...(mode === 'light'
        ? {
            default: '#FFFFFF',
            paper: '#fafafa',
          }
        : {
            default: '#1d1f20',
            paper: '#333333',
          }),
    },
    action: {
      ...(mode === 'light'
        ? {
            selected: '#E0FFFF',
            hover: '#E0FFFF',
          }
        : {
            selected: '#53008b',
            hover: '#53008B',
          }),
    },
    success: {
      ...(mode === 'light'
        ? {
            main: '#73ff00',
          }
        : {
            main: '#00f329',
          }),
    },
  },
  typography: {
    mode,
    h1: {
      ...(mode === 'light'
        ? {
            color: '#FF00FF',
          }
        : {
            color: '#8B008B',
          }),
    },
    h2: {
      ...(mode === 'light'
        ? {
            color: '#FF00FF',
          }
        : {
            color: '#8B008B',
          }),
    },
    h3: {
      ...(mode === 'light'
        ? {
            color: '#FF00FF',
          }
        : {
            color: '#8B008B',
          }),
    },
    h4: {
      ...(mode === 'light'
        ? {
            color: '#FF00FF',
          }
        : {
            color: '#8B008B',
          }),
    },
    h5: {
      ...(mode === 'light'
        ? {
            color: '#FF00FF',
          }
        : {
            color: '#8B008B',
          }),
    },
    h6: {
      ...(mode === 'light'
        ? {
            color: '#FF00FF',
          }
        : {
            color: '#8B008B',
          }),
    },
    subtitle1: {
      ...(mode === 'light'
        ? {
            color: '#FF69B4',
          }
        : {
            color: '#FF69B4',
          }),
    },
    subtitle2: {
      ...(mode === 'light'
        ? {
            color: '#87CEFA',
          }
        : {
            color: '#87CEFA',
          }),
    },
  },
});

const lightTheme = createTheme(getDesignTokens('light'));
const darkTheme = createTheme(getDesignTokens('dark'));

export { lightTheme, darkTheme };
