import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';
import { NovaDoadoraActions } from '~/store/ducks/doadora/novaDoadora';

export function* saveNovaDoadora({ eventID, data }) {
  try {
    const statusResponse = yield call(Api.getStates);
    let status = statusResponse.data.filter((item) => item.name === 'Preregistradas');
    if (status.length > 0) {
      status = status[0]._id;
      const responseDonor = yield call(Api.createDoadora, { ...data, status });
      const responseEvent = yield call(Api.eventAddDonor, eventID, responseDonor.data._id);
      yield put(NovaDoadoraActions.novaDoadoraSaveSuccess('Doadora criada com sucesso!'));
    } else {
      yield put(NovaDoadoraActions.novaDoadoraSaveFailure('Não foi possível definir o status'));
    }
  } catch (e) {
    console.tron.error(e);
    yield put(NovaDoadoraActions.novaDoadoraSaveFailure('Erro ao salvar doadora'));
  }
}
