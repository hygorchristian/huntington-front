import React, { useState, useEffect } from 'react';
import Api from '~/services/api';

import MuiTable from '~/components/MuiTable';

import {
  Container, Header, Content, Busca, Subheader
} from './styles';

import schema from './schema';

function PreCadastro({ history }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.getBancoOvulos().then((response) => {
      console.tron.log(response);
      setData(response);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header>
        <h1>Banco de Óvulos</h1>
      </Header>
      <Content>
        <MuiTable schema={schema} data={data} loading={loading} />
      </Content>
    </Container>
  );
}

export default PreCadastro;
