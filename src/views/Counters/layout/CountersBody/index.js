import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import NoCounters from '../../components/NoCounters';
import CounterList from '../../components/CounterList';
import Loader from '../../../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getCounters } from '../../../../redux/actions/CounterActions';

const CountersBody = ({ ...props }) => {
  const { counters } = props;
  const dispatch = useDispatch();
  const { setLoading, setSuccess } = useSelector(
    (state) => state.counterReducer,
  );

  useEffect(() => {
    dispatch(getCounters());
  }, []);
  return (
    <Box
      height="calc(100vh - 56px - 80px)"
      display="flex"
      flexDirection="column"
    >
      {!setLoading && setSuccess && counters.length === 0 && <NoCounters />}
      {!setLoading && setSuccess && counters.length !== 0 && (
        <CounterList counters={counters} />
      )}
      {setLoading && <Loader />}
    </Box>
  );
};

export default CountersBody;
