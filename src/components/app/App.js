import React from 'react';
import store from "../../store";
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Routes from "../../routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ['"Proxima Nova"', 'Georgia', 'sans-serif'].join(','),
    },
    palette: {
        default: {
            contrastText: '#FF0000',
        },
        primary: {
            main: '#14b597',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ff7175',
            contrastText: '#fff',
        },
        error: {
            main: '#ff7175',
        },
        warning: {
            main: '#f3ad3d',
        },
        success: {
            main: '#14b597',
            contrastText: '#fff',
        },
        info: {
            main: '#4285f4',
            contrastText: '#fff',
        },
    },
});

function App() {
  return (
      <Provider store={store}>
          <CssBaseline>
              <MuiThemeProvider theme={theme}>
                <Routes />
              </MuiThemeProvider>
          </CssBaseline>
      </Provider>
  );
}

export default App;
