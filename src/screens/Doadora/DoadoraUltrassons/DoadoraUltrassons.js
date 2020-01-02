import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';
import AdicionarRow from '~/components/AdicionarRow';

function DoadoraUltrassons({ history }) {
  const preencher = () => {
    history.push('/doadora/detalhes/1/ultrassons/preencher');
  };

  return (
    <Container>
      <AdicionarRow onClick={preencher} label="Preencher" />
    </Container>
);
}

export default withRouter(DoadoraUltrassons);
