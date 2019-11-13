import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

function Busca(props) {
  return (
    <Container {...props}>
      <FiSearch size={16} color="#707070" />
      <input placeholder="Busque por nome, data" />
      <button>Filtrar</button>
    </Container>
);
}

export default Busca;
