import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },

    updateAccount: (state, action) => {
      state.data.activeAccount = action.payload;
    },
  },
});

export const { setData, updateAccount } = user.actions;

export default user.reducer;
