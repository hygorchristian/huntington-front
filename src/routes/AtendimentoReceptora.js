import Contato from '~/screens/2 - AtendimentoReceptora/Contato';
import BancoOvuloDetalhe from '~/screens/2 - AtendimentoReceptora/BancoOvuloDetalhe';
import ListaEsperaDetalhe from '~/screens/2 - AtendimentoReceptora/ListaEsperaDetalhe';
import AdicionarHistorico from '~/screens/2 - AtendimentoReceptora/ListaEsperaDetalhe/AdicionarHistorico';
import ARDashboard from '~/screens/2 - AtendimentoReceptora/ARDashboard';
import Contatos from '~/screens/2 - AtendimentoReceptora/Contatos';
import BancoOvulos from '~/screens/2 - AtendimentoReceptora/BancoOvulos';
import ListaEspera from '~/screens/2 - AtendimentoReceptora/ListaEspera';
import CiclosCasados from '~/screens/2 - AtendimentoReceptora/CiclosCasados';
import EmDesenvolvimento from '~/screens/EmDesenvolvimento';
import CicloCasado from '~/screens/2 - AtendimentoReceptora/CicloCasado/CicloCasado';

export default [
  {
    label: 'Dashboard',
    path: '/receptora/dashboard',
    component: ARDashboard,
  },
  {
    path: '/',
    component: ARDashboard,
  },
  {
    label: 'Contatos',
    path: '/receptora/contatos',
    component: Contatos,
  },
  {
    label: 'Banco de Óvulos',
    path: '/receptora/banco-ovulos',
    component: BancoOvulos,

  },
  {
    label: 'Lista de Espera',
    path: '/receptora/lista-espera',
    component: ListaEspera,
  },
  {
    label: 'Ciclos Casados',
    path: '/receptora/ciclos-casados',
    component: CiclosCasados,
  },
  {
    path: '/receptora/ciclos-casados/:id',
    component: CicloCasado,
  },
  {
    label: 'Indicadores',
    path: '/receptora/indicadores',
    component: EmDesenvolvimento,
  },
  {
    path: '/receptora/contatos/:id',
    component: Contato
  },
  {
    path: '/receptora/banco-ovulos/:id',
    component: BancoOvuloDetalhe
  },
  {
    path: '/receptora/lista-espera/:id',
    component: ListaEsperaDetalhe
  },
  {
    path: '/receptora/lista-espera/:id/adicionar-historico',
    component: AdicionarHistorico
  },
];
