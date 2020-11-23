import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useCounterStyles } from './styles';
import {
  incrementCounter,
  decrementCounter,
} from '../../../../redux/actions/counterActions';
import {
  selectCounter,
  deselectCounter,
} from '../../../../redux/slices/selectedCounterSlice';

const Counter = ({ ...props }) => {
  const { title, count, id } = props;
  const classes = useCounterStyles();
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch({ selected });

  useEffect(() => {
    if (selected) dispatch(selectCounter({ id, title, count }));
    else dispatch(deselectCounter({ id, title, count }));
  }, [selected, id, title, count, dispatch]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={selected ? classes.selectedContainer : classes.container}
    >
      <Box padding="15px 4px 14px 15px" onClick={() => setSelected(!selected)}>
        <Typography className={classes.typo}>{title}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <IconButton
          onClick={() => dispatch(decrementCounter(id))}
          className={classes.button}
          disabled={count <= 0}
        >
          <RemoveIcon />
        </IconButton>
        <Typography className={classes.number}>{count}</Typography>
        <IconButton
          onClick={() => dispatch(incrementCounter(id))}
          className={classes.button}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;
