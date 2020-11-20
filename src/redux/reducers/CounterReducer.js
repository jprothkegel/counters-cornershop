import {
  COUNTERS_ERROR,
  COUNTERS_LOADING,
  COUNTERS_SET,
} from '../types/CounterTypes';

const initialState = {
  counters: [],
  setError: false,
  setLoading: false,
  setSuccess: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTERS_SET:
      return {
        ...state,
        setLoading: false,
        setSuccess: true,
        counters: action.counters,
      };
    case COUNTERS_LOADING:
      return { ...state, setLoading: true };
    case COUNTERS_ERROR:
      return { ...state, laoding: false, setError: true };
    default:
      return state;
  }
};

export default counterReducer;
