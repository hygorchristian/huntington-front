import React, { useState } from 'react';
import Voltar from '~/components/Voltar/Voltar';

import {
  Container, Content, Header, ObservacaoContainer
} from './styles';

function Observacao() {
  return (
    <ObservacaoContainer>
      <textarea placeholder="Descreva aqui" />
      <div className="separator" />
      <div className="controllers">
        <button className="light">Cancelar</button>
        <button>Concluir</button>
      </div>
    </ObservacaoContainer>
  );
}

function Cancelamento() {
  return (
    <ObservacaoContainer>
      <textarea placeholder="Descreva o motivo da desistência" />
      <div className="separator" />
      <div className="controllers">
        <button className="light">Cancelar</button>
        <button>Concluir</button>
      </div>
    </ObservacaoContainer>
  );
}

function AdicionarHistorico() {
  const tabs = [
    {
      id: 1,
      component: <Observacao />,
      label: 'Observação'
    },
    {
      id: 2,
      component: <Cancelamento />,
      label: 'Cancelamento'
    },
  ];

  const [selected, setSelected] = useState(tabs[0]);

  return (
    <Container>
      <Voltar label="Histórico | Andressa Guimarães" route="/receptora/lista-espera/1" />
      <Header>
        <h1>Novo Histórico</h1>
      </Header>
      <Content>
        <div className="buttons-top">
          {
            tabs.map((tab) => (
              <button
                key={tab.id}
                className={tab.label === selected.label ? 'active' : ''}
                onClick={() => setSelected(tab)}
              >
                {tab.label}
              </button>
            ))
          }
        </div>
        <div className="main">
          {selected.component}
        </div>
      </Content>
    </Container>
  );
}

export default AdicionarHistorico;
