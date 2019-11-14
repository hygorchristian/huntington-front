import React from 'react';

import { Container } from './styles';

function InputTriagem({ data }) {
  return (
    <Container>
      <label>{data.label}</label>
      <button>Sim</button>
      <button>Não</button>
      <input placeholder={data.observacaoPlaceholder} />
    </Container>
);
}

export default InputTriagem;
