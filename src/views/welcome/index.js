import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import Logo from '../../components/Icon/Logo';
import useStyles from './styles';

const Welcome = () => {
  const classes = useStyles();
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
        <Button variant="contained" color="primary">
          Get started
        </Button>
      </Box>
    </Container>
  );
};

export default Welcome;
