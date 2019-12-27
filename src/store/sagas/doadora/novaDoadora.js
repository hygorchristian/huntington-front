import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { NovaDoadoraActions } from '~/store/ducks/doadora/novaDoadora';

export function* saveNovaDoadora({ data }) {
  try {
    const response = yield call(Api.createDoadora, data);
    console.tron.log({ response });

    // // todo: colocar aqui o middleware
    // const { data } = response;
    //
    // yield put(NovaDoadoraActions.novaDoadoraLoadSuccess(data));
  } catch (e) {
    yield put(NovaDoadoraActions.novaDoadoraLoadFailure('Erro ao buscar novaDoadoras'));
  }
}
