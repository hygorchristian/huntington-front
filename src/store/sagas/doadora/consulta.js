import { call, put } from 'redux-saga/effects';
import Api from '~/services/api';

import { ConsultaActions } from '~/store/ducks/doadora/consulta';

/**
* @param doadora_id ?
* @todo colocar aqui os parametros que são necessários para fazer as chamadas à api.
*/

export function* listConsulta({ doadora_id }) {
  try {
    // todo: (caio) criar listagem de consultas dado um id de doadora ?
    // const response = yield call(Api.route, param );
    // yield put(ConsultaActions.consultaListSuccess(response.data));
  } catch (e) {
    yield put();
    // ConsultaActions.consultaListFailure('Mensagem de erro')
  }
}

/**
 * @param id ?
 * @todo colocar aqui os parametros que são necessários para fazer as chamadas à api.
 */

export function* itemConsulta({ id }) {
  try {
    // todo: (caio) criar listagem de consultas dado um id
    // const response = yield call(Api.route, param );
    // yield put(ConsultaActions.consultaItemSuccess(response.data));
  } catch (e) {
    yield put();
    // ConsultaActions.consultaItemFailure('Mensagem de erro')
  }
}

/**
 * @param doadora_id ?
 * @param is_first: flag para saber se é a primeira consulta da doadora.
 * @todo colocar aqui os parametros que são necessários para fazer as chamadas à api.
 */

export function* createConsulta({ data, is_first }) {
  try {
    console.tron.log({ data, is_first });
    /**
     *  todo: (caio) criar método para criação de consulta dado um id de doadora
     *  todo: verificar se é a primeira consulta para dar o update nos dados da doadora
     *  dentro do objeto data existe as informações referente à doadora. qualquer coisa é só dar um debug
     */

    // const response = yield call(Api.route, param );
    // yield put(ConsultaActions.consultaCreateSuccess(response.data, 'Consulta criado com sucesso!'));
  } catch (e) {
    yield put();
    // ConsultaActions.consultaCreateFailure('Mensagem de erro')
  }
}
