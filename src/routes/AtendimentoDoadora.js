import PreCadastro from '~/screens/1 - AtendimentoDoadora/PreCadastro';
import AdicionarEvento from '~/screens/1 - AtendimentoDoadora/AdicionarEvento';
import AdicionarDoadora from '~/screens/1 - AtendimentoDoadora/AdicionarDoadora';
import DoadoraPreCadastro from '~/screens/1 - AtendimentoDoadora/DoadoraPreCadastro';
import DoadoraTriagem from '~/screens/1 - AtendimentoDoadora/DoadoraPreCadastro/DoadoraTriagem';
import NovoHistorico from '~/components/NovoHistorico';
import PreencherUltrassom from '~/screens/1 - AtendimentoDoadora/PreencherUltrassom';
import NovaColeta from '~/screens/NovaColeta';
import ResultadoExame from '~/screens/ResultadoExame';
import Doadora from '~/screens/Doadora';
import NovoHistoricoDoadora from '~/screens/Doadora/NovoHistoricoDoadora';
import DashboardScreen from '~/screens/DashboardScreen';
import PreCadastros from '~/screens/1 - AtendimentoDoadora/PreCadastros';
import Doadoras from '~/screens/Doadoras';
import Reclamacoes from '~/screens/Reclamacoes';
import BancoOvulos from '~/screens/1 - AtendimentoDoadora/BancoOvulos';

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
    component: BancoOvulos,
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
    path: '/doadora/pre-cadastros/:id/:doadora/adicionar-historico',
    component: NovoHistorico
  },
  {
    path: '/doadora/pre-cadastros/:id/:doadora/adicionar-ultrassom',
    component: PreencherUltrassom
  },
  {
    path: '/doadora/pre-cadastros/:id/:doadora/exames/nova-coleta',
    component: NovaColeta
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
