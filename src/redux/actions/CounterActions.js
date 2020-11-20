import {
  COUNTERS_ERROR,
  COUNTERS_LOADING,
  COUNTERS_SET,
} from '../types/CounterTypes';
import { callGetCounters } from '../../services/CounterService';

const setCounters = (counters) => {
  return { type: COUNTERS_SET, counters };
};

const errorCounters = () => {
  return { type: COUNTERS_ERROR };
};

const gettingCounters = () => {
  return { type: COUNTERS_LOADING };
};

export const getCounters = () => {
  return async (dispatch) => {
    dispatch(gettingCounters());
    try {
      const res = await callGetCounters();
      if (res.status !== 200) dispatch(errorCounters());
      else dispatch(setCounters(res.data));
    } catch (err) {
      dispatch(errorCounters());
    }
  };
};
