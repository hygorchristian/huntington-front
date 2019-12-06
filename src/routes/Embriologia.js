import React from 'react';
import { useSelector } from 'react-redux';
import DashboardRoute from '~/components/DashboardRoute';
import dashboardRoutes from './MenuRoutes';
import BancoOvulosDetalhe from '~/screens/5 - Embriologia/BancoOvulosDetalhe';
import Coleta from '~/screens/5 - Embriologia/Coleta';
import NovaColeta from '~/screens/5 - Embriologia/NovaColeta';

function Embriologia() {
  const role = useSelector((state) => state.Auth.role);

  return (
    <>
      {/* <DashboardRoute path="/pre-cadastros/:id" exact component={PreCadastro} /> */}
      <DashboardRoute path="/embriologia/banco-ovulos/:id" exact component={BancoOvulosDetalhe} />
      <DashboardRoute path="/embriologia/dashboard/coletas/:id" exact component={Coleta} />
      <DashboardRoute path="/embriologia/dashboard/coletas/:id/nova-coleta" exact component={NovaColeta} />
      {dashboardRoutes[role].map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
    </>
  );
}

export default Embriologia;
