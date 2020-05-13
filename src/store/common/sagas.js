import { AsyncStorage } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

function* fetchFirstUser() {
  try {
    const data = yield call(AsyncStorage.getItem, 'first');
    yield put({ type: 'options/setTransactionTypes', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFirstUser() {
  takeLatest('comon/fetchFirstUser', fetchFirstUser);
}
