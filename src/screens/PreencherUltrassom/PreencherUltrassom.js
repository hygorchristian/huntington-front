import React from 'react';

import { Container, Content, Header } from './styles';
import Voltar from '~/components/Voltar';
import MuiInput from '~/components/MuiInput';
import MuiBooleanValue from '~/components/MuiBooleanValue';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';

function PreencherUltrassom() {
  return (
    <Container>
      <Voltar
        route="/doadora/detalhes/1"
        label="Ultrassons | Maria Carolina do Rosário"
      />
      <Header>
        <h1>Ultrassom</h1>
      </Header>
      <Content>
        <MuiInput
          label="Contagem de folículos"
        />
        <MuiBooleanValue
          mt={20}
          label="Apta para doação?"
          placeholder="Observação"
        />
        <MuiTextarea
          label="Observação"
          placeholder="Escreva a observação"
        />
        <div className="separator" />
        <div className="controller">
          <Botao endIcon="check">Concluir</Botao>
        </div>
      </Content>
    </Container>
  );
}

export default PreencherUltrassom;
