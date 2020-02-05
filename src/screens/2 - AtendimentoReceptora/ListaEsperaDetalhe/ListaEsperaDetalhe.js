import React, { useState } from 'react';

import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import tabs, { getIndex } from './tabs';

import {
  Container, Header, Content
} from './styles';
import { getUrlParam } from '~/utils/url';

function ListaEsperaDetalhe({ history }) {
  const tab = getUrlParam('tab', 'info');
  const index = getIndex(tab);

  return (
    <Container>
      <Voltar label="Lista de Espera" route="/receptora/lista-espera" />
      <Header>
        <h1>Andressa Guimarães</h1>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} index={index} />
      </Content>
    </Container>
  );
}

export default ListaEsperaDetalhe;
