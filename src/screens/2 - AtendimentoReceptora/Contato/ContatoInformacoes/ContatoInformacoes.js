import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

import { Container, Header, Questionario } from './styles';
import LabelValue from '~/components/LabelValue';
import FichaInformacoes from '~/components/FichaInformacoes';

function ContatoInformacoes() {
  return (
    <Container>
      <Header>
        <div className="row">
          <div className="info">
            <div className="col mr-40">
              <label>PIN</label>
              <span>123456</span>
            </div>
            <div className="col mr-80">
              <label>Contato</label>
              <span>emaildoadora@email.com.br</span>
            </div>
            <div className="col mr-40">
              <label>CPF</label>
              <span>000.000.000-00</span>
            </div>
            <div className="col mr-40">
              <label>RG</label>
              <span>0000000 XXXX/XX</span>
            </div>
            <div className="col mr-40">
              <label>Nascimento</label>
              <span>20/03/1986</span>
            </div>
          </div>
        </div>
      </Header>
      <Questionario>
        <fieldset>
          <legend>QUESTIONÁRIO</legend>
          <div className="info">
            <div className="icon-value">
              <FiCalendar size={15} color="#BCBCBC" />
              <span>19/04/2019</span>
            </div>
            <div className="icon-value">
              <FiMapPin size={15} color="#BCBCBC" />
              <span>Vila Mariana</span>
            </div>
            <LabelValue label="Tipo de Tratamento">Ovodação</LabelValue>
            <LabelValue label="Médico">Eduardo Botelho</LabelValue>
          </div>
          <div className="fichas">
            <FichaInformacoes titulo="Receptora" />
            <FichaInformacoes titulo="Cônjuge/Parceiro" type="man" />
          </div>
          <div className="consideracoes">
            <h2>Considerações</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>

          <div className="controller">
            <button className="btn">Validar questionário</button>
          </div>
        </fieldset>
      </Questionario>
    </Container>
  );
}

export default ContatoInformacoes;
