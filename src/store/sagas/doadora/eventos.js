import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { EventosActions } from '~/store/ducks/doadora/eventos';

export function* loadEventos({ search = {} }) {
  try {
    console.tron.log({ search });
    const response = yield call(Api.getEventos, search);
    const rawData = response.data;
    const data = rawData.map((item) => ({
      ...item,
      participantes: item.donors.length.toString()
    }));

    console.tron.log({ data });
    yield put(EventosActions.eventosLoadSuccess(data));
  } catch (e) {
    yield put(EventosActions.eventosLoadFailure('Erro ao buscar eventoss'));
  }
}
