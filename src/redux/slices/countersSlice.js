import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCounters,
  createCounter,
  incrementCounter,
  decrementCounter,
  deleteCounter,
  refreshCounters,
} from '../actions/counterActions';

const countersSlice = createSlice({
  name: 'counters',
  initialState: {
    counters: [],
    fetchStatus: 'idle',
    createStatus: 'idle',
    incDecStatus: 'idle',
    delStatus: 'idle',
    error: null,
  },
  reducers: {
    resetCreation(state) {
      state.createStatus = 'idle';
    },
  },
  extraReducers: {
    [fetchCounters.pending]: (state) => {
      state.fetchStatus = 'loading';
    },
    [fetchCounters.fulfilled]: (state, action) => {
      state.fetchStatus = 'succeded';
      state.counters = action.payload;
    },
    [fetchCounters.rejected]: (state, action) => {
      state.fetchStatus = 'errorFetching';
      state.error = action.error.messsage;
    },
    [createCounter.pending]: (state) => {
      state.createStatus = 'creating';
    },
    [createCounter.fulfilled]: (state, action) => {
      state.createStatus = 'succeded';
      state.counters = state.counters.concat(action.payload);
    },
    [createCounter.rejected]: (state, action) => {
      state.createStatus = 'errorCreating';
      state.error = action.error.messsage;
    },
    [incrementCounter.pending]: (state) => {
      state.incDecStatus = 'performing';
    },
    [incrementCounter.fulfilled]: (state, action) => {
      state.incDecStatus = 'succeded';
      state.counters = state.counters.map((counter) =>
        counter.id === action.payload.id
          ? { ...counter, count: action.payload.count }
          : counter,
      );
    },
    [incrementCounter.rejected]: (state, action) => {
      state.incDecStatus = 'errorIncrementing';
      state.error = action.error.message;
    },
    [decrementCounter.pending]: (state) => {
      state.incDecStatus = 'performing';
    },
    [decrementCounter.fulfilled]: (state, action) => {
      state.incDecStatus = 'succeded';
      state.counters = state.counters.map((counter) =>
        counter.id === action.payload.id
          ? { ...counter, count: action.payload.count }
          : counter,
      );
    },
    [decrementCounter.rejected]: (state) => {
      state.incDecStatus = 'errorDecrementing';
    },
    [deleteCounter.pending]: (state) => {
      state.delStatus = 'deleting';
    },
    [deleteCounter.fulfilled]: (state, action) => {
      state.delStatus = 'succeded';
      state.counters = state.counters.filter(
        (counter) => counter.id !== action.payload,
      );
    },
    [deleteCounter.rejected]: (state, action) => {
      state.delStatus = 'errorDeleting';
      state.error = action.error.messsage;
    },
    [refreshCounters.pending]: (state) => {
      state.setStatus = 'refreshing';
    },
    [refreshCounters.fulfilled]: (state, action) => {
      state.setStatus = 'succeded';
      state.counters = action.payload;
    },
  },
});

export const { resetCreation } = countersSlice.actions;
export default countersSlice.reducer;
