import { all, takeLatest } from 'redux-saga/effects';

import { CriarControleTypes } from '~/store/ducks/controladoria/criarControle';
import { ControlesTypes } from '~/store/ducks/controladoria/controles';
// import-types

import { loadCriarControle } from './criarControle';
import { loadControles } from './controles';
// import-saga

export default function*() {
  return yield all([
    takeLatest(CriarControleTypes.CRIAR_CONTROLE_REQUEST, loadCriarControle),
    takeLatest(ControlesTypes.CONTROLES_REQUEST, loadControles),
// saga
  ]);
}
