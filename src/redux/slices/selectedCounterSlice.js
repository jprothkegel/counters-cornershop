import { createSlice } from '@reduxjs/toolkit';

const selectedCounterSlice = createSlice({
  name: 'selectedCounters',
  initialState: {
    selectedCounters: [],
  },
  reducers: {
    selectCounter(state, action) {
      state.selectedCounters = state.selectedCounters.concat(action.payload);
    },
    deselectCounter(state, action) {
      state.selectedCounters = state.selectedCounters.filter(
        (counter) => counter.id !== action.payload.id,
      );
    },
  },
});

export const { selectCounter, deselectCounter } = selectedCounterSlice.actions;
export default selectedCounterSlice.reducer;
