import React from 'react';

import { Container, Fieldset } from './styles';
import Botao from '~/components/Botao';

function AdicionarRow({ onClick, label, context }) {
  if (context) {
    return (
      <Fieldset>
        <legend>{context}</legend>
        <div className="content">
          <Botao startIcon="add" onClick={onClick}>{label}</Botao>
        </div>
      </Fieldset>
    );
  }

  return (
    <Container>
      <Botao startIcon="add" onClick={onClick}>{label}</Botao>
    </Container>
  );
}

export default AdicionarRow;
