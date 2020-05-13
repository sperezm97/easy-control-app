import { AsyncStorage } from 'react-native';
import { takeLatest, call, put, select, take, fork } from 'redux-saga/effects';
import { userServices } from '../../services';
import { formatObject } from '../../utils';
import { getUserId } from './selectors';

function* fetchUser(payload) {
  try {
    const data = formatObject(yield call(userServices.fetchSingle, payload.userId));
    yield put({ type: 'user/setData', payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* updateActiveAccount(payload) {
  const userId = yield select(getUserId);
  try {
    yield call(userServices.update, userId, { active_account_id: payload });
    yield put({ type: 'user/updateActiveAccount', payload });
  } catch (error) {
    console.log(error);
  }
}

async function setLocalUser(userId) {
  try {
    await AsyncStorage.setItem('user', userId.id);
  } catch (error) {
    console.log(error);
  }
}

function* createUser() {
  try {
    const body = {
      socialAuthId: '',
      deviceId: '',
      firstName: '',
      lastName: '',
      profilePhoto: '',
      email: '',
      activeAccountId: '',
    };

    const newUser = yield call(userServices.create, body);
    const newBody = { id: newUser.id };
    yield call(setLocalUser, newBody);
    yield put({ type: 'user/setData', payload: newBody });
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

export function* watchCreateUser() {
  yield takeLatest('user/create', createUser);
}
