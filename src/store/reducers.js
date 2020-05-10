import { combineReducers } from '@reduxjs/toolkit';
import transactions from './transactions';
import options from './options';

export default combineReducers({
  transactions,
  options,
});
