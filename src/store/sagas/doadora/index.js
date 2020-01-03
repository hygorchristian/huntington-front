import { takeLatest } from 'redux-saga/effects';

import { NovoEventoTypes } from '~/store/ducks/doadora/novoEvento';
import { EventosTypes } from '~/store/ducks/doadora/eventos';
import { EventoTypes } from '~/store/ducks/doadora/evento';
import { NovaDoadoraTypes } from '~/store/ducks/doadora/novaDoadora';
import { PreCadastroTypes } from '~/store/ducks/doadora/preCadastro';
// import-types

import { saveEvento } from './novoEvento';
import { loadEventos } from './eventos';
import { loadEvento } from './evento';
import { saveNovaDoadora } from './novaDoadora';
import { itemPreCadastro, updatePreCadastro, } from './preCadastro';
// import-saga

export default [
  takeLatest(NovoEventoTypes.NOVO_EVENTO_SAVE_REQUEST, saveEvento),
  takeLatest(EventosTypes.EVENTOS_LOAD_REQUEST, loadEventos),
  takeLatest(EventoTypes.EVENTO_LOAD_REQUEST, loadEvento),
  takeLatest(NovaDoadoraTypes.NOVA_DOADORA_SAVE_REQUEST, saveNovaDoadora),
  takeLatest(PreCadastroTypes.PRE_CADASTRO_ITEM_REQUEST, itemPreCadastro),
  takeLatest(PreCadastroTypes.PRE_CADASTRO_UPDATE_REQUEST, updatePreCadastro),
// saga
];
