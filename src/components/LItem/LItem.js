import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { Create, History } from '@material-ui/icons';
import MuiSelect from '~/components/MuiSelect';
import OptionsButton from '~/components/OptionsButton';

import { Container } from './styles';

const loptions = [
  {
    label: 'Editar',
    click: () => console.log('hello'),
    icon: <Create />
  },
  {
    label: 'Histórico',
    click: () => console.log('hello'),
    icon: <History />
  },
];

function LItem({ ...props }) {
  return (
    <Container>
      <span className="label">L1</span>
      <div className="separator-v" />
      <MuiSelect
        name="status"
        label="Status"
        style={{ width: 200 }}
      >
        <MenuItem value="avaliacao">Em avaliação</MenuItem>
        <MenuItem value="reservado">Reservado</MenuItem>
        <MenuItem value="substituicao">Substituição</MenuItem>
      </MuiSelect>
      <div className="flex" />
      <OptionsButton options={loptions} />
    </Container>
  );
}

export default LItem;
