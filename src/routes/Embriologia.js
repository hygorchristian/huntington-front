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
  {
    path: '/embriologia/dashboard/coletas/:id',
    component: Coleta
  },
  {
    path: '/embriologia/dashboard/coletas/:id/nova-coleta',
    component: NovaColeta
  },
];
