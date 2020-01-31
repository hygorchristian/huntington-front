import Estoque from '~/screens/4 - Controladoria/Estoque';
import CicloCasado from '~/screens/4 - Controladoria/CicloCasado';
import Doadora from '~/screens/4 - Controladoria/Doadoras/Doadora';
import Coleta from '~/screens/4 - Controladoria/Doadoras/Doadora/Coletas/Coleta';
import ControladoriaDashboard from '~/screens/4 - Controladoria/Dashboard';
import Estoques from '~/screens/4 - Controladoria/Estoques';
import CiclosCasadosControladoria from '~/screens/4 - Controladoria/CiclosCasados';
import DoadorasControladoria from '~/screens/4 - Controladoria/Doadoras';
import Coletas from '~/screens/4 - Controladoria/Coletas';
import Custos from '~/screens/4 - Controladoria/Custos';

export default [
  {
    label: 'Dashboard',
    path: '/controladoria/dashboard',
    component: ControladoriaDashboard,
  },
  {
    path: '/',
    component: ControladoriaDashboard,
  },
  {
    label: 'Estoque',
    path: '/controladoria/estoque',
    component: Estoques,
  },
  {
    label: 'Ciclos Casados',
    path: '/controladoria/ciclos-casados',
    component: CiclosCasadosControladoria,

  },
  {
    label: 'Doadoras',
    path: '/controladoria/doadoras',
    component: DoadorasControladoria,
  },
  {
    label: 'Coletas',
    path: '/controladoria/coletas',
    component: Coletas,
  },
  {
    label: 'Custos',
    path: '/controladoria/custos',
    component: Custos,
  },
  {
    path: '/controladoria/estoque/:id',
    component: Estoque
  },
  {
    path: '/controladoria/ciclos-casados/:id',
    component: CicloCasado
  },
  {
    path: '/controladoria/doadoras/:id',
    component: Doadora
  },
  {
    path: '/controladoria/doadoras/:id/coleta/:coleta_id',
    component: Coleta
  },
];
