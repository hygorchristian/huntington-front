import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { Container } from './styles';
import MuiSelect from '~/components/MuiSelect';

function UnidadesAtendimento() {
  return (
    <Container>
      <MuiSelect
        style={{ width: 300 }}
        name="status"
        label="Unidade de Atendimento"
      >
        <MenuItem value="ibirapuera">Ibirapuera</MenuItem>
        <MenuItem value="vila_mariana">Vila Mariana</MenuItem>
        <MenuItem value="campinas">Campinas</MenuItem>
        <MenuItem value="santa_joana">Santa Joana</MenuItem>
      </MuiSelect>
    </Container>
);
}

export default UnidadesAtendimento;
