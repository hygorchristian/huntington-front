import React from 'react';
import DoadoraInformacoes from './DoadoraInformacoes';
import DoadoraHistorico from './DoadoraHistorico';
import DoadoraExames from './DoadoraExames';
import DoadoraUltrassons from './DoadoraUltrassons';

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
    content: <DoadoraInformacoes />,
    url: 'info',
  },
  {
    label: 'Histórico',
    content: <DoadoraHistorico />,
    url: 'historico',
  },
  {
    label: 'Exames',
    content: <DoadoraExames />,
    url: 'exames',
  },
  {
    label: 'Ultrassons',
    content: <DoadoraUltrassons />,
    url: 'ultrassons',
  },
  {
    label: 'Coleta',
    content: <DoadoraUltrassons />,
    url: 'coleta'
  },
];
