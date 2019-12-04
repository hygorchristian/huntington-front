import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'animate.css/animate.css';
import Animate from 'animate.css-react';

import {
 FiChevronDown, FiChevronLeft, FiMenu, FiBell, FiSearch,
} from 'react-icons/fi';
import routes from '~/routes/MenuRoutes';

import {
 Container,
  Content,
  Header,
  Main,
  Menu,
  MenuController,
  Open,
  MenuItem,
  Left,
  Right,
  ProfileMenu,
  Notification,
} from './styles';
import { MenuActions } from '~/store/ducks/menu';

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


  const role = useSelector((state) => state.Auth.role);

  const selected = path.split('/')[1];

  const fechar = () => {
    dispatch(MenuActions.menuSetOpen(false));
  };
  const abrir = () => {
    dispatch(MenuActions.menuSetOpen(true));
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
        { routes[role].map((route) => <Item aberto={aberto} route={route} selected={selected} />) }
      </Menu>
      <Main aberto={aberto}>
        <Header>
          <Left>
            <FiSearch size={20} color="#A9D4B2" />
            <input placeholder="Pesquisar por doadora, PIN..." />
          </Left>
          <Right>
            <Notification>
              <FiBell size={20} />
              {
                notifications && (
                  <div className="badge">
                    <span>{notifications.count}</span>
                  </div>
                )
              }
            </Notification>
            <h3>Olá, Talita</h3>
            <img alt="Avatar" src="https://randomuser.me/api/portraits/women/26.jpg" />
            <span onClick={() => setProfileOpen(!profileOpen)}>
              <FiChevronDown />
            </span>
            {profileOpen && (
            <Animate appear="flipInY" durationAppear={1000} leave="flipOutY" durationLeave={1000}>
              <ProfileMenu>
                <div className="item-menu">
                  <span>Editar Perfil</span>
                </div>
                <div className="item-menu">
                  <span>Minha Conta</span>
                </div>
                <div className="logout">
                  <span>Logout</span>
                </div>
              </ProfileMenu>
            </Animate>
            )}
          </Right>
        </Header>
        <Content>
          {children}
        </Content>
      </Main>
    </Container>
);
}

export default withRouter(Dashboard);
