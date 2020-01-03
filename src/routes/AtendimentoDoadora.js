import PreCadastro from '~/screens/PreCadastro';
import AdicionarEvento from '~/screens/AdicionarEvento';
import AdicionarDoadora from '~/screens/AdicionarDoadora';
import DoadoraPreCadastro from '~/screens/DoadoraPreCadastro';
import DoadoraTriagem from '~/screens/DoadoraPreCadastro/DoadoraTriagem';
import NovoHistorico from '~/components/NovoHistorico';
import PreencherUltrassom from '~/screens/PreencherUltrassom';
import NovaColeta from '~/screens/NovaColeta';
import ResultadoExame from '~/screens/ResultadoExame';
import Doadora from '~/screens/Doadora';
import NovoHistoricoDoadora from '~/screens/Doadora/NovoHistoricoDoadora';
import DashboardScreen from '~/screens/DashboardScreen';
import PreCadastros from '~/screens/PreCadastros';
import Doadoras from '~/screens/Doadoras';
import Reclamacoes from '~/screens/Reclamacoes';

export default [
  {
    label: 'Dashboard',
    path: '/doadora/dashboard',
    component: DashboardScreen,
  },
  {
    label: 'Pré-Cadastros',
    path: '/doadora/pre-cadastros',
    component: PreCadastros,
  },
  {
    label: 'Doadoras',
    path: '/doadora/listagem',
    component: Doadoras,
  },
  {
    label: 'Resumo do banco',
    path: '/doadora/resumo-do-banco',
    component: Reclamacoes,
  },
  {
    label: 'Indicadores',
    path: '/doadora/indicadores',
    component: Reclamacoes,
  },
  {
    path: '/doadora/pre-cadastros/:id',
    component: PreCadastro
  },
  {
    path: '/doadora/novo-evento',
    component: AdicionarEvento
  },
  {
    path: '/doadora/pre-cadastros/:id/nova-doadora',
    component: AdicionarDoadora
  },
  {
    path: '/doadora/pre-cadastros/:id/:doadora',
    component: DoadoraPreCadastro
  },
  {
    path: '/doadora/pre-cadastros/:id/:doadora/triagem',
    component: DoadoraTriagem
  },
  {
    path: '/doadora/detalhes/:id/novo-historico',
    component: NovoHistorico
  },
  {
    path: '/doadora/detalhes/:id/ultrassons/preencher',
    component: PreencherUltrassom
  },
  {
    path: '/doadora/detalhes/:id/exames/nova-coleta',
    component: NovaColeta
  },
  {
    path: '/doadora/detalhes/:id/exames/resultado',
    component: ResultadoExame
  },
  {
    path: '/doadora/listagem/:id',
    component: Doadora
  },
  {
    path: '/doadora/listagem/:id/triagem',
    component: DoadoraTriagem
  },
  {
    path: '/doadora/listagem/:id/novo-registro',
    component: NovoHistoricoDoadora
  },
  {
    path: '/doadora/listagem/:id/ultrassons/preencher',
    component: PreencherUltrassom
  },
  {
    path: '/doadora/listagem/:id/exames/nova-coleta',
    component: NovaColeta
  },
  {
    path: '/doadora/listagem/:id/exames/resultado',
    component: ResultadoExame
  },
];
