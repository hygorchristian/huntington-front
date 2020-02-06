import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Container, Group } from './styles';

function TipoTratamento() {
  return (
    <Container>
      <Group value={0} onChange={() => {}}>
        <FormControlLabel value="ovodacao" control={<Radio />} label="Ovodação" color="primary" />
        <FormControlLabel value="embrioacao" control={<Radio />} label="Embrioação" color="primary" />
      </Group>
      <p>Obrigatoriedade de Tipagem sanguínea da doadora/casal doador:</p>
      <Group value={0} onChange={() => {}}>
        <FormControlLabel value="compativel" control={<Radio />} label="Compatível" color="primary" />
        <FormControlLabel value="nao_compativel" control={<Radio />} label="Não compatível" color="primary" />
      </Group>
    </Container>
);
}

export default TipoTratamento;
