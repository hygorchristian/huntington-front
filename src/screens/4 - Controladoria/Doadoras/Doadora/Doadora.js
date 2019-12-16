import React from 'react';

import {
  Container, Header, Content
} from './styles';
import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import tabs from './tabs';


function Doadora() {
  return (
    <Container>
      <Voltar label="Doadoras" route="/controladoria/doadoras" />
      <Header>
        <h1>Maria Carolina do Rosário</h1>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} />
      </Content>
    </Container>
  );
}

export default Doadora;
