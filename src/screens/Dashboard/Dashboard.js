import React, { useState, useRef } from 'react';

import { Notifications } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'animate.css/animate.css';
import {
 FiChevronLeft, FiMenu, FiBell
} from 'react-icons/fi';
import jwtService from '~/services/jwtService';

import {
 Container,
  Content,
  Header,
  Main,
  Menu,
  MenuController,
  Open,
  MenuItem,
  Right,
} from './styles';
import { MenuActions } from '~/store/ducks/menu';
import { AuthActions } from '~/store/ducks/auth';
import { RolesRoutes } from '~/routes';
import UserMenu from '~/components/UserMenu';
import Notificacoes from '~/components/Notificacoes';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -2,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Item({ route, aberto, selected }) {
  const selectedItem = useSelector((state) => state.Menu.item);
  const dispatch = useDispatch();
  const isSelected = selectedItem === route.label;

  return (
    <>
      <MenuItem selected={isSelected}>
        <a className="item" href={route.path} onClick={() => { dispatch(MenuActions.setItem(route.label)); }}>
          {isSelected && aberto && <div className="indicator" />}
          {aberto && <span>{route.label}</span>}
        </a>
      </MenuItem>
    </>
  );
}

function Dashboard({ children, history, match: { path } }) {
  const dispatch = useDispatch();
  const [profileOpen, setProfileOpen] = useState(false);
  const { back, notifications } = useSelector((state) => state.Header);
  const aberto = useSelector((state) => state.Menu.opened);
  const [notiOpen, setNotiOpen] = useState(false);


  const user = useSelector((state) => state.Auth.user);
  const role = user ? user.role.name : '';
  let routes = RolesRoutes[role] || [];

  if (routes.length > 0) {
    routes = routes.filter((route) => !!route.label);
  }

  const selected = path.split('/')[1];

  const fechar = () => {
    dispatch(MenuActions.menuSetOpen(false));
  };

  const abrir = () => {
    dispatch(MenuActions.menuSetOpen(true));
  };

  const logout = () => {
    jwtService.logout();
    dispatch(AuthActions.logout());
  };

  return (
    <Container aberto={aberto}>
      <Menu aberto={aberto}>
        <MenuController aberto={aberto}>
          <img id="logo" src="/icons/logo.svg" alt="Logo" />
          {aberto && (
          <img id="logo-complemento" src="/icons/logo-complemento.svg" alt="Logo" />
          )}
        </MenuController>
        {aberto && (
          <div id="fechar" onClick={fechar}>
            <FiChevronLeft width={2} size={20} color="#ffffff" />
          </div>
        )}
        {!aberto && (
          <Open onClick={abrir}>
            <FiMenu size={20} color="#ffffff" />
          </Open>
        )}
        { routes.map((route) => <Item aberto={aberto} route={route} selected={selected} />) }
      </Menu>
      <Main aberto={aberto}>
        <Header>
          {/* <Left> */}
          {/*  <FiSearch size={20} color="#A9D4B2" /> */}
          {/*  <input placeholder="Pesquisar por doadora, PIN..." /> */}
          {/* </Left> */}
          <Right>
            <IconButton aria-label="cart" onClick={() => setNotiOpen(true)}>
              <StyledBadge badgeContent={4} color="secondary">
                <Notifications />
              </StyledBadge>
            </IconButton>
            <UserMenu />
          </Right>
        </Header>
        <Content>
          {children}
        </Content>
      </Main>
      <Notificacoes open={notiOpen} onClose={() => setNotiOpen(false)} />
    </Container>
);
}

export default withRouter(Dashboard);
