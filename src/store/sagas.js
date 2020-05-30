import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import { watchFetchTransactions, watchCreateTransactions } from './transactions/data/sagas';
import { watchBulkDelete } from './transactions/bulk/sagas';
import watchFetchOptions from './options/sagas';
import { watchFetchUser, watchUpdateActiveAccount, watchCreateUser } from './user/sagas';
import { watchFetchAccounts, watchCreateAccounts } from './accounts/sagas';
import { watchFirstUser } from './common/sagas';

export default function* sagas() {
  yield all([
    fork(watchFetchTransactions),
    fork(watchFetchOptions),
    fork(watchFetchUser),
    fork(watchFetchAccounts),
    fork(watchCreateTransactions),
    fork(watchCreateAccounts),
    fork(watchUpdateActiveAccount),
    fork(watchFirstUser),
    fork(watchCreateUser),
    fork(networkSaga, { pingInterval: 20000 }),
    fork(watchBulkDelete),
  ]);
}
