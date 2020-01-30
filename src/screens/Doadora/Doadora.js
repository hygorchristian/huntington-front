import React from 'react';
import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import tabs, { getIndex } from './tabs';

import {
  Container, Header, Content
} from './styles';
import { getUrlParam } from '~/utils/url';

function Doadora() {
  const tab = getUrlParam('tab', 'info');
  const index = getIndex(tab);

  return (
    <Container>
      <Voltar label="Doadoras" route="/doadora/listagem" />
      <Header>
        <h1>Maria Carolina do Rosário</h1>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} index={index} />
      </Content>
    </Container>
);
}

export default Doadora;
