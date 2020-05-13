import { combineReducers } from '@reduxjs/toolkit';
import transactions from './transactions';
import options from './options';
import user from './user';
import accounts from './accounts';
import common from './common';

export default combineReducers({
  common,
  transactions,
  options,
  user,
  accounts,
});
