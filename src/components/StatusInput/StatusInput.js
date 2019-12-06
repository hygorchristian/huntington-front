import React from 'react';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';
import InputLabel from '~/components/InputLabel';

function StatusInput({ l }) {
  return (
    <Container>
      <h1>{l}</h1>
      <div className="v-separator" />
      <LabelValue label="Status">Disponível</LabelValue>
      <div className="space" />
      <InputLabel style={{ marginLeft: 10 }} light label="#óvulos" type="number" width={70} />
      <InputLabel style={{ marginLeft: 10 }} light label="#palhetas" type="number" width={70} />
    </Container>
);
}

export default StatusInput;
