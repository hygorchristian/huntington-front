import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi';

import { Container } from './styles';
import Botao from '~/components/Botao';

function DoadoraHistorico({ history }) {
  const { id, doadora } = useParams();

  const adicionarHistorico = () => {
    history.push(`/doadora/pre-cadastros/${id}/${doadora}/adicionar-historico`);
  };

  return (
    <Container>
      <div className="adicionar-historico">
        <Botao startIcon="add" onClick={adicionarHistorico}>Adicionar</Botao>
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
