import React from 'react';
import MonthPicker from '~/components/MonthPicker';
import TabDashboard from '~/components/TabDashboard';
import tabs from './tabs';


import {
  Container, Header, Content, Busca
} from './styles';

function Custos() {
  return (
    <Container>
      <Header>
        <h1>Custos</h1>
        <MonthPicker />
        <Busca style={{ marginLeft: 20 }} />
      </Header>
      <Content>
        <TabDashboard tabs={tabs} />
      </Content>
    </Container>
  );
}

export default Custos;
