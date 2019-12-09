import React from 'react';
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi';

import { Container } from './styles';
import IconLabel from '~/components/IconLabel';

function Historico() {
  return (
    <Container>
      <fieldset>
        <legend>AVISO DE RESERVA</legend>
        <div className="data">
          <IconLabel name="calendar">19/04/2019</IconLabel>
          <IconLabel name="map-pin">Vila Mariana</IconLabel>
          <IconLabel name="doctor">Carol Silva</IconLabel>
        </div>
      </fieldset>
    </Container>
);
}

export default Historico;
