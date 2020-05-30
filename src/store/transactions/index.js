import { combineReducers } from '@reduxjs/toolkit';
import data from './data';
import bulk from './bulk';

export default combineReducers({
  data,
  bulk,
});
