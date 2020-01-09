import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';

import { ConsultaActions } from '~/store/ducks/doadora/consulta';

// TODO: Corrigir bugs de Listar Etnia por servidor

/**
* @param doadora_id ?
* @TODO colocar aqui os parametros que são necessários para fazer as chamadas à api.
*/

export function* listConsulta({ doadora_id }) {
  try {
    const response = yield call(Api.getDoadora, doadora_id);
    yield put(ConsultaActions.consultaListSuccess(response.data.consultations));
  } catch (e) {
    yield put(ConsultaActions.consultaListFailure('Mensagem de erro'));
  }
}

/**
 * @param id ?
 * @TODO colocar aqui os parametros que são necessários para fazer as chamadas à api.
 */

export function* itemConsulta({ id }) {
  try {
    const response = yield call(Api.getConsultation, id);
    yield put(ConsultaActions.consultaItemSuccess(response.data));
  } catch (e) {
    yield put(ConsultaActions.consultaItemFailure('Mensagem de erro'));
  }
}

/**
 * @param doadora_id ?
 * @param is_first: flag para saber se é a primeira consulta da doadora.
 * @TODO colocar aqui os parametros que são necessários para fazer as chamadas à api.
 */

export function* createConsulta({ data, is_first }) {
  try {
    const { consult_data, donor_data } = data;
    // TODO: Corrigir bugs de emissão ao backend
    if (is_first) {      
      console.tron.log([consult_data.donor, donor_data]);
      const consult_donor = yield call(Api.updateDoadora, consult_data.donor, donor_data);
      console.tron.log(consult_donor);
      const response = yield call(Api.createConsultation, consult_data);
      console.tron.log(response);

      yield put(ConsultaActions.consultaCreateSuccess(response.data, 'Consulta criado com sucesso!'));
    } else {
      const response = yield call(Api.createConsultation, consult_data);
      yield put(ConsultaActions.consultaCreateSuccess(response.data, 'Consulta criado com sucesso!'));
    }
  } catch (e) {
    yield put(ConsultaActions.consultaCreateFailure('Mensagem de erro'));
  }
}
