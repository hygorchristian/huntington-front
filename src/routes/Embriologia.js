import BancoOvulosDetalhe from '~/screens/5 - Embriologia/BancoOvulosDetalhe';
import Coleta from '~/screens/5 - Embriologia/Coleta';
import NovaColeta from '~/screens/5 - Embriologia/NovaColeta';
import DashboardEmbriologia from '~/screens/5 - Embriologia/DashboardEmbriologia';
import BancoOvulos2 from '~/screens/5 - Embriologia/BancoOvulos';
import EmDesenvolvimento from '~/screens/EmDesenvolvimento';

export default [
  {
    label: 'Dashboard',
    path: '/embriologia/dashboard',
    component: DashboardEmbriologia,
  },
  {
    path: '/',
    component: DashboardEmbriologia,
  },
  {
    path: '/embriologia/dashboard/coletar/:collecting',
    component: NovaColeta
  },
  // {
  //   path: '/embriologia/dashboard/coletas/:doadora',
  //   component: Coleta
  // },
  // {
  //   path: '/embriologia/dashboard/coletas/:doadora/nova-coleta',
  //   component: NovaColeta
  // },
  {
    label: 'Banco de Óvulos',
    path: '/embriologia/banco-ovulos',
    component: BancoOvulos2,
  },
  {
    label: 'Indicadores',
    path: '/embriologia/indicadores',
    component: EmDesenvolvimento,
  },
  {
    path: '/embriologia/banco-ovulos/:id',
    component: BancoOvulosDetalhe
  },
];
