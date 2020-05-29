/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactionTypes: [
    {
      id: 'ks25ee53mu6Ja4V6VKPl',
      name: 'Expenses',
    },
    {
      id: 'rXhNf8qWxQooVeaZJ1Tb',
      name: 'Income',
    },
  ],
  categories: [],
  accountTypes: [
    {
      id: 'g4DNSM58PaRA5VR178hy',
      name: 'Saving',
    },
    {
      id: 'gKQeXPX5M3a590FF4NNn',
      name: 'Checking',
    },
  ],
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
    clear: state => {
      state.transactionTypes = [];
      state.categories = [];
      state.accountTypes = [];
    },
  },
});

export const { setTransactionTypes, setAccountTypes, setCategories, clear } = options.actions;

export default options.reducer;
