import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CountersHeader from './layout/CountersHeader';
import CountersBody from './layout/CountersBody';
import CountersFooter from './layout/CountersFooter';

const Counters = () => {
  const counters = useSelector((state) => state.counterReducer.counters);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const selectedCounters = useSelector(
    (state) => state.selectedCounterReducer.selectedCounters,
  );

  return (
    <Box>
      <CountersHeader counters={counters} />
      <CountersBody
        counters={counters}
        openDialog={openCreateDialog}
        onClose={() => setOpenCreateDialog(false)}
        selectedCounters={selectedCounters}
      />
      <CountersFooter onDialogOpen={() => setOpenCreateDialog(true)} />
    </Box>
  );
};

export default Counters;
