import React, { useEffect, useState } from 'react';
import Api from '~/services/api';

import { Container, Header, Content } from './styles';
import MuiTable from '~/components/MuiTable';
import schema from './schema';

function Doadoras() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchDoadoras = async () => {
    const response = await Api.getDoadorasPreRegistradas();

    const normalData = response.map((donor) => {
      if (donor.consultations && donor.consultations.length > 0) {
        donor.dpm = donor.consultations[0].dpm;
      } else {
        donor.dpm = null;
      }

      return donor;
    });

    setData(normalData || []);
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
