import React from 'react';

import {
 Container, Main, Side, Grid
} from './styles';
import TabDashboard from '~/components/TabDashboard';
import DashboardConsulta from '../DashboardConsulta';
import DashboardDPM from '../DashboardDPM';
import DashboardResultados from '../DashboardResultados';
import CardInformativo from '~/components/CardInformativo';

const tabs = [
  {
    label: 'Consultas',
    content: DashboardConsulta
  },
  {
    label: 'Confirmar D.P.M',
    content: DashboardDPM
  },
  {
    label: 'Resultados',
    content: DashboardResultados
  }
];

function DashboardScreen() {
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

export default DashboardScreen;
