import React from 'react';

import { Container } from './styles';

function AdicionarRow({ onClick }) {
  return (
    <Container>
      <button className="btn" onClick={onClick}>Adicionar +</button>
    </Container>
);
}

export default AdicionarRow;
