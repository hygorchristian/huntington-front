import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Login from '~/screens/Login';
import AtendimentoDoadora from './AtendimentoDoadora';
import DashboardRoute from '~/components/DashboardRoute';
import AtendimentoReceptora from './AtendimentoReceptora';
import AtendimentoFinanceiro from './AtendimentoFinanceiro';
import Controladoria from './Controladoria';
import Embriologia from './Embriologia';
import Erro404 from '~/screens/Erro404';
import PrivateRoute from '~/components/PrivateRoute';
import Dashboard from '~/screens/Dashboard/Dashboard';

export const RolesRoutes = {
  'atendimento-doadora': AtendimentoDoadora,
  master: AtendimentoDoadora,
  'atendimento-receptora': AtendimentoReceptora,
  'atendimento-financeiro': AtendimentoFinanceiro,
  controladoria: Controladoria,
  embriologia: Embriologia,
};

function Routes() {
  const user = useSelector((state) => state.Auth.user);
  const role = user ? user.role.name : '';
  const routes = RolesRoutes[role] || [];

  return (
    <Switch>
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      {routes.map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
      <DashboardRoute component={Erro404} />
    </Switch>
  );
}

export default Routes;
