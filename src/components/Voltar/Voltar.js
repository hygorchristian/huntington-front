import React from 'react';
import { withRouter } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Container } from './styles';

function Voltar({ history, label }) {
  const navigate = () => {
    history.goBack();
  };

  return (
    <Container onClick={navigate}>
      <FiChevronLeft />
      <h3>{label}</h3>
    </Container>
);
}

export default withRouter(Voltar);
