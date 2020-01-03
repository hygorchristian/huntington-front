import React from 'react';
import DoadoraInformacoes from './DoadoraInformacoes';
import DoadoraHistorico from './DoadoraHistorico';
import DoadoraExames from './DoadoraExames';
import DoadoraUltrassons from './DoadoraUltrassons';

export default [
  {
    label: 'Informações',
    content: <DoadoraInformacoes />
  },
  {
    label: 'Histórico',
    content: <DoadoraHistorico />
  },
  {
    label: 'Exames',
    content: <DoadoraExames />
  },
  {
    label: 'Ultrassons',
    content: <DoadoraUltrassons />
  },
];
