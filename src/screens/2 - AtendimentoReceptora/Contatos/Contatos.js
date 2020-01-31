import React from 'react';

import Busca from '~/components/Busca';

import { Container, Header, Content } from './styles';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import data from './data';

function Doadoras({ history }) {
  const novaDoadora = () => {

  };

  const detalhesDoadora = () => {
    history.push('/receptora/contatos/1');
  };

  return (
    <Container>
      <Header>
        <h1>Contatos</h1>
      </Header>
      <Content>
        <MuiTable schema={schema} data={data} />
      </Content>
    </Container>
  );
}

export default Doadoras;
