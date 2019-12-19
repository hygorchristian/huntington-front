import React from 'react';
import { useSelector } from 'react-redux';
import DashboardRoute from '~/components/DashboardRoute';
import PreCadastro from '~/screens/PreCadastro';
import AdicionarEvento from '~/screens/AdicionarEvento';
import AdicionarDoadora from '~/screens/AdicionarDoadora';
import DoadoraPreCadastro from '~/screens/DoadoraPreCadastro';
import DoadoraTriagem from '~/screens/DoadoraPreCadastro/DoadoraTriagem';
import NovoHistorico from '~/components/NovoHistorico';
import PreencherUltrassom from '~/screens/PreencherUltrassom';
import NovaColeta from '~/screens/NovaColeta';
import ResultadoExame from '~/screens/ResultadoExame';
import Doadora from '~/screens/Doadora';
import NovoHistoricoDoadora from '~/screens/Doadora/NovoHistoricoDoadora';
import dashboardRoutes from './MenuRoutes';

function AtendimentoDoadora() {
  const user = useSelector((state) => state.Auth.user);
  const role = user ? user.role.name : '';
  const routes = dashboardRoutes[role] || [];
  console.tron.log({ routes });

  return (
    <>
      <DashboardRoute path="/doadora/pre-cadastros/:id" exact component={PreCadastro} />
      <DashboardRoute path="/doadora/novo-evento" exact component={AdicionarEvento} />
      <DashboardRoute path="/doadora/pre-cadastros/:id/nova-doadora" exact component={AdicionarDoadora} />
      <DashboardRoute path="/doadora/detalhes/:id" exact component={DoadoraPreCadastro} />
      <DashboardRoute path="/doadora/detalhes/:id/triagem" exact component={DoadoraTriagem} />
      <DashboardRoute path="/doadora/detalhes/:id/novo-historico" exact component={NovoHistorico} />
      <DashboardRoute path="/doadora/detalhes/:id/ultrassons/preencher" exact component={PreencherUltrassom} />
      <DashboardRoute path="/doadora/detalhes/:id/exames/nova-coleta" exact component={NovaColeta} />
      <DashboardRoute path="/doadora/detalhes/:id/exames/resultado" exact component={ResultadoExame} />
      <DashboardRoute path="/doadora/listagem/:id" exact component={Doadora} />
      <DashboardRoute path="/doadora/listagem/:id/triagem" exact component={DoadoraTriagem} />
      <DashboardRoute path="/doadora/listagem/:id/novo-registro" exact component={NovoHistoricoDoadora} />
      <DashboardRoute path="/doadora/listagem/:id/ultrassons/preencher" exact component={PreencherUltrassom} />
      <DashboardRoute path="/doadora/listagem/:id/exames/nova-coleta" exact component={NovaColeta} />
      <DashboardRoute path="/doadora/listagem/:id/exames/resultado" exact component={ResultadoExame} />
      {routes.map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
    </>
  );
}

export default AtendimentoDoadora;
