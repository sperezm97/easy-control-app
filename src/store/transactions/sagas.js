import { takeLatest, call, put } from 'redux-saga/effects';
import { transactionService } from '../../services';
import { formatDataFromFb } from '../../utils';

function* fetchTransactions() {
  try {
    const data = formatDataFromFb(yield call(transactionService.fetchAll, '5TaeP1gaRsuoiDVXApqF'));
    yield put({ type: 'transactions/setData', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchTransactions() {
  yield takeLatest('transactions/fetch', fetchTransactions);
}
