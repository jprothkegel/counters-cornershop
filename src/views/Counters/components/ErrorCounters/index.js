import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import PropTypes from 'prop-types';

const ErrorCounters = ({ ...props }) => {
  const { onRetry } = props;
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
      <Typography className={classes.title}>
        Couldn&apos;t load the counters
      </Typography>
      <Typography className={classes.subtitle}>
        The internet connection appears to be offline.
      </Typography>
      <Button
        variant="contained"
        className={classes.secondaryButton}
        onClick={() => onRetry()}
        data-cy="fetchRetryButton"
      >
        Retry
      </Button>
    </Box>
  );
};

ErrorCounters.propTypes = {
  onRetry: PropTypes.func,
};

export default ErrorCounters;
