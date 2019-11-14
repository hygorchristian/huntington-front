import React from 'react';
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi';

import { Container } from './styles';

function DoadoraHistorico() {
  return (
    <Container>
      <div className="adicionar-historico">
        <button className="btn">Adicionar +</button>
      </div>
      <fieldset>
        <legend>CADASTRO | MUTIRÃO</legend>
        <div className="data">
          <FiCalendar size={14} color="#BCBCBC" />
          <span>19/04/2019</span>
          <FiMapPin size={14} color="#BCBCBC" />
          <span>Vila Mariana</span>
          <FiUser size={14} color="#BCBCBC" />
          <span>Lorena Martins</span>
        </div>
      </fieldset>
    </Container>
);
}

export default DoadoraHistorico;
