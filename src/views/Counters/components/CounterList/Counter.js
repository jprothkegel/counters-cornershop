import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import MessageDialog from '../../../../components/MessageDialog';
import { useCounterStyles } from './styles';
import {
  incrementCounter,
  decrementCounter,
} from '../../../../redux/actions/counterActions';
import {
  selectCounter,
  deselectCounter,
} from '../../../../redux/slices/selectedCounterSlice';
import PropTypes from 'prop-types';

const Counter = ({ ...props }) => {
  const { title, count, id } = props;
  const classes = useCounterStyles();
  const [selected, setSelected] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [incremented, setIncremented] = useState(false);
  const [decremented, setDecremented] = useState(false);
  const dispatch = useDispatch({ selected });
  const { incDecStatus } = useSelector((state) => state.counterReducer);

  const handleIncrement = () => {
    setIncremented(true);
    dispatch(incrementCounter(id));
  };

  const handleDecrement = () => {
    setDecremented(true);
    dispatch(decrementCounter(id));
  };

  const handleRetry = () => {
    if (incremented) dispatch(incrementCounter(id));
    if (decremented) dispatch(decrementCounter(id));
  };

  useEffect(() => {
    if (selected) dispatch(selectCounter({ id, title, count }));
    else dispatch(deselectCounter({ id, title, count }));
  }, [selected, id, title, count, dispatch]);

  useEffect(() => {
    if (
      (incDecStatus === 'errorIncrementing' ||
        incDecStatus === 'errorDecrementing') &&
      (incremented || decremented)
    )
      setOpenErrorDialog(true);
  }, [incDecStatus]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={selected ? classes.selectedContainer : classes.container}
    >
      <MessageDialog
        open={openErrorDialog}
        onClose={() => setOpenErrorDialog(false)}
        type="errorOnCreation"
        title={`Couldn't update "${title}" to ${count + 1}`}
        subtitle={'The internet connection appears to be offline.'}
        onRetry={handleRetry}
      />
      <Box
        padding="15px 4px 14px 15px"
        onClick={() => setSelected(!selected)}
        data-cy="selectBox"
      >
        <Typography className={classes.typo}>{title}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <IconButton
          onClick={handleDecrement}
          className={classes.button}
          disabled={count <= 0}
          data-cy="decrementButton"
        >
          <RemoveIcon />
        </IconButton>
        <Typography className={classes.number} data-cy="count">
          {count}
        </Typography>
        <IconButton
          onClick={handleIncrement}
          className={classes.button}
          data-cy="incrementButton"
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

Counter.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  id: PropTypes.string,
};

export default Counter;
