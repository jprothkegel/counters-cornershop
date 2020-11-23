import React from 'react';
import { Box } from '@material-ui/core';
import CounterListHeader from './CounterListHeader';
import Counter from './Counter';

const CounterList = ({ ...props }) => {
  const { counters, selectedCounters, status } = props;
  return (
    <Box padding="0px 10px" width="100%" maxWidth="600px">
      <CounterListHeader
        counters={counters}
        selectedQuantity={selectedCounters.length}
        status={status}
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
