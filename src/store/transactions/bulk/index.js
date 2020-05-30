import { createSlice } from '@reduxjs/toolkit';
import { convertFromProxy } from '../../../utils';

const bulk = createSlice({
  name: 'transaction/bulk',
  initialState: [],
  reducers: {
    addTransSelection: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTransSelection: (state, action) => {
      const convert = convertFromProxy(state);
      const newResults = convert.filter(id => id != action.payload);
      return newResults;
    },
    clearBulkTrans: state => {
      let convert = convertFromProxy(state);
      convert = [];
      return convert;
    },
  },
});

export const { addTransSelection, removeTransSelection, clearBulkTrans } = bulk.actions;

export default bulk.reducer;
