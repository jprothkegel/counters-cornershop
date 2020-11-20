import React from 'react';
import { Box } from '@material-ui/core';
import CounterListHeader from './CounterListHeader';
import Counter from './Counter';

const CounterList = ({ ...props }) => {
  const { counters } = props;
  return (
    <Box maxWidth="600px" padding="0px 10px">
      <CounterListHeader counters={counters} />
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
