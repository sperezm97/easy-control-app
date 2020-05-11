import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = user.actions;

export default user.reducer;
