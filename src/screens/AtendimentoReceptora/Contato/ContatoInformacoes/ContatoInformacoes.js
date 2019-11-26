import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Questionario } from './styles';

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
          <div className="content">
            <div className="item">
              <label>Enviado em</label>
              <span className="value">10/09/2019</span>
            </div>
            <div className="item">
              <label>Por</label>
              <span className="value">Carol Silva</span>
            </div>
          </div>
        </fieldset>
      </Questionario>
    </Container>
  );
}

export default ContatoInformacoes;
