import { takeLatest, call, put, all } from 'redux-saga/effects';
import { transactionTypeService, accountTypeService, categoriesService } from '../../services';
import { formatDataFromFb } from '../../utils';

function* fetchTransactionsTypes() {
  try {
    const data = formatDataFromFb(yield call(transactionTypeService.fetchAll));
    yield put({ type: 'options/setTransactionTypes', payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* fetchCategories() {
  try {
    const data = formatDataFromFb(yield call(categoriesService.fetchAll));
    yield put({ type: 'options/setCategories', payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* fetchAccountTypes() {
  try {
    const data = formatDataFromFb(yield call(accountTypeService.fetchAll));
    yield put({ type: 'options/setAccountTypes', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export default function* watchFetchOptions() {
  yield all([
    takeLatest('options/fetch', fetchTransactionsTypes),
    takeLatest('options/fetch', fetchCategories),
    takeLatest('options/fetch', fetchAccountTypes),
  ]);
}
