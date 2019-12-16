import React from 'react';
import { useSelector } from 'react-redux';
import DashboardRoute from '~/components/DashboardRoute';
import dashboardRoutes from './MenuRoutes';
import Estoque from '~/screens/4 - Controladoria/Estoque';
import CicloCasado from '~/screens/4 - Controladoria/CicloCasado';
import Doadora from '~/screens/4 - Controladoria/Doadoras/Doadora';
import Coleta from '~/screens/4 - Controladoria/Doadoras/Doadora/Coletas/Coleta';

function Controladoria() {
  const role = useSelector((state) => state.Auth.role);

  return (
    <>
      {/* <DashboardRoute path="/pre-cadastros/:id" exact component={PreCadastro} /> */}
      <DashboardRoute path="/controladoria/estoque/:id" exact component={Estoque} />
      <DashboardRoute path="/controladoria/ciclos-casados/:id" exact component={CicloCasado} />
      <DashboardRoute path="/controladoria/doadoras/:id" exact component={Doadora} />
      <DashboardRoute path="/controladoria/doadoras/:id/coleta/:coleta_id" exact component={Coleta} />
      {dashboardRoutes[role].map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
    </>
  );
}

export default Controladoria;
