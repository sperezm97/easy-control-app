import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactionTypes: [],
  categories: [],
  accountTypes: [],
};

const options = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setTransactionTypes: (state, action) => {
      state.transactionTypes = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setAccountTypes: (state, action) => {
      state.accountTypes = action.payload;
    },
    clear: (state, action) => {
      state.transactionTypes = [];
      state.categories = [];
      state.accountTypes = [];
    },
  },
});

export const { setTransactionTypes, setAccountTypes, setCategories, clear } = options.actions;

export default options.reducer;
