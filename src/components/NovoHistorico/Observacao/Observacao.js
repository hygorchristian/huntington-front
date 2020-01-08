import React from 'react';

import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';
import { Container } from './styles';

function Observacao() {
  return (
    <Container>
      <MuiTextarea label="Descrição" placeholder="Descreva aqui" />
      <div className="separator" />
      <div className="controllers">
        <Botao endIcon="close" color="">Cancelar</Botao>
        <Botao endIcon="check">Concluir</Botao>
      </div>
    </Container>
  );
}

export default Observacao;
