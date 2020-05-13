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
    setNewTransaction: (state, action) => {
      state.data.unshift(action.payload);
    },
  },
});

export const { setData, setNewTransaction } = transactions.actions;

export default transactions.reducer;
