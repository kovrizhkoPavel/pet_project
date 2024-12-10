import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DogsScheme } from '../types/dogsScheme';

const initialState: DogsScheme = {

};

export const dogsSlice = createSlice({
  name: 'dogsSlice',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: dogsActions } = dogsSlice;
export const { reducer: dogsReducer } = dogsSlice;
