import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import { Container, Content, Header } from './styles';
import Voltar from '~/components/Voltar';
import Checkbox from '~/components/Checkbox';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiCheckbox from '~/components/MuiCheckbox';

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
          <MuiDatePicker
            name="nascimento"
            label="Data da Coleta"
          />
          <div className="checkcontrol">
            <MuiCheckbox
              label="ABO/RH"
            />
            <MuiCheckbox
              label="Sorologias"
            />
            <MuiCheckbox
              label="Cariótipo"
            />
            <MuiCheckbox
              label="Chlamidia/Neisseria"
            />
            <MuiCheckbox
              label="Citologia Oncótica"
            />
            <MuiCheckbox
              label="CGT"
            />
            <MuiCheckbox
              label="Cartão DNA"
            />
          </div>

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
