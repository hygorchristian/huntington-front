import React from 'react';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';
import MuiInput from '~/components/MuiInput';

function InformacoesGerais({ formik }) {
  return (
    <Container>
      <LabelValue label="Nome da Paciente">Carolina Marrocos</LabelValue>
      <div className="grid">
        <MuiInput
          label="Etnia (Raça) Paciente"
        />
        <MuiInput
          label="Ascendência Paciente"
        />
      </div>
      <div className="row">
        <MuiInput
          label="Nome Cônjuge / Parceira"
        />
      </div>
      <div className="grid">
        <MuiInput
          label="Etnia (Raça) Cônjuge"
        />
        <MuiInput
          label="Ascendência Cônjuge"
        />
      </div>
      <div className="row">
        <MuiInput
          label="Médico (a)"
        />
      </div>
    </Container>
);
}

export default InformacoesGerais;
