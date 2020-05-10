import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = transactions.actions;

export default transactions.reducer;
