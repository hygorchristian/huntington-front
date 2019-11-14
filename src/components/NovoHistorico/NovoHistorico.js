import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import {
 Container, Content, Header, Voltar, ConsultaContainer, ObservacaoContainer
} from './styles';
import InputLabel from '../InputLabel';
import OptionsLabel from '../OptionsLabel';
import CheckLabel from '../CheckLabel';

function PrimeiraConsulta() {
  const [etnia, setEtnia] = useState(null);

  return (
    <ConsultaContainer>
      <div className="row">
        <InputLabel
          style={{ marginRight: 20 }}
          label="D.U.M."
          type="date"
          width={220}
        />
        <InputLabel
          label="Data da próxima menstruação"
          type="date"
          width={220}
        />
      </div>
      <div className="row" style={{ width: 300, marginTop: 15 }}>
        <OptionsLabel
          label="Confirmação de etnia"
          data={[
            'Branca',
            'Loira',
            'Parda',
            'Negra',
            'Oriental',
            'Outra',
          ]}
          value={etnia}
          onSelect={(value) => setEtnia(value)}
        />
      </div>
      <CheckLabel
        style={{ marginBottom: 40 }}
        label="Alergia a alguma medicação?"
        placeholder="Qual?"
      />
      <CheckLabel
        label="Comorbidades?"
        placeholder="Qual?"
      />

      <div className="separator" style={{ marginTop: 40 }} />

      <textarea placeholder="Anotação de Enfermagem" />

      <div className="separator" style={{ marginBottom: 40 }} />

      <CheckLabel
        style={{ marginBottom: 40 }}
        label="Chegou até nós por indicação?"
        placeholder="Como?"
      />
      <CheckLabel
        style={{ marginBottom: 40 }}
        label="Entrou para o programa de doação?"
        placeholder="Motivo"
      />
      <CheckLabel
        label="Tem perfil compatível?"
        placeholder="Motivo"
      />

      <div className="separator" style={{ marginTop: 40 }} />

      <div className="controllers">
        <button className="light">Cancelar</button>
        <button>Salvar</button>
      </div>
    </ConsultaContainer>
  );
}

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

function Desistencia() {
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

function NovoHistorico({ history }) {
  const tabs = [
    {
      id: 1,
      component: <PrimeiraConsulta />,
      label: '1ª Consulta'
    },
    {
      id: 2,
      component: <Observacao />,
      label: 'Observação'
    },
    {
      id: 3,
      component: <Desistencia />,
      label: 'Desistência'
    },
  ];

  const [selected, setSelected] = useState(tabs[0]);


  const navigate = () => {
    history.push('/doadora/1');
  };

  return (
    <Container>
      <Voltar onClick={navigate}>
        <FiChevronLeft />
        <h3>Histórico | Maria Carolina do Rosário</h3>
      </Voltar>
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

export default NovoHistorico;
