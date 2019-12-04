import React from 'react';
import Informacoes from './Informacoes';
import Historico from './Historico';
import Exames from './Exames';
import Ultrassons from './Ultrassons';
import TabColeta from './TabColeta';

export default [
  {
    label: 'Informações',
    content: <Informacoes />
  },
  {
    label: 'Histórico',
    content: <Historico />
  },
  {
    label: 'Exames',
    content: <Exames />
  },
  {
    label: 'Ultrassons',
    content: <Ultrassons />
  },
  {
    label: 'Coleta',
    content: <TabColeta />
  },
];
