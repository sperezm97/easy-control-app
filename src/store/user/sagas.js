import { takeLatest, call, put } from 'redux-saga/effects';
import { userServices } from '../../services';
import { formatObject } from '../../utils';

function* fetchUser() {
  try {
    const data = formatObject(yield call(userServices.fetchSingle, '5TaeP1gaRsuoiDVXApqF'));
    yield put({ type: 'user/setData', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchUser() {
  yield takeLatest('user/fetch', fetchUser);
}
