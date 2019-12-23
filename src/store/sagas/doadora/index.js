import { takeLatest } from 'redux-saga/effects';

import { PreCadastroTypes } from '~/store/ducks/doadora/preCadastro';
import { PreCadastrosTypes } from '~/store/ducks/doadora/preCadastros';
import { NovoEventoTypes } from '~/store/ducks/doadora/novoEvento';

import { loadPreCadastro } from './preCadastro';
import { loadPreCadastros } from './preCadastros';
import { saveEvento } from './novoEvento';

export default [
  takeLatest(PreCadastroTypes.PRE_CADASTRO_LOAD_REQUEST, loadPreCadastro),
  takeLatest(PreCadastrosTypes.PRE_CADASTROS_LOAD_REQUEST, loadPreCadastros),
  takeLatest(NovoEventoTypes.NOVO_EVENTO_SAVE_REQUEST, saveEvento),
];
