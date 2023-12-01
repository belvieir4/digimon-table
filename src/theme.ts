import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
        },
        html: {
          minHeight: '100vh',
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#3F51B5',
    },
    secondary: {
      main: '#FF5722',
    },
    background: {
      default: '#EEE',
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
