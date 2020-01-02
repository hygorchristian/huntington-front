import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { EventoActions } from '~/store/ducks/doadora/evento';

export function* loadEvento({ id, search }) {
  try {
    const response = yield call(Api.getEvent, id, search);
    const rawData = response.data;

    const doadoras = rawData.donors;

    for (let i = 0; i < doadoras.length; i++) {
      const doadora = doadoras[i];
      if (doadora.status) {
        const status = yield call(Api.getState, doadora.status, {});
        doadora.statusName = status.data.name;
        doadoras[i] = doadora;
      } else {
        console.tron.error('Não há status');
      }
    }

    const data = {
      doadoras,
      participantes: rawData.donors.length.toString()
    };

    yield put(EventoActions.eventoLoadSuccess(data));
  } catch (e) {
    console.tron.error(e);
    yield put(EventoActions.eventoLoadFailure('Erro ao buscar eventoss'));
  }
}
