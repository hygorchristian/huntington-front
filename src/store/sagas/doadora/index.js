import { takeLatest } from 'redux-saga/effects';

import { NovoEventoTypes } from '~/store/ducks/doadora/novoEvento';
import { EventosTypes } from '~/store/ducks/doadora/eventos';
import { EventoTypes } from '~/store/ducks/doadora/evento';
import { NovaDoadoraTypes } from '~/store/ducks/doadora/novaDoadora';
import { PreCadastroTypes } from '~/store/ducks/doadora/preCadastro';
import { UltrassomTypes } from '~/store/ducks/doadora/ultrassom';
import { ConsultaTypes } from '~/store/ducks/doadora/consulta';
// import-types

import { saveEvento } from './novoEvento';
import { loadEventos } from './eventos';
import { loadEvento } from './evento';
import { saveNovaDoadora } from './novaDoadora';
import { itemPreCadastro, updatePreCadastro, } from './preCadastro';
import { itemUltrassom, createUltrassom, updateUltrassom, } from './ultrassom';
import {
 itemConsulta, listConsulta, createConsulta,
} from './consulta';
// import-saga

export default [
  takeLatest(NovoEventoTypes.NOVO_EVENTO_SAVE_REQUEST, saveEvento),
  takeLatest(EventosTypes.EVENTOS_LOAD_REQUEST, loadEventos),
  takeLatest(EventoTypes.EVENTO_LOAD_REQUEST, loadEvento),
  takeLatest(NovaDoadoraTypes.NOVA_DOADORA_SAVE_REQUEST, saveNovaDoadora),
  takeLatest(PreCadastroTypes.PRE_CADASTRO_ITEM_REQUEST, itemPreCadastro),
  takeLatest(PreCadastroTypes.PRE_CADASTRO_UPDATE_REQUEST, updatePreCadastro),
  takeLatest(UltrassomTypes.ULTRASSOM_ITEM_REQUEST, itemUltrassom),
  takeLatest(UltrassomTypes.ULTRASSOM_CREATE_REQUEST, createUltrassom),
  takeLatest(UltrassomTypes.ULTRASSOM_UPDATE_REQUEST, updateUltrassom),

    takeLatest(ConsultaTypes.CONSULTA_ITEM_REQUEST, itemConsulta),
    takeLatest(ConsultaTypes.CONSULTA_LIST_REQUEST, listConsulta),
    takeLatest(ConsultaTypes.CONSULTA_CREATE_REQUEST, createConsulta),

// saga
];
