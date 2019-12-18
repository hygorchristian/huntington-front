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
import CicloCasado from '~/screens/3 - AtendimentoFinanceiro/CiclosCasados/CicloCasado';

function AtendimentoFinanceiro() {
  const role = useSelector((state) => state.Auth.role);

  return (
    <>
      {/* <DashboardRoute path="/doadora/pre-cadastros/:id" exact component={PreCadastro} /> */}
      <DashboardRoute path="/financeiro/ciclos-casados/:id" exact component={CicloCasado} />
      {dashboardRoutes[role].map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
    </>
  );
}

export default AtendimentoFinanceiro;
