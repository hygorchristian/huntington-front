import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import MuiInput from '~/components/MuiInput';
import LabelValue from '~/components/LabelValue';
import MuiDatePicker from '~/components/MuiDatePicker';
import Botao from '~/components/Botao';
import OvuloColetaInput from '~/components/OvuloColetaInput';

function Form1({ formik, onNext, coleta }) {
  const totalOvuleChange = () => {
    let ovules = formik.values.ovule_total;
    let palhetas = formik.values.palhetas;
    const _lotes = [];
    for (let i = 0; i < formik.values.lotes; i++) {
      const _lote = {};

      if (ovules >= 7) {
        ovules -= 7;
        _lote.ovule_count = 7;
      } else {
        _lote.ovule_count = ovules;
      }

      if (palhetas >= 2) {
        palhetas -= 2;
        _lote.pallet_count = 2;
      } else {
        _lote.pallet_count = palhetas;
      }

      _lote.backup = ovules < 7;
      _lote.reference = `L${i + 1}`;

      _lotes.push(_lote);
    }

    formik.setFieldValue('ovulebanks', _lotes);
  };

  useEffect(() => {
    totalOvuleChange();
  }, [formik.values.ovule_total]);

  return (
    <Container>
      <div className="form">
        {/* <MuiInput */}
        {/*  className="form-pin" */}
        {/*  label="PIN Doadora" */}
        {/* /> */}
        <LabelValue className="form-nome" label="Nome">{coleta.donor.name}</LabelValue>
        <MuiDatePicker
          className="form-data"
          label="Data da Coleta"
          name="date"
          value={formik.values.date}
          onChange={(value) => formik.setFieldValue('date', value)}
        />

        <OvuloColetaInput
          className="form-input"
          formik={formik}
        />

        <MuiInput
          className="form-metodo"
          label="Método"
          name="method"
          value={formik.values.method}
          onChange={formik.handleChange}
        />
        <MuiInput
          className="form-tanque"
          label="Tanque"
          name="tank"
          value={formik.values.tank}
          onChange={formik.handleChange}
        />
      </div>
      <div className="separator" />
      <div className="controller">
        <Botao color="primary" endIcon="arrow-right" onClick={onNext}>
          Próximo
        </Botao>
      </div>
    </Container>
  );
}

export default Form1;
