import { all } from 'redux-saga/effects';
import { watchFetchTransactions } from './transactions/sagas';
import watchFetchOptions from './options/sagas';

export default function* sagas() {
  yield all([watchFetchTransactions(), watchFetchOptions()]);
}
