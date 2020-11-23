import React from 'react';
import { Box } from '@material-ui/core';
import CounterListHeader from './CounterListHeader';
import Counter from './Counter';

const CounterList = ({ ...props }) => {
  const { counters, selectedCounters } = props;
  return (
    <Box padding="0px 10px" width="100%" maxWidth="600px">
      <CounterListHeader
        counters={counters}
        selectedQuantity={selectedCounters.length}
      />
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          title={counter.title}
          count={counter.count}
          id={counter.id}
        />
      ))}
    </Box>
  );
};

export default CounterList;
