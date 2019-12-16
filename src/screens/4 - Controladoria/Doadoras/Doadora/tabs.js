import React from 'react';
import Informacoes from './Informacoes';
import Coletas from './Coletas';
import Custos from './Custos';

export default [
  {
    label: 'Custos',
    content: <Custos />
  },
  {
    label: 'Informações',
    content: <Informacoes />
  },
  {
    label: 'Coletas',
    content: <Coletas />
  },
];
