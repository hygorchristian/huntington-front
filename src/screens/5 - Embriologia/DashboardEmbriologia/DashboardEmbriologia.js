import React from 'react';
import Calendar from '~/components/MaterialCalendar';

import TabDashboard from '~/components/TabDashboard';
import tabs from './tabs';

import {
  Container, Main, Side, Grid
} from './styles';


function DashboardEmbriologia() {
  return (
    <Container>
      <Side>
        <h1>Bem-vinda ao seu dashboard, Raquel</h1>

        <Calendar
          orientation="flex-col"
        />
      </Side>
      <Main>
        <TabDashboard tabs={tabs} />
      </Main>
    </Container>
  );
}

export default DashboardEmbriologia;
