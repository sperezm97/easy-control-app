import { takeLatest, call, put, all } from 'redux-saga/effects';
import { categoriesService } from '../../services';
import { formatDataFromFb } from '../../utils';
import { setError } from '../common';

function* fetchCategories() {
  try {
    const data = formatDataFromFb(yield call(categoriesService.fetchAll));
    yield put({ type: 'options/setCategories', payload: data });
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchFetchOptions() {
  yield all([takeLatest('options/fetch', fetchCategories)]);
}
