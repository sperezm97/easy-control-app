import { takeLatest, call, put, select, delay, take } from 'redux-saga/effects';
import { transactionService } from '../../services';
import { formatDataFromFb, fbDateTime } from '../../utils';
import { getActiveAccountId, getUserId } from '../user/selectors';

function* fetchTransactions() {
  yield take(['user/setData', 'accounts/setActiveAccountData']);
  try {
    const userId = yield select(getUserId);
    const actualAccountId = yield select(getActiveAccountId);
    if (actualAccountId) {
      const data = formatDataFromFb(
        yield call(transactionService.fetchAll, userId, actualAccountId),
      );
      yield put({ type: 'transactions/setData', payload: data });
    }
  } catch (error) {
    console.log(error);
  }
}

function* createTransaction(payload) {
  try {
    const accountId = yield select(getActiveAccountId);
    const userId = yield select(getUserId);

    const body = {
      description: payload.values.description,
      transactionTypeId: payload.values.transactionTypeId,
      categoryId: payload.values.categoryId,
      price: +payload.values.price,
      accountId,
      userId,
    };
    const trans = yield call(transactionService.create, body);
    yield put({
      type: 'transactions/setNewTransaction',
      payload: { id: trans.id, ...body, createdAt: fbDateTime(), updatedAt: fbDateTime() },
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
