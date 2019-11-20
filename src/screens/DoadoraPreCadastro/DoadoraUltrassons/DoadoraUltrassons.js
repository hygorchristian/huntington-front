import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';

function DoadoraUltrassons({ history }) {
  const preencher = () => {
    history.push('/doadora/detalhes/1/ultrassons/preencher');
  };

  return (
    <Container>
      <div className="preencher">
        <button className="btn" onClick={preencher}>Preencher +</button>
      </div>
    </Container>
);
}

export default withRouter(DoadoraUltrassons);
