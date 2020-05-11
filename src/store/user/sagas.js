import { takeLatest, call, put, select } from 'redux-saga/effects';
import { userServices } from '../../services';
import { formatObject } from '../../utils';
import { getUserId } from './selectors';

function* fetchUser() {
  try {
    const data = formatObject(yield call(userServices.fetchSingle, '5TaeP1gaRsuoiDVXApqF'));
    yield put({ type: 'user/setData', payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* updateActiveAccount({ payload }) {
  const userId = yield select(getUserId);
  try {
    yield call(userServices.update, userId, { active_account_id: payload });
    yield put({ type: 'user/updateActiveAccount', payload });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchUser() {
  yield takeLatest('user/fetch', fetchUser);
}
export function* watchUpdateActiveAccount() {
  yield takeLatest('user/putActiveAccount', updateActiveAccount);
}
