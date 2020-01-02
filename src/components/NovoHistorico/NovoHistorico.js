import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import {
 Container, Content, Header, ConsultaContainer, ObservacaoContainer
} from './styles';
import InputLabel from '../InputLabel';
import OptionsLabel from '../OptionsLabel';
import CheckLabel from '../CheckLabel';
import Voltar from '../Voltar/Voltar';
import MuiBooleanValue from '~/components/MuiBooleanValue';
import MuiSelect from '~/components/MuiSelect';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiTextarea from '~/components/MuiTextarea';
import MuiInput from '~/components/MuiInput';

function PrimeiraConsulta() {
  const [etnia, setEtnia] = useState(null);

  return (
    <ConsultaContainer>
      <div className="row date">
        <MuiDatePicker
          name="nascimento"
          label="Data da Última Menstruação"
        />
      </div>
      <div className="row date">
        <MuiDatePicker
          name="nascimento"
          label="Data da Última Menstruação"
        />
      </div>
      <div className="row date">
        <MuiSelect
          name="etnia"
          label="Confirmar etnia"
        >
          <MenuItem value="branca">Branca</MenuItem>
          <MenuItem value="loira">Loira</MenuItem>
          <MenuItem value="parda">Parda</MenuItem>
          <MenuItem value="negra">Negra</MenuItem>
          <MenuItem value="oriental">Oriental</MenuItem>
          <MenuItem value="outra">Outra</MenuItem>
        </MuiSelect>
      </div>
      <MuiBooleanValue
        label="Alergia a alguma medicação?"
        placeholder="Qual?"
      />
      <MuiBooleanValue
        label="Comorbidades?"
        placeholder="Quais?"
      />

      <div className="separator" style={{ marginTop: 40, marginBottom: 40 }} />

      <MuiTextarea label="Anotação de Enfermagem" />

      <div className="separator" style={{ marginBottom: 40, marginTop: 40 }} />

      <MuiBooleanValue
        label="Chegou até nós por indicação?"
        placeholder="Como?"
      />
      <MuiBooleanValue
        label="Entrou para o programa de doação?"
        placeholder="Motivo"
      />
      <MuiBooleanValue
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
      <MuiTextarea label="Descrição" placeholder="Descreva aqui" />
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
      <MuiTextarea label="Descrição" placeholder="Descreva o motivo da desistência" />
      <div className="separator" />
      <div className="controllers">
        <button className="light">Cancelar</button>
        <button>Concluir</button>
      </div>
    </ObservacaoContainer>
  );
}

function NovoHistorico() {
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

  return (
    <Container>
      <Voltar label="Histórico | Maria Carolina do Rosário" route="/doadora/detalhes/1" />
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
