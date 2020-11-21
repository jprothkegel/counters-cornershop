import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCounters,
  createCounter,
  incrementCounter,
  decrementCounter,
  deleteCounter,
} from '../actions/counterActions';

const countersSlice = createSlice({
  name: 'counters',
  initialState: {
    counters: [],
    status: 'idle',
    error: null,
  },
  extraReducers: {
    [fetchCounters.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCounters.fulfilled]: (state, action) => {
      state.status = 'succeded';
      state.counters = state.counters.concat(action.payload);
    },
    [fetchCounters.rejected]: (state, action) => {
      state.status = 'errorFetching';
      state.error = action.error.messsage;
    },
    [createCounter.pending]: (state) => {
      state.status = 'creating';
    },
    [createCounter.fulfilled]: (state, action) => {
      state.status = 'succeded';
      state.counters = state.counters.concat(action.payload);
    },
    [createCounter.rejected]: (state, action) => {
      state.status = 'errorCreating';
      state.error = action.error.messsage;
    },
    [incrementCounter.fulfilled]: (state, action) => {
      state.status = 'succeded';
      state.counters = state.counters.map((counter) =>
        counter.id === action.payload.id
          ? { ...counter, count: action.payload.count }
          : counter,
      );
    },
    [incrementCounter.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    },
    [decrementCounter.fulfilled]: (state, action) => {
      state.status = 'succeded';
      state.counters = state.counters.map((counter) =>
        counter.id === action.payload.id
          ? { ...counter, count: action.payload.count }
          : counter,
      );
    },
    [deleteCounter.fulfilled]: (state, action) => {
      state.status = 'succeded';
      state.counters = state.counters.filter(
        (counter) => counter.id !== action.payload,
      );
    },
    [deleteCounter.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.error.messsage;
    },
  },
});

export default countersSlice.reducer;
