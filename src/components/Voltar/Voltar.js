import React from 'react';
import { withRouter } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Container } from './styles';

function Voltar({ history, route, label }) {
  const navigate = () => {
    history.push(route);
  };

  return (
    <Container onClick={navigate}>
      <FiChevronLeft />
      <h3>{label}</h3>
    </Container>
);
}

export default withRouter(Voltar);
