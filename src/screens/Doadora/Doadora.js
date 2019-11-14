import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import {
 Container, Header, Voltar, Content
} from './styles';
import TabDashboard from '../../components/TabDashboard';
import DoadoraInformacoes from '../DoadoraInformacoes';
import DoadoraHistorico from '../DoadoraHistorico';
import DoadoraExames from '../DoadoraExames';
import DoadoraUltrassons from '../DoadoraUltrassons';

const tabs = [
  {
    label: 'Informações',
    content: DoadoraInformacoes
  },
  {
    label: 'Histórico',
    content: DoadoraHistorico
  },
  {
    label: 'Exames',
    content: DoadoraExames
  },
  {
    label: 'Ultrassons',
    content: DoadoraUltrassons
  }
];

function Doadora({ history }) {
  const navigate = () => {
    history.push('/pre-cadastros/1');
  };

  return (
    <Container>
      <Voltar onClick={navigate}>
        <FiChevronLeft />
        <h3>Mutirão dia da Saúde</h3>
      </Voltar>
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
