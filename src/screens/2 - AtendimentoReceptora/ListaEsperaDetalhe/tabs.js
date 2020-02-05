import React from 'react';
import Historico from './Historico';
import Informacoes from './Informacoes';

export const getIndex = (name) => {
  switch (name) {
    case 'info': return 0;
    case 'historico': return 1;
    default: return 0;
  }
};

export default [
  {
    label: 'Informações',
    content: <Informacoes />,
    url: 'info'
  },
  {
    label: 'Histórico',
    content: <Historico />,
    url: 'historico'
  },
];
