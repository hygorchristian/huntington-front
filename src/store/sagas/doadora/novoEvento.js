import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { NovoEventoActions } from '~/store/ducks/doadora/novoEvento';

export function* saveEvento({ data }) {
  try {
    yield call(Api.createEvent, data);
    yield put(NovoEventoActions.novoEventoSaveSuccess('Evento criado com sucesso!'));
  } catch (e) {
    yield put(NovoEventoActions.novoEventoSaveFailure('Erro ao criar novo evento.'));
  }
}
