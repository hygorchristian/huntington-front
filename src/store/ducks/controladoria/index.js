import { combineReducers } from 'redux';
import { CriarControleReducer as criarControle } from './criarControle';
import { ControlesReducer as controles } from './controles';
// import

export default combineReducers({
  criarControle,
  controles,
// reducer
});
