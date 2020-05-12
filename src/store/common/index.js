import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  first: false,
};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setFirstApp: (state, action) => {
      state.first = action.payload;
    },
  },
});

export const { setFirstApp } = common.actions;

export default common.reducer;
