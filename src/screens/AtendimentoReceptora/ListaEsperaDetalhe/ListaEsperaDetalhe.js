import React from 'react';

import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import tabs from './tabs';

import {
  Container, Header, Content
} from './styles';

function ListaEsperaDetalhe({ history }) {
  return (
    <Container>
      <Voltar label="Lista de Espera" route="/receptora/lista-espera" />
      <Header>
        <h1>Andressa Guimarães</h1>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} />
      </Content>
    </Container>
  );
}

export default ListaEsperaDetalhe;
