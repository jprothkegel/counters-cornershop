import React from 'react';
import { Box, Typography, IconButton, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import RefreshIcon from '../../../../components/Icon/Refresh';
import { useCounterHeaderStyles } from './styles';
import { countTimes } from '../../../../helpers/CounterHelper';
import { refreshCounters } from '../../../../redux/actions/counterActions';
import PropTypes from 'prop-types';

const CounterListHeader = ({ ...props }) => {
  const { counters, selectedQuantity, status } = props;
  const classes = useCounterHeaderStyles();
  const dispatch = useDispatch();
  return (
    <Box display="flex" alignItems="center" className={classes.container}>
      {selectedQuantity > 0 && (
        <Typography className={classes.selectedTypo}>
          {selectedQuantity} selected{' '}
        </Typography>
      )}
      {selectedQuantity <= 0 && (
        <React.Fragment>
          <Typography className={classes.mainTypo}>
            {counters.length === 1
              ? `${counters.length} item`
              : `${counters.length} items`}
          </Typography>
          <Typography className={classes.subTypo}>
            {countTimes(counters)}{' '}
          </Typography>
        </React.Fragment>
      )}
      {status !== 'refreshing' && (
        <IconButton onClick={() => dispatch(refreshCounters())}>
          <RefreshIcon fill="#4A4A4A" />
        </IconButton>
      )}
      {status === 'refreshing' && (
        <Button color="primary">
          <RefreshIcon fill="#FF9500" /> Refreshing ...
        </Button>
      )}
    </Box>
  );
};

CounterListHeader.propTypes = {
  counters: PropTypes.array,
  selectedQuantity: PropTypes.number,
  status: PropTypes.string,
};

export default CounterListHeader;
