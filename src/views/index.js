import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { URL_WELCOME, URL_COUNTERS } from '../constants/routes';
import Welcome from './welcome';
import Counters from './Counters';
import MainTheme from '../theme/MuiTheme';

const App = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to={URL_WELCOME} />}
            />
            <Route exact path={URL_WELCOME} component={Welcome} />
            <Route exact path={URL_COUNTERS} component={Counters} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Box>
  );
};

export default App;
