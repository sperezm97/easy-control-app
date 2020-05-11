import { combineReducers } from '@reduxjs/toolkit';
import transactions from './transactions';
import options from './options';
import user from './user';

export default combineReducers({
  transactions,
  options,
  user,
});
