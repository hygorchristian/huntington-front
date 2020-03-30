import React, { useEffect, useState } from 'react';
import Api from '~/services/api';

import { Container, Header, Content } from './styles';
import MuiTable from '~/components/MuiTable';
import schema from './schema';

function Doadoras() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.getReceiversContatcs().then((response) => {
      setData(response);
    }).catch((err) => {
      console.tron.error(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header>
        <h1>Contatos</h1>
      </Header>
      <Content>
        <MuiTable schema={schema} data={data} loading={loading} />
      </Content>
    </Container>
  );
}

export default Doadoras;
