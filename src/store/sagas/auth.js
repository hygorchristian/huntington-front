import { call, put, delay } from 'redux-saga/effects';
import { AuthActions } from '../ducks/auth';

export function* loadAuth() {
  try {
    yield delay(2000);
    yield put(AuthActions.authLoadSuccess('token: ksakskkas'));
  } catch (e) {
    yield put(AuthActions.authLoadFailure('Erro ao buscar auths'));
  }
}
