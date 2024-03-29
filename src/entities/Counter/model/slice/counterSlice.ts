import { createSlice } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/Counter';

const initialState: CounterScheme = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { reducer: counterReducer, actions: counterActions } = counterSlice;
