import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import AtendimentoDoadora from './AtendimentoDoadora';
import AtendimentoReceptora from './AtendimentoReceptora';
import AtendimentoFinanceiro from './AtendimentoFinanceiro';
import Controladoria from './Controladoria';
import Embriologia from './Embriologia';

import DashboardRoute from '~/components/DashboardRoute';

import Login from '~/screens/Login';
import Erro404 from '~/screens/Erro404';
import FormularioReceptora from '~/screens/FormularioReceptora';

export const RolesRoutes = {
  atendimento_doadora: AtendimentoDoadora,
  atendimento_receptora: AtendimentoReceptora,
  financeiro: AtendimentoFinanceiro,
  controladoria: Controladoria,
  embriologia: Embriologia,
  master: [...AtendimentoDoadora, ...AtendimentoReceptora],
};

function Routes() {
  const user = useSelector((state) => state.Auth.user);
  const role = user ? user.role.name : '';
  const routes = RolesRoutes[role] || [];

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/receptora/form" exact component={FormularioReceptora} />
      {routes.map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
      <DashboardRoute component={Erro404} />
    </Switch>
  );
}

export default Routes;
