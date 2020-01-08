import React from 'react';

import PrimeiraConsulta from './PrimeiraConsulta';
import Observacao from './Observacao';
import Desistencia from './Desistencia';

export default [
  {
    id: 1,
    component: <PrimeiraConsulta />,
    label: '1ª Consulta'
  },
  {
    id: 2,
    component: <Observacao />,
    label: 'Observação'
  },
  {
    id: 3,
    component: <Desistencia />,
    label: 'Desistência'
  },
];
