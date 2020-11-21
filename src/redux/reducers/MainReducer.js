import { combineReducers } from 'redux';
import counterReducer from '../slices/countersSlice';
import selectedCounterReducer from '../slices/selectedCounterSlice';

const MainReducer = combineReducers({
  counterReducer,
  selectedCounterReducer,
});

export default MainReducer;
