import React from 'react';

import Coletas from './Coletas';
import Descongelamento from './Descongelamento';
import Transporte from './Transporte';

export const getIndex = (name) => {
  switch (name) {
    case 'coletas': return 0;
    case 'descongelamento': return 1;
    case 'transporte': return 2;
    default: return 0;
  }
};

export default [
  {
    label: 'Coletas',
    content: <Coletas />,
    url: 'coletas'
  },
  {
    label: 'Descongelamento',
    content: <Descongelamento />,
    url: 'descongelamento'
  },
  {
    label: 'Transporte',
    content: <Transporte />,
    url: 'transporte'
  },
];
