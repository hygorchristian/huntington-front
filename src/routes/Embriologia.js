import React from 'react';
import { useSelector } from 'react-redux';
import DashboardRoute from '~/components/DashboardRoute';
import dashboardRoutes from './MenuRoutes';
import BancoOvulosDetalhe from '~/screens/5 - Embriologia/BancoOvulosDetalhe';

function Embriologia() {
  const role = useSelector((state) => state.Auth.role);

  return (
    <>
      {/* <DashboardRoute path="/pre-cadastros/:id" exact component={PreCadastro} /> */}
      <DashboardRoute path="/embriologia/banco-ovulos/:id" exact component={BancoOvulosDetalhe} />
      {dashboardRoutes[role].map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
    </>
  );
}

export default Embriologia;
