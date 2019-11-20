import React from 'react';
import { withRouter } from 'react-router-dom';
import {
 FiCalendar, FiMapPin, FiUser, FiCheckCircle
} from 'react-icons/fi';

import { Container } from './styles';

function DoadoraHistorico({ history }) {
  const adicionarHistorico = () => {
    history.push('/doadora/detalhes/1/novo-registro');
  };

  return (
    <Container>
      <div className="adicionar-historico">
        <button className="btn" onClick={adicionarHistorico}>Adicionar +</button>
      </div>
      <fieldset>
        <legend>DOADORA PROGRAMADA</legend>
        <div className="data">
          <FiCalendar size={14} color="#BCBCBC" />
          <span>19/04/2019</span>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="check-label">
            <span>Ultrassom</span>
            <FiCheckCircle size={14} color="#42D16D" />
          </div>
          <div className="check-label">
            <span>Exames</span>
            <FiCheckCircle size={14} color="#42D16D" />
          </div>
          <div className="check-label">
            <span>Ultrassom</span>
            <FiCheckCircle size={14} color="#42D16D" />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>1ª consulta</legend>
        <div className="data">
          <FiCalendar size={14} color="#BCBCBC" />
          <span>19/04/2019</span>
          <FiMapPin size={14} color="#BCBCBC" />
          <span>Vila Mariana</span>
          <FiUser size={14} color="#BCBCBC" />
          <span>Dr. Thalita Gomes</span>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="check-label">
            <FiCheckCircle size={14} color="#42D16D" />
            <span style={{ marginLeft: 10 }}>Questionário</span>
          </div>
          <div className="col">
            <label>D.U.M</label>
            <span>05/05/2019</span>
          </div>
          <div className="col">
            <label>Indicação</label>
            <span>Sim</span>
          </div>
          <div className="col">
            <label>
              Entrou para programa de doação?
            </label>
            <span>Sim</span>
          </div>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col">
            <label>Anotações</label>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
          </div>
        </div>
      </fieldset>
      <fieldset style={{ marginBottom: 100 }}>
        <legend>cadastro | MUTIRÃO DIA DA SAÚDE</legend>
        <div className="data">
          <FiCalendar size={14} color="#BCBCBC" />
          <span>19/04/2019</span>
          <FiMapPin size={14} color="#BCBCBC" />
          <span>Vila Mariana</span>
          <FiUser size={14} color="#BCBCBC" />
          <span>Lorena Martins | Recepção</span>
        </div>
      </fieldset>
    </Container>
);
}

export default withRouter(DoadoraHistorico);
