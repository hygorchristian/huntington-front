import CicloCasado from '~/screens/3 - AtendimentoFinanceiro/CiclosCasados/CicloCasado';
import CiclosCasadosFinanceiro from '~/screens/3 - AtendimentoFinanceiro/CiclosCasados';

export default [
  {
    label: 'Ciclos Casados',
    path: '/financeiro/ciclos-casados',
    component: CiclosCasadosFinanceiro,
  },
  {
    path: '/financeiro/ciclos-casados/:id',
    component: CicloCasado
  }
];
