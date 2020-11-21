import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import RefreshIcon from '../../../../components/Icon/Refresh';
import { useCounterHeaderStyles } from './styles';
import { countTimes } from '../../../../helpers/CounterHelper';

const CounterListHeader = ({ ...props }) => {
  const { counters, selectedQuantity } = props;
  const classes = useCounterHeaderStyles();
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
      <IconButton>
        <RefreshIcon />
      </IconButton>
    </Box>
  );
};

export default CounterListHeader;
