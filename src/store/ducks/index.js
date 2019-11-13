import { combineReducers } from 'redux';

import { AuthReducer as Auth } from './auth';
import { HeaderReducer as Header } from './header';
import { MenuReducer as Menu } from './menu';

export default combineReducers({
  Auth,
  Header,
  Menu,
});
