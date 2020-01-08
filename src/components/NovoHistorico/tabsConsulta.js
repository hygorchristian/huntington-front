import React from 'react';

import Consulta from './Consulta';
import Observacao from './Observacao';
import Desistencia from './Desistencia';

export default [
  {
    id: 1,
    component: <Consulta />,
    label: 'Consulta'
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
