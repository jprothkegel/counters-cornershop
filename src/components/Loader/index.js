import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';

const Loader = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <div className={classes.wrapper}>
        <div className={classes.littleBall} />
        <div className={classes.middleBall} />
        <div className={classes.bigBall} />
      </div>
    </Box>
  );
};

export default Loader;
