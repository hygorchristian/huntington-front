import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '~/services/api';

import {
  Container, Header, Content
} from './styles';
import TabDashboard from '~/components/TabDashboard';
import ContatoInformacoes from './ContatoInformacoes';
import Voltar from '~/components/Voltar/Voltar';
import { formatarDiaMesAno } from '~/utils/data';

const tabs = [
  {
    label: 'Informações',
    content: <ContatoInformacoes />,
    url: 'info'
  },
];

function Contato() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.getReceiver(id).then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.tron.error(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Container>
        <Voltar label="Contatos" route="/receptora/contatos" />
        <Content>
          Carregando...
        </Content>
      </Container>
    );
  }

  console.tron.log(data);

  return data && (
    <Container>
      <Voltar label="Contatos" route="/receptora/contatos" />
      <Header>
        <h1>{data.name}</h1>
        <h3>{`Cadastro em ${formatarDiaMesAno(data.createdAt)}`}</h3>
      </Header>
      <Content>
        <TabDashboard tabs={tabs} />
      </Content>
    </Container>
  );
}

export default Contato;
