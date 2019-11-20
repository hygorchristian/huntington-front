import React from 'react';
import InputLabel from '../../components/InputLabel';

import { Container, Content, Header } from './styles';
import Voltar from '../../components/Voltar';
import Checkbox from '../../components/Checkbox';

function NovaColeta() {
  return (
    <Container>
      <Voltar
        route="/doadora/detalhes/1"
        label="Exames | Maria Carolina do Rosário"
      />
      <Header>
        <h1>Nova Coleta</h1>
      </Header>
      <Content>
        <form>
          <InputLabel
            label="Data da Coleta"
            type="date"
          />
          <Checkbox
            style={{ marginBottom: 30 }}
            label="ABO/RH"
          />
          <Checkbox
            style={{ marginBottom: 30 }}
            label="Sorologias"
          />
          <Checkbox
            style={{ marginBottom: 30 }}
            label="Cariótipo"
          />
          <Checkbox
            style={{ marginBottom: 30 }}
            label="Chlamidia/Neisseria"
          />
          <Checkbox
            style={{ marginBottom: 30 }}
            label="Citologia Oncótica"
          />
          <Checkbox
            style={{ marginBottom: 30 }}
            label="CGT"
          />
          <Checkbox
            style={{ marginBottom: 30 }}
            label="Cartão DNA"
          />
        </form>
        <div className="separator" />
        <div className="controller">
          <button className="btn">Salvar</button>
        </div>
      </Content>
    </Container>
  );
}

export default NovaColeta;
