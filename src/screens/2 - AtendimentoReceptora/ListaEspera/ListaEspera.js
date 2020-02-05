import React, { useState } from 'react';

import schema from './schema';
import dados from './data';

import { Container, Header, Content } from './styles';
import MuiTable from '~/components/MuiTable';

function ListaEspera({ history }) {
  const [data, setData] = useState(dados);

  return (
    <Container>
      <Header>
        <h1>Lista de Espera</h1>
      </Header>
      <Content>
        <MuiTable data={data} schema={schema} />
      </Content>
    </Container>
  );
}

export default ListaEspera;
