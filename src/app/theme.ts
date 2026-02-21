import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#007AFF', // Medical Blue
      light: '#4DA2FF',
      dark: '#0056B3',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00C853', // Mint Green
      light: '#5EFC82',
      dark: '#009624',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Roboto, Inter, system-ui, -apple-system, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
  },
});
