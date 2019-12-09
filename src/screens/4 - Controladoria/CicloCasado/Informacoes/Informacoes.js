import React from 'react';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';

function Informacoes() {
  return (
    <Container>
      <div className="row">
        <div className="info">
          <LabelValue label="Tipo de Reserva">Banco</LabelValue>
          <LabelValue label="Lotes">1</LabelValue>
          <LabelValue label="Óvulos">7</LabelValue>
        </div>
        <div className="info" style={{ width: 360 }}>
          <LabelValue label="Reserva em">25/08/19</LabelValue>
          <LabelValue label="Financeiro">Em aberto</LabelValue>
          <LabelValue label="NF">-</LabelValue>
        </div>
      </div>
      <div className="grid">
        <LabelValue label="Médico">Gabriela Braun</LabelValue>
        <LabelValue label="Unidade">Vila Mariana</LabelValue>
        <LabelValue label="Semem">Doador</LabelValue>
        <LabelValue label="Documentos">Em aberto</LabelValue>
        <LabelValue label="Transporte">Em aberto</LabelValue>
        <LabelValue label="Aviso de FOT/FET">Em aberto</LabelValue>
      </div>
    </Container>
  );
}

export default Informacoes;
