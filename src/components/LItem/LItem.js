import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { Create, History } from '@material-ui/icons';
import MuiSelect from '~/components/MuiSelect';
import OptionsButton from '~/components/OptionsButton';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';
import DialogLItem from '~/components/DialogLItem';

function LItem({ ...props }) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <Container>
        <span className="label">L1</span>
        <div className="separator-v" />
        <div className="status">
          <MuiSelect
            name="status"
            label="Status"
            style={{ width: 200 }}
          >
            <MenuItem value="avaliacao">Em avaliação</MenuItem>
            <MenuItem value="reservado">Reservado</MenuItem>
            <MenuItem value="substituicao">Substituição</MenuItem>
          </MuiSelect>
          <LabelValue label="Saída">20/03/2019</LabelValue>
        </div>
        <div className="grid">
          <LabelValue label="PIN Receptora">1234567</LabelValue>
          <LabelValue label="Nome Receptora">1234567</LabelValue>
          <LabelValue label="Médico Responsável">1234567</LabelValue>
          <LabelValue label="Unidade">1234567</LabelValue>
        </div>
        <div className="grid">
          <LabelValue label="#Óvulos">7</LabelValue>
          <LabelValue label="#Palhetas">2</LabelValue>
        </div>
        <OptionsButton options={[
          {
            label: 'Editar',
            click: () => setEditOpen(true),
            icon: <Create />
          },
          {
            label: 'Histórico',
            click: () => console.log('hello'),
            icon: <History />
          },
        ]}
        />
      </Container>
      <DialogLItem open={editOpen} onClose={() => { setEditOpen(false); }} />
    </>
  );
}

export default LItem;
