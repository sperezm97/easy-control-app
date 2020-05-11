import { takeLatest, call, put, select } from 'redux-saga/effects';
import { transactionService } from '../../services';
import { formatDataFromFb } from '../../utils';
import { getActiveAccountId, getUserId } from '../user/selectors';

function* fetchTransactions() {
  try {
    const data = formatDataFromFb(yield call(transactionService.fetchAll, '5TaeP1gaRsuoiDVXApqF'));
    yield put({ type: 'transactions/setData', payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* createTransaction(payload) {
  try {
    const accountId = yield select(getActiveAccountId);
    const userId = yield select(getUserId);
    yield call(transactionService.create, {
      ...payload.values,
      accountId,
      userId,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchTransactions() {
  yield takeLatest('transactions/fetch', fetchTransactions);
}

export function* watchCreateTransactions() {
  yield takeLatest('transactions/create', createTransaction);
}
