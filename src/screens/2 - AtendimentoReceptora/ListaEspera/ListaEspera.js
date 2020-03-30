import React, { useEffect, useState } from 'react';
import Api from '~/services/api';

import schema from './schema';
import dados from './data';

import { Container, Header, Content } from './styles';
import MuiTable from '~/components/MuiTable';
import { showErrorMessage } from '~/utils/notistack';

function ListaEspera({ history }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.getHoldList().then((response) => {
      setData(response);
    }).catch((err) => {
      console.tron.error(err);
      showErrorMessage('Não foi possível recuperar a lista. Atualize a página.');
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header>
        <h1>Lista de Espera</h1>
      </Header>
      <Content>
        <MuiTable data={data} schema={schema} loading={loading} />
      </Content>
    </Container>
  );
}

export default ListaEspera;
