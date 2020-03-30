import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Voltar from '~/components/Voltar/Voltar';
import LabelValue from '~/components/LabelValue';
import { formatarDiaMesAno } from '~/utils/data';
import Api from '~/services/api';

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

function BancoOvuloDetalhe() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    Api.getBancoOvulo(id).then((response) => {
      setData(response);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Voltar label="Banco de Óvulos" route="/receptora/banco-ovulos" />
      {data && (
        <Header>
          <h1>{data.nome}</h1>
        </Header>
      )}
      {loading ? (
        <span>carregando...</span>
      ) : (
        <Content>
          <Card>
            <div className="row">
              <LabelValue label="ID">{data.id}</LabelValue>
              <LabelValue label="PIN">{data.pin}</LabelValue>
              <LabelValue label="Nome">{data.nome}</LabelValue>
              <LabelValue label="Mês">{data.mes}</LabelValue>
              <LabelValue label="Mês">{data.ano}</LabelValue>
              <LabelValue label="Lotes totais">{data.lotes_iniciais}</LabelValue>
              <LabelValue label="Lotes disponíveis">{data.lotes_disponiveis}</LabelValue>
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
              <LabelValue label="#Óvulos">{data.ovule_total}</LabelValue>
              <LabelValue label="#Óvulos Restantes">{data.ovule_mature}</LabelValue>
              <LabelValue label="#Palhetas">{data.palhetes}</LabelValue>
              <LabelValue label="#Palhetas Restantes">{data.palhetes_restante}</LabelValue>
            </div>
            {data.ovulebanks.map((bank) => (
              <LItem bank={bank} donor={data.donor} />
            ))}
          </Card>
        </Content>
      )}
    </Container>
  );
}

export default BancoOvuloDetalhe;
