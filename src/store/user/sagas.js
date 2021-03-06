import { AsyncStorage } from 'react-native';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { userServices } from '../../services';
import { formatObject } from '../../utils';
import { getUserId } from './selectors';
import { setError } from '../common';
import userMapper from '../../services/mappers/users';
import { updateActiveAccount, setData } from './index';

function* fetchUser(payload) {
  try {
    const formatData = formatObject(yield call(userServices.fetchSingle, payload.userId));
    const data = userMapper.fromFirestore(formatData);
    yield put(setData(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* newUpdateActiveAccount(payload) {
  const userId = yield select(getUserId);
  try {
    yield call(userServices.update, userId, { active_account_id: payload.id });
    yield put(updateActiveAccount(payload));
  } catch (error) {
    yield put(setError(error));
  }
}

async function setLocalUser(userId) {
  await AsyncStorage.setItem('user', userId.id);
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
    yield put(setError(error));
  }
}

export function* watchFetchUser() {
  yield takeLatest('user/fetch', fetchUser);
}
export function* watchUpdateActiveAccount() {
  yield takeLatest('user/putActiveAccount', newUpdateActiveAccount);
}

export function* watchCreateUser() {
  yield takeLatest('user/create', createUser);
}
