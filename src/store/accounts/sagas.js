import { takeLatest, call, put, select } from 'redux-saga/effects';
import { accountService } from '../../services';
import { formatDataFromFb } from '../../utils';
import { getActiveAccountId } from '../user/selectors';

function* fetchAccounts() {
  try {
    const data = formatDataFromFb(yield call(accountService.fetchAll, '5TaeP1gaRsuoiDVXApqF'));
    yield put({ type: 'accounts/setData', payload: data });
    yield call(fetchActiveAccount);
  } catch (error) {
    console.log(error);
  }
}

function* fetchActiveAccount() {
  try {
    const activeAccountId = yield select(getActiveAccountId);
    yield put({ type: 'accounts/setActiveAccountData', payload: activeAccountId });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchAccounts() {
  yield takeLatest('accounts/fetch', fetchAccounts);
}
