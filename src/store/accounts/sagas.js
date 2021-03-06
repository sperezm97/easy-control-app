import { takeLatest, call, put, select, take } from 'redux-saga/effects';
import { accountService } from '../../services';
import { formatDataFromFb } from '../../utils';
import { getActiveAccountId, getUserId } from '../user/selectors';
import { setError } from '../common';
import mapperAccounts from '../../services/mappers/accounts';

function* fetchAccounts() {
  yield take('user/setData');
  const userId = yield select(getUserId);

  try {
    const formatData = formatDataFromFb(yield call(accountService.fetchAll, userId));
    if (formatData.length > 0) {
      const mapperData = mapperAccounts.fromFirestore(formatData);
      yield put({ type: 'accounts/setData', payload: mapperData });
      yield call(fetchActiveAccount);
    }
  } catch (error) {
    yield put(setError(error));
  }
}

function* fetchActiveAccount() {
  try {
    const activeAccountId = yield select(getActiveAccountId);
    yield put({ type: 'accounts/setActiveAccountData', payload: activeAccountId });
  } catch (error) {
    yield put(setError(error));
  }
}

function* createAccount(payload) {
  try {
    const userId = yield select(getUserId);

    const body = {
      name: payload.values.name,
      typeAccountId: payload.values.typeAccountId,
      totalAmount: +payload.values.totalAmount,
      userId,
      totalIncome: +payload.values.totalAmount,
      totalExpenses: 0,
    };

    const account = yield call(accountService.create, body);
    yield put({ type: 'accounts/setNewAccount', payload: { id: account.id, ...body } });
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchFetchAccounts() {
  yield takeLatest('accounts/fetch', fetchAccounts);
}

export function* watchCreateAccounts() {
  yield takeLatest('accounts/create', createAccount);
}
