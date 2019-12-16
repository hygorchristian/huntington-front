import { combineReducers } from 'redux';

import { AuthReducer as Auth } from './auth';
import { HeaderReducer as Header } from './header';
import { MenuReducer as Menu } from './menu';
// import { MenuReducer as controladoria } from './controladoria';
// import { MenuReducer as doadora } from './doadora';
// import { MenuReducer as embriologia } from './embriologia';
// import { MenuReducer as financeiro } from './financeiro';
// import { MenuReducer as receptora } from './receptora';

export default combineReducers({
  Auth,
  Header,
  Menu,
  // controladoria,
  // doadora,
  // receptora,
  // embriologia,
  // financeiro,
});
