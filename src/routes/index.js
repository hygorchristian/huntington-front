import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import AtendimentoDoadora from './AtendimentoDoadora';
import DashboardRoute from '../components/DashboardRoute';
import PreCadastro from '../screens/PreCadastro';
import DashboardContent from '../screens/DashboardContent';
import AtendimentoReceptora from './AtendimentoReceptora';
import AtendimentoFinanceiro from './AtendimentoFinanceiro';
import Controladoria from './Controladoria';
import Embriologia from './Embriologia';
import Erro404 from '../screens/Erro404';

const roles = {
  'atendimento-doadora': () => <AtendimentoDoadora />,
  'atendimento-receptora': () => <AtendimentoReceptora />,
  'atendimento-financeiro': () => <AtendimentoFinanceiro />,
  controladoria: () => <Controladoria />,
  embriologia: () => <Embriologia />,
};

function Routes() {
  const role = useSelector((state) => state.Auth.role);
  const AuthorizedRoutes = roles[role];

  return (
    <Switch>
      <DashboardRoute path="/" exact component={DashboardContent} />
      {/* <PrivateRoute path="/" exact component={Dashboard} /> */}
      <Route path="/login" exact component={Login} />
      <AuthorizedRoutes />
      <DashboardRoute component={Erro404} />
    </Switch>
  );
}

export default Routes;
