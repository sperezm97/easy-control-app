import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reducer as network } from 'react-native-offline';
import transactions from './transactions';
import options from './options';
import user from './user';
import accounts from './accounts';
import common from './common';

const optionsPersistConfig = {
  key: 'options',
  storage,
  blacklist: ['transactionTypes', 'accountTypes'],
  whiteList: ['categories'],
  stateReconciler: autoMergeLevel2,
};

const transPersistConfig = {
  key: 'transactions',
  storage,
  stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2,
};

const accountsPersistConfig = {
  key: 'accounts',
  storage,
  stateReconciler: autoMergeLevel2,
};

export default combineReducers({
  common,
  network,
  transactions: persistReducer(transPersistConfig, transactions),
  options: persistReducer(optionsPersistConfig, options),
  user: persistReducer(userPersistConfig, user),
  accounts: persistReducer(accountsPersistConfig, accounts),
});
