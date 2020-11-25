import { createMuiTheme } from '@material-ui/core';

const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF9500',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#FF9500',
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
    MuiInputBase: {
      root: {
        height: 48,
        fontSize: 16,
        boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
        '&$disabled': {
          color: 'rgba(136, 139, 144, 0.3)',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
        '&$disabled $notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.02)',
        },
      },
      notchedOutline: {
        borderColor: 'rgba(0, 0, 0, 0.02)',
        borderWidth: 1,
      },
    },
    PrivateNotchedOutline: {
      root: {
        borderColor: 'rgba(0, 0, 0, 0.02)',
        borderWidth: 10,
      },
    },
    MuiDialog: {
      paperFullScreen: {
        borderRadius: '16px 16px 0px 0px',
        marginTop: 15,
      },
      paperScrollPaper: {
        borderRadius: 16,
      },
    },
    MuiTooltip: {
      tooltip: {
        color: '#000',
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 24px 38px rgba(0, 0, 0, 0.14)',
      },
      arrow: {
        color: '#FAFAFA',
      },
    },
  },
});

export default MainTheme;
