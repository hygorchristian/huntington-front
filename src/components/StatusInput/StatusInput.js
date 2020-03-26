import React, { useState } from 'react';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';
import MuiInput from '~/components/MuiInput';
import MuiCheckbox from '~/components/MuiCheckbox';

function StatusInput({
 l, ovulos, setOvulos, palhetas, setPalhetas
}) {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <h1>{l}</h1>
      <div className="v-separator" />
      <LabelValue label="Status">Disponível</LabelValue>
      <div className="space" />
      {ovulos < 7 && <MuiCheckbox label="Backup" value={checked} onChange={() => setChecked(true)} />}
      <MuiInput
        style={{ marginLeft: 10, width: 250 }}
        label="#óvulos"
        type="number"
        value={ovulos}
        onChange={setOvulos}
      />
      <MuiInput
        style={{ marginLeft: 10, width: 250 }}
        label="#palhetas"
        type="number"
        value={palhetas}
        onChange={setPalhetas}
      />
    </Container>
);
}

export default StatusInput;
