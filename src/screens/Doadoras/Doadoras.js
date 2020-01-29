import React, { useEffect, useState } from 'react';
import Api from '~/services/api';

import { Container, Header, Content } from './styles';
import MuiTable from '~/components/MuiTable';
import schema from './schema';

function Doadoras({ history }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchDoadoras = async () => {
    const response = await Api.getDoadorasPreRegistradas().catch((err) => {
      console.tron.error(err);
    });

    if (response.data && response.data.donors) {
      setData(response.data.donors);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchDoadoras();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Doadoras</h1>
      </Header>
      <Content>
        <MuiTable
          schema={schema}
          data={data}
          loading={loading}
          setLoading={setLoading}
          setData={setData}
        />
      </Content>
    </Container>
);
}

export default Doadoras;
