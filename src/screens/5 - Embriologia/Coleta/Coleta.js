import React from 'react';

import {
  Container, Header, Content
} from './styles';
import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import tabs, { getIndex } from './tabs';
import { getUrlParam } from '~/utils/url';

function Coleta() {
  const tab = getUrlParam('tab', 'info');
  const index = getIndex(tab);

  return (
    <Container>
      <Voltar label="Dashboard" route="/embriologia/dashboard" />
      <Header>
        <h1>Manoela Soares</h1>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} index={index} />
      </Content>
    </Container>
  );
}

export default Coleta;
