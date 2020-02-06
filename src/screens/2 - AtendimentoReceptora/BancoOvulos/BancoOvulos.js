import React, { useState } from 'react';

import MuiTable from '~/components/MuiTable';

import {
  Container, Header, Content, Busca, Subheader
} from './styles';

import schema from './schema';
import mock from './mock';

function PreCadastro({ history }) {
  const [data, setData] = useState(mock);

  const detalhes = (id) => {
    history.push('/receptora/banco-ovulos/1');
  };

  return (
    <Container>
      <Header>
        <h1>Banco de Óvulos</h1>
      </Header>
      <Content>
        <MuiTable schema={schema} data={data} />
      </Content>
    </Container>
  );
}

export default PreCadastro;
