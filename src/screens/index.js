import React from 'react';
import {
 FiPieChart, FiEdit3, FiDatabase, FiDroplet, FiTrendingUp
} from 'react-icons/fi';
import Reclamacoes from './Reclamacoes';
import DashboardScreen from './DashboardScreen';
import PreCadastros from './PreCadastros';

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
    component: Reclamacoes,
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
