import { takeLatest, call, put, select } from 'redux-saga/effects';
import { transactionService } from '../../../services';
import { getUserId, getActiveAccountId } from '../../user/selectors';
import { db } from '../../../config/firebase';
import { clearBulkTrans } from '.';
import { getTransactionsSelection } from '../selectors';
import { setError } from '../../common';

function* deleteBulkTransaction() {
  const userId = yield select(getUserId);
  const actualAccountId = yield select(getActiveAccountId);
  const transSelected = yield select(getTransactionsSelection);
  try {
    const transactionsDocs = yield call(transactionService.fetchAll, userId, actualAccountId);
    const batch = db.batch();
    transactionsDocs.forEach(doc => {
      batch.delete(doc.ref);
    });
    batch.commit();
    yield put(clearBulkTrans(transSelected));
  } catch (error) {
    yield put(setError(error));
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchBulkDelete() {
  yield takeLatest('transaction/bulk/delete', deleteBulkTransaction);
}
