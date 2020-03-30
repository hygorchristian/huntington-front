import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TabLinks from '~/components/TabLinks/TabLinks';
import Busca from '~/components/Busca';
import { tabs } from './tabs';

import { Container, Header, Content } from './styles';
import LabelValue from '~/components/LabelValue';
import MuiInput from '~/components/MuiInput';
import MuiSelect from '~/components/MuiSelect';

const items = [1, 2, 3, 4, 5];

function CicloCasado({ history }) {
  const novaDoadora = () => {

  };

  const detalhesDoadora = () => {
    history.push('/receptora/lista-espera/1');
  };

  return (
    <Container>
      <Header>
        <h1>Ciclos Casados</h1>
      </Header>
      <Content>
        <div className="grid">
          <LabelValue label="Receptora">123456</LabelValue>
          <LabelValue label="Doadora">123456</LabelValue>
          <LabelValue label="Tipo de Reserva">123456</LabelValue>
          <LabelValue label="Lotes">2</LabelValue>
          <LabelValue label="Óvulos">14</LabelValue>
          <LabelValue label="Médico">14</LabelValue>
          <LabelValue label="Unidade">14</LabelValue>
          <LabelValue label="Semen">14</LabelValue>
          <LabelValue label="Reservar em">05/02/2020</LabelValue>

          <MuiInput label="Documentos" value="Em aberto" />
          <MuiInput label="Financeiro" value="Em aberto" />
          <MuiInput label="Transporte" value="Em aberto" />
          <MuiInput label="Aviso de FOT/FET" value="Em aberto" />
          <MuiSelect
            label="Sorologia RF"
          >
            <MenuItem value="em_aberto">Em aberto</MenuItem>
            <MenuItem value="enviado">Enviado</MenuItem>
          </MuiSelect>
          <MuiSelect
            label="Sorologia RM"
          >
            <MenuItem value="em_aberto">Em aberto</MenuItem>
            <MenuItem value="enviado">Enviado</MenuItem>
          </MuiSelect>
        </div>
      </Content>
    </Container>
  );
}

export default CicloCasado;
