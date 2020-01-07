import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';

import { PreCadastroActions } from '~/store/ducks/doadora/preCadastro';


export function* itemPreCadastro({ id }) {
  try {
    const response = yield call(Api.getDoadora, id);
    yield put(PreCadastroActions.preCadastroItemSuccess(response.data));
  } catch (e) {
    console.tron.error(e);
    yield put(PreCadastroActions.preCadastroItemFailure('Não foi possível recuperar o usuário'));
  }
}

export function* updatePreCadastro({ id, data }) {
  try {
    const response = yield call(Api.updateDoadora, id, data);

    yield put(PreCadastroActions.preCadastroUpdateSuccess(response.data, 'PreCadastro atualizado com sucesso!'));
  } catch (e) {
    yield put();
    PreCadastroActions.preCadastroUpdateFailure('Mensagem de erro');
  }
}
