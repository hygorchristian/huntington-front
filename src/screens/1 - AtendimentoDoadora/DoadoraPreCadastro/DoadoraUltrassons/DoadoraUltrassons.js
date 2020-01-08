import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Container } from './styles';
import AdicionarRow from '~/components/AdicionarRow';

function DoadoraUltrassons() {
  const history = useHistory();
  const { id, doadora } = useParams();

  const preencher = () => {
    history.push(`/doadora/pre-cadastros/${id}/${doadora}/adicionar-ultrassom`);
  };

  return (
    <Container>
      <AdicionarRow onClick={preencher} label="Preencher" />
    </Container>
);
}

export default DoadoraUltrassons;
