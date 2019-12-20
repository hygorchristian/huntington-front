import { combineReducers } from 'redux';

import { AuthReducer as Auth } from './auth';
import { HeaderReducer as Header } from './header';
import { MenuReducer as Menu } from './menu';
import doadora from './doadora';

export default combineReducers({
  Auth,
  Header,
  Menu,
  doadora,
  // controladoria,
  // receptora,
  // embriologia,
  // financeiro,
});
