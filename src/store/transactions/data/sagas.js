import { takeLatest, call, put, select } from 'redux-saga/effects';
import { transactionService } from '../../../services';
import { formatDataFromFb, fbDateTime } from '../../../utils';
import { getActiveAccountId, getUserId } from '../../user/selectors';
import { setError } from '../../common';
import MapperTrans from '../../../services/mappers/transaction';
import * as actions from './index';

function* fetchTransactions() {
  try {
    const userId = yield select(getUserId);
    const actualAccountId = yield select(getActiveAccountId);
    if (actualAccountId) {
      const formaData = formatDataFromFb(
        yield call(transactionService.fetchAll, userId, actualAccountId),
      );

      const data = MapperTrans.fromFirestore(formaData);
      const value = formaData.length ? data : [];
      yield put(actions.setData(value));
    }
  } catch (error) {
    yield put(setError(error));
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
    yield put(
      actions.setNewTransaction({
        id: trans.id,
        ...body,
        createdAt: fbDateTime(),
        updatedAt: fbDateTime(),
      }),
    );
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchFetchTransactions() {
  yield takeLatest('transactions/fetch', fetchTransactions);
}

export function* watchCreateTransactions() {
  yield takeLatest('transactions/create', createTransaction);
}
