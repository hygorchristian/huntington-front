import React from 'react';
import {
 FiCalendar, FiMapPin, FiCheckCircle, FiUser
} from 'react-icons/fi';

import { Container } from './styles';
import { SUCCESS } from '~/utils/colors';

function ResultadoPrimeiraConsulta({ data }) {
  if (!data) {
    return null;
  }

  return (
    <Container>
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
            <FiCheckCircle size={14} color={SUCCESS} />
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

    </Container>
);
}

export default ResultadoPrimeiraConsulta;
