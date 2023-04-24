import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ConfigState {
  searchFocus: boolean;
}

const initialState: ConfigState = {
  searchFocus: true,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    toFalse: (state) => {
      state.searchFocus = false;
    },
    toTrue: (state) => {
      state.searchFocus = true;
    },
  },
});

export const { toFalse, toTrue } = configSlice.actions;

export default configSlice.reducer;
