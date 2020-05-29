/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.hasError = true;
      state.errorMessage = action.payload;
    },
    clearError: (state, action) => {
      state.hasError = false;
      state.errorMessage = action.payload;
    },
  },
  extraReducers: {},
});

export const { setError, clearError } = common.actions;

export default common.reducer;
