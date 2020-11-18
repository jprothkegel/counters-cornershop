import { createMuiTheme } from '@material-ui/core';

const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF9500',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF3B30',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Avenir Next, sans-serif',
    fontSize: 17,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        fontSize: 17,
        textTransform: 'unset',
      },
    },
  },
});

export default MainTheme;
