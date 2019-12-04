import React from 'react';

import {
  Container, Header, Content
} from './styles';
import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import tabs from './tabs';

function Coleta() {
  return (
    <Container>
      <Voltar label="Dashboard" route="/embriologia/dashboard" />
      <Header>
        <h1>Manoela Soares</h1>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} />
      </Content>
    </Container>
  );
}

export default Coleta;
