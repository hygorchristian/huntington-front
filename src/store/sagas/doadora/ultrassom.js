import { put, call } from 'redux-saga/effects';
import Api from '~/services/api';
import { UltrassomActions } from '~/store/ducks/doadora/ultrassom';


export function* itemUltrassom() {
  try {

    // const response = yield call(Api.updateDoadora, id, data);
    // yield put(UltrassomActions.ultrassomItemSuccess(response.data));
  } catch (e) {
    yield put();
    // UltrassomActions.ultrassomItemFailure('Mensagem de erro')
  }
}

export function* createUltrassom({ data }) {
  try {
    const response = yield call(Api.createUltrasound, data);
    yield put(UltrassomActions.ultrassomCreateSuccess(response.data, 'Ultrassom criado com sucesso!'));
  } catch (e) {
    console.tron.error(e);
    yield put(
      UltrassomActions.ultrassomCreateFailure('Mensagem de erro')
    );
  }
}

export function* updateUltrassom() {
  try {
    // const response = yield call(Api.route, param );
    // yield put(UltrassomActions.ultrassomUpdateSuccess(response.data, 'Ultrassom atualizado com sucesso!'));
  } catch (e) {
    yield put();
    // UltrassomActions.ultrassomUpdateFailure('Mensagem de erro')
  }
}
