import React from 'react';
import { withRouter } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi';

import { Container } from './styles';

function DoadoraHistorico({ history }) {
  const adicionarHistorico = () => {
    history.push('/doadora/detalhes/1/novo-historico');
  };

  return (
    <Container>
      <div className="adicionar-historico">
        <button className="btn" onClick={adicionarHistorico}>Adicionar +</button>
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

export default withRouter(DoadoraHistorico);
