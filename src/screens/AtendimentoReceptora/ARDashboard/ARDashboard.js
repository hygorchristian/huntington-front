import React from 'react';

import {
  Container, Main, Side, Grid
} from './styles';
import TabDashboard from '../../../components/TabDashboard';
import DashboardConsulta from '../../DashboardConsulta';
import DashboardDPM from '../../DashboardDPM';
import CardInformativo from '../../../components/CardInformativo';
import DashboardRespondidos from '../DashboardRespondidos';
import DashboardSemResposta from '../DashboardSemResposta';

const tabs = [
  {
    label: 'Respondidos',
    content: DashboardRespondidos
  },
  {
    label: 'Sem Resposta',
    content: DashboardSemResposta
  }
];

function ARDashboard() {
  return (
    <Container>
      <Side>
        <h1>Bem-vinda ao seu dashboard, Talita</h1>
        <Grid>
          <CardInformativo alta value={32}>Programadas</CardInformativo>
          <CardInformativo baixa value={12}>Estimulação</CardInformativo>
          <CardInformativo alta value={32}>Coletada</CardInformativo>
          <CardInformativo baixa value={12}>Stand</CardInformativo>
          <CardInformativo alta value={32}>CFA</CardInformativo>
        </Grid>
      </Side>
      <Main>
        <TabDashboard tabs={tabs} />
      </Main>
    </Container>
  );
}

export default ARDashboard;
