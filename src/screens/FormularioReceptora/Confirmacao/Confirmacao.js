import React, { useState } from 'react';
import Api from '~/services/api';

import { Container } from './styles';
import Botao from '~/components/Botao';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';

function Confirmacao({ formik, onNext }) {
  return (
    <Container>
      <img src="/img/logo-dark.svg" alt="logo" />
      <div className="scroll">
        <p> Atesto a veracidade das informações preenchidas (confirmar texto) </p>
        <div className="controls">
          <Botao onClick={formik.submitForm}>Sim, atesto a veracidade dos dados</Botao>
        </div>
      </div>
      <div className="separator" />
      <p className="disclaimer">Este questionário é uma exigência do Ministério da Saúde através da regulamentação federal RDC nº33, art.20 da ANVISA, de maio de 2011</p>

    </Container>
  );
}

export default Confirmacao;
