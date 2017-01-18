import { take, put, call, fork } from 'redux-saga/effects'
import { callApi } from '../services/api';
import { GET_METHOD, LOAD_USER_INDEX } from '../constants';

function* fetchUser() {
  yield put({ type: 'users.records.request' });

  const { response, error } = yield call(callApi, GET_METHOD, '/users');

  if (response.has('users')) {
    yield put({ type: 'users.records.success', data: response.get('users') });
  } else {
    yield put({ type: 'users.records.failure', error: error });
  }
}

function* watchLoadUserIndex() {
  while(true) {
    yield take(LOAD_USER_INDEX);
    yield fork(fetchUser);
  }
}

export default function* rootSaga () {
  yield [
    fork(watchLoadUserIndex)
  ];
}
