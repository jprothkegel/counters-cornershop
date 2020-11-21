import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import MainReducer from '../reducers/MainReducer';

const middleware = [thunk];

export const store = configureStore({
  reducer: MainReducer,
  middleware: [...middleware],
});
