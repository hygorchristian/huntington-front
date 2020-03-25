import React from 'react';
import Informacoes from './Informacoes';
import Historico from './Historico';
import Exames from './Exames';
import Ultrassons from './Ultrassons';
import TabColeta from './TabColeta';

export const getIndex = (name) => {
  switch (name) {
    case 'info': return 0;
    case 'historico': return 1;
    case 'exames': return 2;
    case 'ultrassons': return 3;
    case 'coleta': return 4;
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
  {
    label: 'Exames',
    content: <Exames />,
    url: 'exames'
  },
  {
    label: 'Ultrassons',
    content: <Ultrassons />,
    url: 'ultrassons'
  },
  {
    label: 'Coleta',
    content: <TabColeta />,
    url: 'coleta'
  },
];
