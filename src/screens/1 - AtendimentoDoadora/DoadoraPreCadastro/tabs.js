import React from 'react';
import DoadoraInformacoes from './DoadoraInformacoes';
import DoadoraHistorico from './DoadoraHistorico';
import DoadoraExames from './DoadoraExames';
import DoadoraUltrassons from './DoadoraUltrassons';

export default [
  {
    label: 'Informações',
    content: <DoadoraInformacoes />,
    url: 'info'
  },
  {
    label: 'Histórico',
    content: <DoadoraHistorico />,
    url: 'historico'
  },
  {
    label: 'Exames',
    content: <DoadoraExames />,
    url: 'exames'
  },
  {
    label: 'Ultrassons',
    content: <DoadoraUltrassons />,
    url: 'ultrassons'
  },
];
