import React from 'react';

import InformacoesGerais from './InformacoesGerais';
import UnidadesAtendimento from './UnidadesAtendimento';
import TipoTratamento from './TipoTratamento';
import DadosFenotipicos from './DadosFenotipicos';
import Consideracoes from './Consideracoes';

export default [
  {
    label: 'Informações gerais',
    component: InformacoesGerais,
  },
  {
    label: 'Unidade de Atendimento',
    component: UnidadesAtendimento,
  },
  {
    label: 'Tipo de Tratamento',
    component: TipoTratamento,
  },
  {
    label: 'Dados Fenotípicos Receptora',
    component: DadosFenotipicos,
  },
  {
    label: 'Dados Fenotípicos Parceira',
    component: DadosFenotipicos,
  },
  {
    label: 'Considerações',
    component: Consideracoes,
  },
];
