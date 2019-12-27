import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { EventoActions } from '~/store/ducks/doadora/evento';

export function* loadEvento({ id, search }) {
  try {
    const response = yield call(Api.getEvento, id, search);
    const rawData = response.data;
    const data = {
      ...rawData,
      participantes: rawData.donors.length.toString()
    };

    console.tron.log({ data });
    yield put(EventoActions.eventoLoadSuccess(data));
  } catch (e) {
    yield put(EventoActions.eventoLoadFailure('Erro ao buscar eventoss'));
  }
}
