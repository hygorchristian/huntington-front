import React from 'react';
import Informacoes from './Informacoes';
import Coletas from './Coletas';
import Custos from './Custos';

export default [
  {
    label: 'Informações',
    content: <Informacoes />
  },
  {
    label: 'Custos',
    content: <Custos />
  },
  {
    label: 'Coletas',
    content: <Coletas />
  },
];
