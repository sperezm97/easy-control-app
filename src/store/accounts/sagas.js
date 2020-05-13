import { takeLatest, call, put, select, take } from 'redux-saga/effects';
import { accountService } from '../../services';
import { formatDataFromFb } from '../../utils';
import { getActiveAccountId, getUserId } from '../user/selectors';

function* fetchAccounts() {
  yield take('user/setData');
  try {
    const userId = yield select(getUserId);
    const data = formatDataFromFb(yield call(accountService.fetchAll, userId));
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
    console.log(error);
  }
}

export function* watchFetchAccounts() {
  yield takeLatest('accounts/fetch', fetchAccounts);
}

export function* watchCreateAccounts() {
  yield takeLatest('accounts/create', createAccount);
}
