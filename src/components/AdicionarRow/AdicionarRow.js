import React from 'react';

import { Container } from './styles';
import Botao from '~/components/Botao';

function AdicionarRow({ onClick, label }) {
  return (
    <Container>
      <Botao startIcon="add" onClick={onClick}>{label}</Botao>
    </Container>
);
}

export default AdicionarRow;
