import React from 'react';

import { Container } from './styles';
import MuiInput from '~/components/MuiInput';
import LabelValue from '~/components/LabelValue';
import MuiDatePicker from '~/components/MuiDatePicker';
import Botao from '~/components/Botao';
import OvuloColetaInput from '~/components/OvuloColetaInput';

function Form1({ formik, onNext }) {
  return (
    <Container>
      <div className="form">
        <MuiInput
          className="form-pin"
          label="PIN Doadora"
        />
        <LabelValue className="form-nome" label="Nome">Carolina Marrocos</LabelValue>
        <MuiDatePicker className="form-data" label="Data da Coleta" />

        <OvuloColetaInput
          className="form-input"
          formik={formik}
        />

        <MuiInput className="form-metodo" label="Método" />
        <MuiInput className="form-tanque" label="Tanque" />
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
