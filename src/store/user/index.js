import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    activeAccountId: '',
  },
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },

    updateActiveAccount: (state, action) => {
      state.data.activeAccountId = action.payload;
    },
  },
});

export const { setData, updateActiveAccount } = user.actions;

export default user.reducer;
