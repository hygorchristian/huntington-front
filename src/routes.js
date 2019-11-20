import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import PrivateRoute from './components/PrivateRoute';
import DashboardRoute from './components/DashboardRoute';
import dashboardRoutes from './screens';
import Cliente from './screens/Cliente';
import PreCadastros from './screens/PreCadastros';
import PreCadastro from './screens/PreCadastro';
import AdicionarEvento from './screens/AdicionarEvento';
import AdicionarDoadora from './screens/AdicionarDoadora';
import DoadoraPreCadastro from './screens/DoadoraPreCadastro';
import DoadoraTriagem from './screens/DoadoraPreCadastro/DoadoraTriagem';
import NovoHistorico from './components/NovoHistorico';
import PreencherUltrassom from './screens/PreencherUltrassom';
import NovaColeta from './screens/NovaColeta';
import ResultadoExame from './screens/ResultadoExame';
import Doadora from './screens/Doadora';


const routes = () => (
  <Switch>
    <PrivateRoute path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <DashboardRoute path="/pre-cadastros/:id" exact component={PreCadastro} />
    <DashboardRoute path="/novo-evento" exact component={AdicionarEvento} />
    <DashboardRoute path="/pre-cadastros/:id/nova-doadora" exact component={AdicionarDoadora} />
    <DashboardRoute path="/doadora/:id" exact component={DoadoraPreCadastro} />
    <DashboardRoute path="/doadora/:id/triagem" exact component={DoadoraTriagem} />
    <DashboardRoute path="/doadora/:id/novo-historico" exact component={NovoHistorico} />
    <DashboardRoute path="/doadora/:id/ultrassons/preencher" exact component={PreencherUltrassom} />
    <DashboardRoute path="/doadora/:id/exames/nova-coleta" exact component={NovaColeta} />
    <DashboardRoute path="/doadora/:id/exames/resultado" exact component={ResultadoExame} />
    <DashboardRoute path="/doadoras/:id" exact component={Doadora} />
    <DashboardRoute path="/doadoras/:id/triagem" exact component={DoadoraTriagem} />
    <DashboardRoute path="/doadoras/:id/novo-historico" exact component={NovoHistorico} />
    <DashboardRoute path="/doadoras/:id/ultrassons/preencher" exact component={PreencherUltrassom} />
    <DashboardRoute path="/doadoras/:id/exames/nova-coleta" exact component={NovaColeta} />
    <DashboardRoute path="/doadoras/:id/exames/resultado" exact component={ResultadoExame} />
    {dashboardRoutes.map((route) => (
      <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
    ))}
  </Switch>
);

export default routes;
