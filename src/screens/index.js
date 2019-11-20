import React from 'react';
import {
 FiPieChart, FiEdit3, FiDatabase, FiDroplet, FiTrendingUp
} from 'react-icons/fi';
import Reclamacoes from './Reclamacoes';
import DashboardScreen from './DashboardScreen';
import PreCadastros from './PreCadastros';
import Doadoras from './Doadoras';

export default [
  {
    label: 'Dashboard',
    icon: FiPieChart,
    path: '/dashboard',
    component: DashboardScreen,
  },
  {
    label: 'Pré-Cadastros',
    icon: FiEdit3,
    path: '/pre-cadastros',
    component: PreCadastros,
  },
  {
    label: 'Doadoras',
    icon: FiDroplet,
    path: '/doadoras',
    component: Doadoras,
    subitems: [
      {
        id: 1,
        label: 'Programadas',
        route: '/doadoras?filter=programadas'
      },
      {
        id: 2,
        label: 'Estimulação',
        route: '/doadoras?filter=estimulacao'
      },
      {
        id: 3,
        label: 'Coletada',
        route: '/doadoras?filter=coleta-realizada'
      },
      {
        id: 4,
        label: 'Stand',
        route: '/doadoras?filter=stand'
      },
      {
        id: 5,
        label: 'CFA',
        route: '/doadoras?filter=cfa'
      },
    ]
  },
  {
    label: 'Resumo do banco',
    icon: FiDatabase,
    path: '/resumo-do-banco',
    component: Reclamacoes,
  },
  {
    label: 'Indicadores',
    icon: FiTrendingUp,
    path: '/indicadores',
    component: Reclamacoes,
  },
];
