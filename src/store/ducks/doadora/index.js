import { combineReducers } from 'redux';
import { DoadorasReducer as doadoras } from './doadoras';
import { NovoEventoReducer as novoEvento } from './novoEvento';
import { EventosReducer as eventos } from './eventos';
import { EventoReducer as evento } from './evento';
import { NovaDoadoraReducer as novaDoadora } from './novaDoadora';

export default combineReducers({
  doadoras,
  novoEvento,
  eventos,
  evento,
  novaDoadora
});
