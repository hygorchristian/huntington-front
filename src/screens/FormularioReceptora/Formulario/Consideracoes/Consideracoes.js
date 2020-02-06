import React from 'react';

import { Container } from './styles';
import MuiTextarea from '~/components/MuiTextarea';

function Consideracoes() {
  return (
    <Container>
      <span className="label">
        Caso tenha alguma consideração em relação a seleção doadora/casal doador, escreva abaixo:
      </span>
      <MuiTextarea
        label="Considerações"
        placeholder="Descreva aqui"
      />
    </Container>
);
}

export default Consideracoes;
