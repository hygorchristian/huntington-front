import React from 'react';

import {
  Container, Header,
} from './styles';

function Reclamacoes({ label }) {
  return (
    <Container>
      <Header>
        <h1>{label}</h1>
      </Header>
    </Container>
  );
}

export default Reclamacoes;
