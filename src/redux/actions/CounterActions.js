import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  callGetCounters,
  callCreateCounter,
  callIncCounter,
  callDecCounter,
  callDelCounter,
} from '../../services/CounterService';

export const fetchCounters = createAsyncThunk(
  'counters/fetchCounters',
  async () => {
    const response = await callGetCounters();
    return response.data;
  },
);

export const createCounter = createAsyncThunk(
  'counters/createCounter',
  async (title) => {
    const response = await callCreateCounter(title);
    return response.data;
  },
);

export const incrementCounter = createAsyncThunk(
  'counters/incrementCounter',
  async (id) => {
    const response = await callIncCounter(id);
    return response.data;
  },
);

export const decrementCounter = createAsyncThunk(
  'counters/decrementCounter',
  async (id) => {
    const response = await callDecCounter(id);
    return response.data;
  },
);

export const deleteCounter = createAsyncThunk(
  'counters/deleteCounter',
  async (id) => {
    const response = await callDelCounter(id);
    return response.data;
  },
);

export const refreshCounters = createAsyncThunk(
  'counters/refreshCounters',
  async () => {
    const response = await callGetCounters();
    return response.data;
  },
);
