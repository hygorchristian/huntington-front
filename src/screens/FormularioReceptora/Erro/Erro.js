import React from 'react';

import { Cancel } from '@material-ui/icons';
import { Container } from './styles';

function Erro() {
  const data = '20/20/2020';
  return (
    <Container>
      <img src="/img/logo-dark.svg" />
      <div className="info">
        <Cancel style={{ color: 'rgba(209,85,85,0.5)', fontSize: 40 }} />
        <h2>Questionário inválido!</h2>
        <p className="disclaimer">Entre em contato com a equipe da Huntington para receber um questionário válido.</p>
      </div>
    </Container>
  );
}

export default Erro;
