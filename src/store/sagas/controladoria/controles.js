import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';

import { ControlesActions } from '~/store/ducks/controladoria/controles';

export function* loadControles() {
  try {
    // const response = yield call(Api.route, param );
    // yield put(ControlesActions.controlesSuccess(response.data));
  } catch (e) {
    yield put();
    // ControlesActions.controlesFailure('Mensagem de erro')
  }
}
