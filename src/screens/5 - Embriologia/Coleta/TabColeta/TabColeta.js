import React from 'react';
import {
  FiCalendar
} from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';

import { Container } from './styles';
import IconLabel from '~/components/IconLabel';
import Botao from '~/components/Botao';

function TabColeta() {
  const history = useHistory();
  const { doadora } = useParams();

  const adicionarColeta = () => {
    history.push(`/embriologia/dashboard/coletas/${doadora}/nova-coleta`);
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
            <Botao color="primary" endIcon="add" onClick={adicionarColeta}>Coleta</Botao>
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

export default TabColeta;
