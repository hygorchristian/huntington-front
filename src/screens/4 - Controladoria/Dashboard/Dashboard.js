import React from 'react';

import {
  Container, Main, Side, Grid
} from './styles';
import TabDashboard from '~/components/TabDashboard';
import CardInformativo from '~/components/CardInformativo';

import tabs from './tabs';

function DashboardScreen() {
  return (
    <Container>
      <Side>
        <h1>Bem-vinda ao seu dashboard, João</h1>
        <Grid>
          <CardInformativo alta value={32}>Reservas</CardInformativo>
          <CardInformativo baixa value={12}>Entrada</CardInformativo>
          <CardInformativo alta value={32}>Disponíveis</CardInformativo>
          <CardInformativo baixa value={12}>Em avaliação</CardInformativo>
        </Grid>
      </Side>
      <Main>
        <TabDashboard tabs={tabs} />
      </Main>
    </Container>
  );
}

export default DashboardScreen;
