import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import NoCounters from '../../components/NoCounters';
import CounterList from '../../components/CounterList';
import ErrorCounters from '../../components/ErrorCounters';
import Loader from '../../../../components/Loader';
import CreateCounterDialog from '../../../../components/CreateCounterDialog';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCounters } from '../../../../redux/actions/CounterActions';
import PropTypes from 'prop-types';

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
  const { fetchStatus } = useSelector((state) => state.counterReducer);

  useEffect(() => {
    if (fetchStatus === 'idle') dispatch(fetchCounters());
  }, [fetchStatus, dispatch]);

  return (
    <Box
      height="calc(100vh - 56px - 80px)"
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      style={{ opacity: searchFocus ? '0.5' : '1' }}
    >
      {fetchStatus === 'errorFetching' && (
        <ErrorCounters onRetry={() => dispatch(fetchCounters())} />
      )}
      {fetchStatus === 'succeded' && counters.length === 0 && (
        <NoCounters search={search} />
      )}
      {(fetchStatus === 'succeded' || fetchStatus === 'refreshing') &&
        counters.length !== 0 && (
          <CounterList
            counters={counters}
            selectedCounters={selectedCounters}
            status={fetchStatus}
          />
        )}
      {fetchStatus === 'loading' && <Loader />}
      <CreateCounterDialog open={openDialog} onClose={() => onClose()} />
    </Box>
  );
};

CountersBody.propTypes = {
  counters: PropTypes.array,
  openDialog: PropTypes.bool,
  onClose: PropTypes.func,
  selectedCounters: PropTypes.array,
  search: PropTypes.bool,
  searchFocus: PropTypes.bool,
};

export default CountersBody;
