import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

const NoCounters = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      flexGrow={1}
      p={6}
    >
      <Typography className={classes.title}> No counters yet </Typography>
      <Typography className={classes.subtitle}>
        {' '}
        “When I started counting my blessings, my whole life turned around.”{' '}
      </Typography>
      <Typography className={classes.subtitle}>—Willie Nelson</Typography>
    </Box>
  );
};

export default NoCounters;
