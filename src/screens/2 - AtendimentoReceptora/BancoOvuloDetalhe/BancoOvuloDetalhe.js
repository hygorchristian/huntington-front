import React, { useState } from 'react';

import Voltar from '~/components/Voltar/Voltar';
import LabelValue from '~/components/LabelValue';
import { formatarDiaMesAno } from '~/utils/data';

import {
  Container, Header, Content, Card
} from './styles';
import OptionsButton from '~/components/OptionsButton';
import LItem from '~/components/LItem';

const INITIAL = {
  id: 1,
  pin: '123456',
  name: 'Carolina Marrocos',
  month: 'Agosto',
  initial: 3,
  avaiable: 10,
  freeze_date: '2020-01-20T12:00:00Z',
  embriologist: 'Bruna Andrade',
  method: 'TIP',
  tank: 14,
  ovules: 21,
  ovules_left: 7,
  palhetes: 6,
  palhetes_restante: 2
};

const receiverOptions = [
  {
    label: 'Visualizar Ficha',
    click: () => {}
  }
];

function PreCadastro() {
  const [data, setData] = useState(INITIAL);

  return (
    <Container>
      <Voltar label="Banco de Óvulos" route="/receptora/banco-ovulos" />
      <Header>
        <h1>Carolina Marrocos</h1>
      </Header>
      <Content>
        <Card>
          <div className="row">
            <LabelValue label="ID">{data.id}</LabelValue>
            <LabelValue label="PIN">{data.pin}</LabelValue>
            <LabelValue label="Nome">{data.name}</LabelValue>
            <LabelValue label="Mês">{data.month}</LabelValue>
            <LabelValue label="Lotes totais">{data.initial}</LabelValue>
            <LabelValue label="Lotes disponíveis">{data.avaiable}</LabelValue>
            <OptionsButton options={receiverOptions} />
          </div>
          <div className="separator-h" />
          <div className="row">
            <LabelValue label="Data do Agendamento">{data.freeze_date && formatarDiaMesAno(data.freeze_date)}</LabelValue>
            <LabelValue label="Embriologista Cong">{data.embriologist}</LabelValue>
            <LabelValue label="Método">{data.method}</LabelValue>
            <LabelValue label="Tanque">{data.tank}</LabelValue>
          </div>
          <div className="separator-h" />
          <div className="row">
            <LabelValue label="#Óvulos">{data.ovules}</LabelValue>
            <LabelValue label="#Óvulos Restantes">{data.ovules_left}</LabelValue>
            <LabelValue label="#Palhetas">{data.palhetes}</LabelValue>
            <LabelValue label="#Palhetas Restantes">{data.palhetes_restante}</LabelValue>
          </div>
          <LItem />
          <LItem />
          <LItem />
        </Card>
      </Content>
    </Container>
  );
}

export default PreCadastro;
