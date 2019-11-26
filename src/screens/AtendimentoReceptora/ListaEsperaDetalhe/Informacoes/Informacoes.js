import React from 'react';

import {
 Container, Info, InfoExtra, Questionario
} from './styles';
import LabelValue from '~/components/LabelValue';
import FichaInformacoes from '~/components/FichaInformacoes';

function Informacoes() {
  return (
    <Container>
      <Info>
        <LabelValue label="Período"><span>Set/2018</span></LabelValue>
        <LabelValue label="PIN"><span>12345678</span></LabelValue>
        <LabelValue label="ABO"><span>A+</span></LabelValue>
        <LabelValue label="ABO2"><span>O-</span></LabelValue>
        <LabelValue label="Perfil"><span>Branca</span></LabelValue>
        <LabelValue label="Status"><span>Em avaliação</span></LabelValue>
      </Info>
      <InfoExtra>
        <div className="left">
          <LabelValue label="Médico"><span>Gabriela Braun</span></LabelValue>
          <LabelValue label="Unidade"><span>Vila Mariana</span></LabelValue>
          <LabelValue label="Tipo de Ciclo"><span>FET</span></LabelValue>
          <LabelValue label="Observação"><span>-</span></LabelValue>
        </div>
        <div className="right">
          <LabelValue label="OD1"><span>12345678</span></LabelValue>
          <LabelValue label="OD2"><span>12345678</span></LabelValue>
          <LabelValue label="OD3"><span>12345678</span></LabelValue>
        </div>
      </InfoExtra>
      <Questionario>
        <legend>Questionário</legend>
        <div className="fichas">
          <FichaInformacoes titulo="Receptora" />
          <FichaInformacoes titulo="Cônjuge/Parceiro" />
        </div>
        <div className="consideracoes">
          <h2>Considerações</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </Questionario>
    </Container>
);
}

export default Informacoes;
