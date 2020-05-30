import { createSlice } from '@reduxjs/toolkit';
import { clearBulkTrans } from '../bulk';

const data = createSlice({
  name: 'transactions/data',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
      return state;
    },
    setNewTransaction: (state, action) => {
      state.unshift(action.payload);
      return state;
    },
    clearData: state => {
      state.splice();
      return state;
    },
  },
  extraReducers: {
    [clearBulkTrans.type]: (state, action) => state.filter(tb => !action.payload.includes(tb.id)),
  },
});

export const { setData, setNewTransaction, clearData } = data.actions;

export default data.reducer;
