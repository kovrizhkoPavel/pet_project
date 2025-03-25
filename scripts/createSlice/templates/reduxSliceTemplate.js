const { makeFirstCharUpperCase } = require('../utils');

module.exports = (sliceName) =>
  `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${makeFirstCharUpperCase(sliceName)}Scheme } from '../types/${sliceName}Scheme';

const initialState: ${makeFirstCharUpperCase(sliceName)}Scheme = {

};

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}Slice',
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

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;
`;
