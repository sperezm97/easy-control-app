import { combineReducers } from '@reduxjs/toolkit';
import transactions from './transactions';
import options from './options';
import user from './user';
import accounts from './accounts';

export default combineReducers({
  transactions,
  options,
  user,
  accounts,
});
