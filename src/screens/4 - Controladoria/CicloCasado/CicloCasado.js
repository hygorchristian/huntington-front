import React from 'react';
import Voltar from '~/components/Voltar/Voltar';

import { Container, Content, Header } from './styles';
import TabDashboard from '~/components/TabDashboard';

import tabs from './tabs';

function CicloCasado() {
  return (
    <Container>
      <Voltar label="Ciclos Casados" route="/controladoria/ciclos-casados" />
      <Content>
        <Header>
          <div className="pin">
            <label>PIN Receptora</label>
            <span>12345678</span>
          </div>
          <div className="separator" />
          <div className="pin">
            <label>PIN Doadora</label>
            <span>12345678</span>
          </div>
        </Header>
        <TabDashboard tabs={tabs} />
      </Content>
    </Container>
  );
}

export default CicloCasado;
