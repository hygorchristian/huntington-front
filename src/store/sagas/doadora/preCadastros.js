import { call, put, delay } from 'redux-saga/effects';
import Api from '~/services/api';
import { PreCadastrosActions } from '~/store/ducks/doadora/preCadastros';

export function* loadPreCadastros() {
  try {
    const response = yield call(Api.getEventos);

    // todo: colocar aqui o middleware
    const { data } = response;

    yield put(PreCadastrosActions.preCadastrosLoadSuccess(data));
  } catch (e) {
    yield put(PreCadastrosActions.preCadastrosLoadFailure('Erro ao buscar preCadastross'));
  }
}
