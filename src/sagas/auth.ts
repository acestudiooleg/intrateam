import { take, delay, put } from 'redux-saga/effects';
import { LOGIN, authorize, GO_TO_LOGIN } from '../actions/auth';
import { push } from 'connected-react-router';
import { Routes } from '../constants';

export default function* auth() {
  while (true) {
    yield take(LOGIN);
    console.log('.... AUTH CALLED');
    yield delay(1000);
    yield put(authorize({ name: 'Dart', lastname: 'Waider' }));
    console.log('.... AUTH FINISHED');
    yield take(GO_TO_LOGIN);
    yield put(push(Routes.Login));
  }
}
