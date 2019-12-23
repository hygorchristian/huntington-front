import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { PreCadastroActions } from '~/store/ducks/doadora/preCadastro';

export function* loadPreCadastro({ url }) {
  try {
    console.tron.log({ url });
    const response = yield call(Api.getEventos, url);

    // todo: colocar aqui o middleware
    const { data } = response;

    yield put(PreCadastroActions.preCadastroLoadSuccess(data));
  } catch (e) {
    yield put(PreCadastroActions.preCadastroLoadFailure('Erro ao buscar preCadastros'));
  }
}
