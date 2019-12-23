import { all, takeLatest } from 'redux-saga/effects';
import doadora from './doadora';

import { AuthActions } from '../ducks/auth';

import { loadAuth } from './auth';

export default function* () {
  return yield all([
    // takeLatest(AuthActions.authLoadRequest, loadAuth)
    ...doadora
  ]);
}
