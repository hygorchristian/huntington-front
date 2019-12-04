import Reclamacoes from '~/screens/Reclamacoes';
import DashboardScreen from '~/screens/DashboardScreen';
import PreCadastros from '~/screens/PreCadastros';
import Doadoras from '~/screens/Doadoras';
import EmDesenvolvimento from '~/screens/EmDesenvolvimento';
import ARDashboard from '~/screens/2 - AtendimentoReceptora/ARDashboard';
import Contatos from '~/screens/2 - AtendimentoReceptora/Contatos';
import BancoOvulos from '~/screens/2 - AtendimentoReceptora/BancoOvulos';
import BancoOvulos2 from '~/screens/5 - Embriologia/BancoOvulos';
import ListaEspera from '~/screens/2 - AtendimentoReceptora/ListaEspera';
import CiclosCasados from '~/screens/2 - AtendimentoReceptora/CiclosCasados';
import DashboardEmbriologia from '~/screens/5 - Embriologia/DashboardEmbriologia';

export default {
  'atendimento-doadora': [
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
  ],
  'atendimento-receptora': [
    {
      label: 'Dashboard',
      path: '/receptora/dashboard',
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
      label: 'Indicadores',
      path: '/receptora/indicadores',
      component: EmDesenvolvimento,
    },
  ],
  'atendimento-financeiro': [
    {
      label: 'Ciclos Casados',
      path: '/financeiro/dashboard',
      component: EmDesenvolvimento,
    },
  ],
  controladoria: [
    {
      label: 'Dashboard',
      path: '/controladoria/dashboard',
      component: EmDesenvolvimento,
    },
    {
      label: 'Estoque',
      path: '/controladoria/estoque',
      component: EmDesenvolvimento,
    },
    {
      label: 'Ciclos Casados',
      path: '/controladoria/ciclos-casados',
      component: EmDesenvolvimento,

    },
    {
      label: 'Doadoras',
      path: '/controladoria/doadoras',
      component: Reclamacoes,
    },
    {
      label: 'Coletas',
      path: '/controladoria/coletas',
      component: EmDesenvolvimento,
    },
    {
      label: 'Custos',
      path: '/controladoria/custos',
      component: EmDesenvolvimento,
    },
  ],
  embriologia: [
    {
      label: 'Dashboard',
      path: '/embriologia/dashboard',
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
  ],
};
