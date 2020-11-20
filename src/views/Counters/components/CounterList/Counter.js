import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useCounterStyles } from './styles';

const Counter = ({ ...props }) => {
  const { title, count } = props;
  const classes = useCounterStyles();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Box padding="15px 4px 14px 15px">
        <Typography className={classes.typo}>{title}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <IconButton className={classes.button}>
          <RemoveIcon />
        </IconButton>
        <Typography className={classes.number}>{count}</Typography>
        <IconButton className={classes.button}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;
