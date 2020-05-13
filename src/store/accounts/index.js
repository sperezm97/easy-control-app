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
    setNewAccount: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: {
    'user/updateActiveAccount': (state, action) => {
      state.activeAccount = state.data.find(ac => ac.id == action.payload);
    },
    'transactions/setNewTransaction': (state, action) => {
      const isExpenses = action.payload.transactionTypeId === 'ks25ee53mu6Ja4V6VKPl';

      if (isExpenses) {
        const totalAmount = state.activeAccount.totalAmount - action.payload.price;
        const totalExpenses = state.activeAccount.totalExpenses + action.payload.price;
        state.activeAccount = {
          ...state.activeAccount,
          totalAmount,
          totalExpenses,
        };
      } else {
        const totalAmount = state.activeAccount.totalAmount + action.payload.price;
        const totalIncome = state.activeAccount.totalIncome + action.payload.price;
        state.activeAccount = {
          ...state.activeAccount,
          totalAmount,
          totalIncome,
        };
      }
    },
  },
});

export const { setData, setActiveAccountData } = accounts.actions;

export default accounts.reducer;
