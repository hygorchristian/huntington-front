import React from 'react';

import {
 Container, Header, Content
} from './styles';
import TabDashboard from '../../components/TabDashboard';
import DoadoraInformacoes from './DoadoraInformacoes';
import DoadoraHistorico from './DoadoraHistorico';
import DoadoraExames from './DoadoraExames';
import DoadoraUltrassons from './DoadoraUltrassons';
import Voltar from '../../components/Voltar/Voltar';

const tabs = [
  {
    label: 'Informações',
    content: <DoadoraInformacoes />
  },
  {
    label: 'Histórico',
    content: <DoadoraHistorico />
  },
  {
    label: 'Exames',
    content: <DoadoraExames />
  },
  {
    label: 'Ultrassons',
    content: <DoadoraUltrassons />
  },
  {
    label: 'Coleta',
    content: <DoadoraUltrassons />
  },
];

function Doadora() {
  return (
    <Container>
      <Voltar label="Doadoras" route="/doadora/listagem" />
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
