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
import Doadora from './screens/Doadora';


const routes = () => (
  <Switch>
    <PrivateRoute path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <DashboardRoute path="/pre-cadastros/:id" exact component={PreCadastro} />
    <DashboardRoute path="/novo-evento" exact component={AdicionarEvento} />
    <DashboardRoute path="/pre-cadastros/:id/nova-doadora" exact component={AdicionarDoadora} />
    <DashboardRoute path="/doadora/:id" exact component={Doadora} />
    {dashboardRoutes.map((route) => (
      <DashboardRoute exact path={route.path} component={route.component} />
    ))}
  </Switch>
);

export default routes;
