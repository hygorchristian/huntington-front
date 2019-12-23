import { combineReducers } from 'redux';
import { DoadorasReducer as doadoras } from './doadoras';
import { PreCadastroReducer as preCadastro } from './preCadastro';
import { PreCadastrosReducer as preCadastros } from './preCadastros';
import { NovoEventoReducer as novoEvento } from './novoEvento';

export default combineReducers({
  doadoras,
  preCadastro,
  preCadastros,
  novoEvento
});
