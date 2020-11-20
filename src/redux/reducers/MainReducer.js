import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

const MainReducer = combineReducers({
  counterReducer,
});

export default MainReducer;
