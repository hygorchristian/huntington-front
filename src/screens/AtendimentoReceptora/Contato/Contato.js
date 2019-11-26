import React from 'react';

import {
  Container, Header, Content
} from './styles';
import TabDashboard from '../../../components/TabDashboard';
import DoadoraInformacoes from './ContatoInformacoes';
import Voltar from '../../../components/Voltar/Voltar';

const tabs = [
  {
    label: 'Informações',
    content: <DoadoraInformacoes />
  },
];

function Contato() {
  return (
    <Container>
      <Voltar label="Contatos" route="/receptora/contatos" />
      <Header>
        <h1>Carolina Marrocos</h1>
        <h3>Cadastro em 10/09/2019</h3>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} />
      </Content>
    </Container>
  );
}

export default Contato;
