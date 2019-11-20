import React from 'react';

import {
  Container, Content, Header
} from './styles';
import Voltar from '../../../components/Voltar';

function NovoHistoricoDoadora() {
  return (
    <Container>
      <Voltar label="Histórico | Maria Carolina do Rosário" route="/doadora/listagem/1" />
      <Header>
        <h1>Novo Registro</h1>
      </Header>
      <Content>
        <div className="buttons-top" />
      </Content>
    </Container>
  );
}

export default NovoHistoricoDoadora;
