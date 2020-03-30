import React, { memo } from 'react';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';
import MuiInput from '~/components/MuiInput';

function InformacoesGerais({ formik }) {
  const { values, handleChange } = formik;

  return (
    <Container>
      <LabelValue label="Nome da Paciente">{values.receiver_name}</LabelValue>
      <div className="grid">
        <MuiInput
          label="Etnia (Raça) Paciente"
          name="receiver_etnia"
          value={values.receiver_etnia}
          onChange={handleChange}
        />
        <MuiInput
          label="Ascendência Paciente"
          name="receiver_ascendance"
          value={values.receiver_ascendance}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <MuiInput
          label="Nome Cônjuge / Parceira"
          name="partner_name"
          value={values.partner_name}
          onChange={handleChange}
        />
      </div>
      <div className="grid">
        <MuiInput
          label="Etnia (Raça) Cônjuge"
          name="partner_etnia"
          value={values.partner_etnia}
          onChange={handleChange}
        />
        <MuiInput
          label="Ascendência Cônjuge"
          name="partner_ascendance"
          value={values.partner_ascendance}
          onChange={handleChange}
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

export default memo(InformacoesGerais);
