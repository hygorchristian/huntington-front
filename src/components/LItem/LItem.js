import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { Create, History } from '@material-ui/icons';
import MuiSelect from '~/components/MuiSelect';
import OptionsButton from '~/components/OptionsButton';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';
import DialogLItem from '~/components/DialogLItem';
import MuiInput from '~/components/MuiInput';
import { showErrorMessage } from '~/utils/notistack';
import Api from '~/services/api';

function LItem({ bank, donor, ...props }) {
  const [editOpen, setEditOpen] = useState(false);
  const [receptora, setReceptora] = useState(null);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    if (receptora) {
      setStatus(e.target.value);

      Api.createBondCicle({
        medic: 'string',
        donor_pin: donor.id,
        receiver_pin: receptora.id,
        reservation_type: e.target.value,
        reservation_date: new Date(),
        ovulebanks: [bank.id],
      }).then((response) => {
        console.tron.log({ response });
      }).catch((err) => {
        console.tron.error(err);
      });
    } else {
      showErrorMessage('Você deve selecionar uma receptora.');
    }
  };

  return (
    <>
      <Container>
        <span className="label">{bank.reference}</span>
        <div className="separator-v" />
        <div className="status">
          <MuiSelect
            name="status"
            label="Status"
            style={{ width: 200 }}
            handleChange={handleChange}
            value={status}
            disabled={!receptora}
          >
            <MenuItem value="avaliacao">Em avaliação</MenuItem>
            <MenuItem value="reservado">Reservado</MenuItem>
            <MenuItem value="substituicao">Substituição</MenuItem>
          </MuiSelect>
          {/* <LabelValue label="Saída">20/03/2019</LabelValue> */}
        </div>
        <div className="grid">
          {receptora && (
            <>
              <LabelValue label="PIN Receptora">{receptora.pin}</LabelValue>
              <LabelValue label="Nome Receptora">{receptora.name}</LabelValue>
              {/* <LabelValue label="Médico Responsável">1234567</LabelValue> */}
              {/* <LabelValue label="Unidade">1234567</LabelValue> */}
            </>
          )}
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
      <DialogLItem
        onReceptora={(val) => setReceptora(val)}
        open={editOpen}
        onClose={() => setEditOpen(false)}
      />
    </>
  );
}

export default LItem;
