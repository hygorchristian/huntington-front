import React from 'react';

import { Container } from './styles';
import { Content, Header } from '../../components/NovoHistorico/styles';
import Voltar from '../../components/Voltar';

function PreencherUltrassom() {
  return (
    <Container>
      <Voltar
        route="/doadora/1"
        label="Ultrassons | Maria Carolina do Rosário"
      />
      <Header>
        <h1>Ultrassom</h1>
      </Header>
      <Content>
        ss
      </Content>
    </Container>
  );
}

export default PreencherUltrassom;
