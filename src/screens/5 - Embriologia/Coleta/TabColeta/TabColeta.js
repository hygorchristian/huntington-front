import React from 'react';
import {
  FiCalendar, FiCheckCircle, FiClock, FiAlertCircle, FiPlusCircle, FiXCircle
} from 'react-icons/fi';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';
import IconLabel from '~/components/IconLabel';

function TabColeta({ history }) {
  const adicionarColeta = () => {
    history.push('/doadora/detalhes/1/exames/nova-coleta');
  };

  const inserirResultado = () => {
    history.push('/doadora/detalhes/1/exames/resultado');
  };

  return (
    <Container>

      {/* AGENDADAS */}

      <div className="header">
        <h2>AGENDADAS</h2>
        <div className="line" />
      </div>
      <fieldset>
        <legend>
          <FiCalendar />
          <span>28/04/2019 às 10:00 | Segunda Coleta</span>
        </legend>
        <div className="data">
          <IconLabel name="map-pin">Vila Mariana</IconLabel>
          <div className="adicionar-coleta">
            <button className="btn">Coleta +</button>
          </div>
        </div>
      </fieldset>

      {/* REALIZADAS */}

      <div className="header">
        <h2>REALIZADAS</h2>
        <div className="line" />
      </div>
      <fieldset>
        <legend>
          <FiCalendar />
          <span>28/04/2019 às 10:00 | Primeira Coleta</span>
        </legend>
        <div className="data">
          <IconLabel name="map-pin">Vila Mariana</IconLabel>
          <div className="contagem">
            <span>Contagem de óvulos maduros</span>
            <span className="quantidade">14</span>
          </div>
        </div>
      </fieldset>
    </Container>
  );
}

export default withRouter(TabColeta);
