import React, { useEffect, useState } from 'react';
import Api from '~/services/api';
import MuiTable from '~/components/MuiTable';
import schema from './schema';

import {
 Container, Header, Content
} from './styles';
import { EventosActions } from '~/store/ducks/doadora/eventos';
import { showErrorMessage } from '~/utils/notistack';

function PreCadastros({ history }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await Api.getEvents().catch((err) => {
      console.tron.log(err);
      showErrorMessage(err);
    });
    setData(response || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Pré-Cadastros</h1>
      </Header>
      <Content>
        <MuiTable
          schema={schema}
          data={data}
          loading={loading}
        />
      </Content>
    </Container>
  );
}

export default PreCadastros;
