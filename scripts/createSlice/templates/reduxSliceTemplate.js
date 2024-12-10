const { makeFirstCharUpperCase } = require('../utils');

module.exports = (sliceName) => {
  const typeName = `${makeFirstCharUpperCase(sliceName)}Scheme`;

  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { ${typeName} } from '../types/${typeName};
  
  const initialState: ${typeName} = {
  
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
}
