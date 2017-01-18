import { take, put, call, fork } from 'redux-saga/effects'
import { callApi } from '../services/api';
import { GET_METHOD, LOAD_USER_INDEX } from '../constants';

function* fetchUser() {
  yield put('user.records.request');

  const { response, error } = yield call(callApi, GET_METHOD, '/users');
  if (response) {
    yield put({ type: 'user.records.success', data: response.users });
  } else {
    yield put({ type: 'user.records.failure', error: error });
  }
}

function* watchLoadUserIndex() {
  while(true) {
    yield take(LOAD_USER_INDEX);
    yield call(fetchUser);
  }
}

export default function* rootSaga () {
  yield [
    fork(watchLoadUserIndex)
  ];
}
