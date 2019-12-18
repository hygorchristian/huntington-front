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
import ControladoriaDashboard from '~/screens/4 - Controladoria/Dashboard';
import Estoques from '~/screens/4 - Controladoria/Estoques';
import CiclosCasadosControladoria from '~/screens/4 - Controladoria/CiclosCasados';
import DoadorasControladoria from '~/screens/4 - Controladoria/Doadoras';
import Coletas from '~/screens/4 - Controladoria/Coletas';
import Custos from '~/screens/4 - Controladoria/Custos';
import CiclosCasadosFinanceiro from '~/screens/3 - AtendimentoFinanceiro/CiclosCasados';

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
      path: '/financeiro/ciclos-casados',
      component: CiclosCasadosFinanceiro,
    },
  ],
  controladoria: [
    {
      label: 'Dashboard',
      path: '/controladoria/dashboard',
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
