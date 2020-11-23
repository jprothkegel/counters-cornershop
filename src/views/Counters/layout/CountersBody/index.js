import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import NoCounters from '../../components/NoCounters';
import CounterList from '../../components/CounterList';
import Loader from '../../../../components/Loader';
import CreateCounterDialog from '../../../../components/CreateCounterDialog';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCounters } from '../../../../redux/actions/counterActions';

const CountersBody = ({ ...props }) => {
  const {
    counters,
    openDialog,
    onClose,
    selectedCounters,
    search,
    searchFocus,
  } = props;
  const dispatch = useDispatch();
  const counterStatus = useSelector((state) => state.counterReducer.status);
  // const error = useSelector((state) => state.counterReducer.error);

  useEffect(() => {
    if (counterStatus === 'idle') dispatch(fetchCounters());
  }, [counterStatus, dispatch]);

  return (
    <Box
      height="calc(100vh - 56px - 80px)"
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      style={{ opacity: searchFocus ? '0.5' : '1' }}
    >
      {counterStatus === 'succeded' && counters.length === 0 && (
        <NoCounters search={search} />
      )}
      {counterStatus === 'succeded' && counters.length !== 0 && (
        <CounterList counters={counters} selectedCounters={selectedCounters} />
      )}
      {counterStatus === 'loading' && <Loader />}
      <CreateCounterDialog open={openDialog} onClose={() => onClose()} />
    </Box>
  );
};

export default CountersBody;
