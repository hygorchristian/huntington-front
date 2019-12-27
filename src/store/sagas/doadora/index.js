import { takeLatest } from 'redux-saga/effects';

import { NovoEventoTypes } from '~/store/ducks/doadora/novoEvento';
import { EventosTypes } from '~/store/ducks/doadora/eventos';
import { EventoTypes } from '~/store/ducks/doadora/evento';

import { saveEvento } from './novoEvento';
import { loadEventos } from './eventos';
import { loadEvento } from './evento';

export default [
  takeLatest(NovoEventoTypes.NOVO_EVENTO_SAVE_REQUEST, saveEvento),
  takeLatest(EventosTypes.EVENTOS_LOAD_REQUEST, loadEventos),
  takeLatest(EventoTypes.EVENTO_LOAD_REQUEST, loadEvento),
];
