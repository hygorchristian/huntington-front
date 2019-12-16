import React from 'react';

import { Container, Header, Recepcao } from './styles';
import LabelValue from '~/components/LabelValue';

function Custos() {
  return (
    <Container>
      <Header>
        <div className="info">
          <LabelValue label="Entrada">25/05/2019</LabelValue>
          <LabelValue label="Origem">Mutirão</LabelValue>
          <div />
          <LabelValue label="Custos Totais">R$ 6.000,00</LabelValue>
        </div>
      </Header>
    </Container>
  );
}

export default Custos;
