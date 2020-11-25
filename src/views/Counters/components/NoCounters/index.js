import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import PropTypes from 'prop-types';

const NoCounters = ({ ...props }) => {
  const { search } = props;
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
      {!search && (
        <React.Fragment>
          <Typography className={classes.title}> No counters yet </Typography>
          <Typography className={classes.subtitle}>
            {' '}
            “When I started counting my blessings, my whole life turned around.”{' '}
          </Typography>
          <Typography className={classes.subtitle}>—Willie Nelson</Typography>
        </React.Fragment>
      )}
      {search && <Typography>No results</Typography>}
    </Box>
  );
};

NoCounters.propTypes = {
  search: PropTypes.bool,
};

export default NoCounters;
