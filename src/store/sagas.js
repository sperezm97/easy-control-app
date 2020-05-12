import { all } from 'redux-saga/effects';
import { watchFetchTransactions, watchCreateTransactions } from './transactions/sagas';
import watchFetchOptions from './options/sagas';
import { watchFetchUser, watchUpdateActiveAccount } from './user/sagas';
import { watchFetchAccounts, watchCreateAccounts } from './accounts/sagas';
import { watchFirstUser } from './common/sagas';

export default function* sagas() {
  yield all([
    watchFetchTransactions(),
    watchFetchOptions(),
    watchFetchUser(),
    watchFetchAccounts(),
    watchCreateTransactions(),
    watchCreateAccounts(),
    watchUpdateActiveAccount(),
    watchFirstUser(),
  ]);
}
