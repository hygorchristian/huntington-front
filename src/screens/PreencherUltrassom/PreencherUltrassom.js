import React from 'react';

import { Container, Content, Header } from './styles';
import Voltar from '../../components/Voltar';
import CheckLabel from '../../components/CheckLabel';
import InputLabel from '../../components/InputLabel';

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
        <InputLabel
          label="Contagem de folículos"
        />
        <CheckLabel
          label="Apta para doação?"
          placeholder="Obervação"
        />
        <textarea placeholder="Observação" />
        <div className="separator" />
        <div className="controller">
          <button className="btn">Concluir</button>
        </div>
      </Content>
    </Container>
  );
}

export default PreencherUltrassom;
