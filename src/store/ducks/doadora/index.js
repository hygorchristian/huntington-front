import { combineReducers } from 'redux';
import { DoadorasReducer as doadoras } from './doadoras';
import { NovoEventoReducer as novoEvento } from './novoEvento';
import { EventosReducer as eventos } from './eventos';
import { EventoReducer as evento } from './evento';
import { NovaDoadoraReducer as novaDoadora } from './novaDoadora';
import { PreCadastroReducer as preCadastro } from './preCadastro';
import { UltrassomReducer as ultrassom } from './ultrassom';
import { ConsultaReducer as consulta } from './consulta';
// import

export default combineReducers({
  doadoras,
  novoEvento,
  eventos,
  evento,
  novaDoadora,
  preCadastro,
  ultrassom,
  consulta,
// reducer
});
