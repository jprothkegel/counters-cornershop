import React from 'react';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CountersHeader from './layout/CountersHeader';
import CountersBody from './layout/CountersBody';
import CountersFooter from './layout/CountersFooter';

const Counters = () => {
  const counters = useSelector((state) => state.counterReducer.counters);
  return (
    <Box>
      <CountersHeader counters={counters} />
      <CountersBody counters={counters} />
      <CountersFooter />
    </Box>
  );
};

export default Counters;
