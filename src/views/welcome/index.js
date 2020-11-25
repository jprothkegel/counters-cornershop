import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/Icon/Logo';
import useStyles from './styles';
import { URL_COUNTERS } from '../../constants/routes';

const Welcome = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleGetStarted = () => {
    history.push(URL_COUNTERS);
  };

  return (
    <Container className={classes.container}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="100%"
        alignItems="center"
      >
        <Logo />
        <div>
          <Typography className={classes.title}>Welcome to counters</Typography>
          <Typography className={classes.description}>
            Capture cups of lattes, frapuccinos, or anything else that can be
            counted.
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGetStarted}
          data-cy="getStarted"
        >
          Get started
        </Button>
      </Box>
    </Container>
  );
};

export default Welcome;
