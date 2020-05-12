import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeAccount: {
    name: '',
    totalAmount: 0,
    totalExpenses: 0,
    totalIncome: 0,
    typeAccountId: '',
    userId: '',
  },
  data: [],
};

const accounts = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setActiveAccountData: (state, action) => {
      state.activeAccount = state.data.find(ac => ac.id == action.payload);
    },
  },
  extraReducers: {
    'user/updateActiveAccount': (state, action) => {
      state.activeAccount = state.data.find(ac => ac.id == action.payload);
    },
  },
});

export const { setData, setActiveAccountData } = accounts.actions;

export default accounts.reducer;
