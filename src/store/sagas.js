import { all } from 'redux-saga/effects';
import { watchFetchTransactions, watchCreateTransactions } from './transactions/sagas';
import watchFetchOptions from './options/sagas';
import { watchFetchUser } from './user/sagas';
import { watchFetchAccounts } from './accounts/sagas';

export default function* sagas() {
  yield all([
    watchFetchTransactions(),
    watchFetchOptions(),
    watchFetchUser(),
    watchFetchAccounts(),
    watchCreateTransactions(),
  ]);
}
