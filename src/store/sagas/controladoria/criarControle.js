import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';

import { CriarControleActions } from '~/store/ducks/controladoria/criarControle';

export function* loadCriarControle() {
  try {
    // const response = yield call(Api.route, param );
    // yield put(CriarControleActions.criarControleSuccess(response.data));
  } catch (e) {
    yield put();
    // CriarControleActions.criarControleFailure('Mensagem de erro')
  }
}
