import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { setFirstApp } = common.actions;

export default common.reducer;
