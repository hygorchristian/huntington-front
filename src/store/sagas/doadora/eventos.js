import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { EventosActions } from '~/store/ducks/doadora/eventos';

export function* loadEventos() {
  try {
    const response = yield call(Api.getEventos);
    console.tron.log({ response });
    const { data } = response;
    yield put(EventosActions.eventosLoadSuccess(data));
  } catch (e) {
    yield put(EventosActions.eventosLoadFailure('Erro ao buscar eventoss'));
  }
}
