import React, { useEffect, useState } from 'react';
import { FiMapPin, FiUsers } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import Voltar from '~/components/Voltar/Voltar';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import Api from '~/services/api';

import {
  Container, Header, Content
} from './styles';

function PreCadastro() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoadoras = async () => {
    const response = await Api.getEventDonors(id);
    setData(response || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchDoadoras();
  }, []);

  return (
    <Container>
      <Voltar label="Pré-Cadastros" route="/doadora/pre-cadastros" />
      <Header>
        <h1>{data && data.name}</h1>
        <div className="quantidade">
          <FiUsers color="#A9D4B2" size={14} />
          <span>52</span>
        </div>
        <div className="endereco">
          <FiMapPin color="#A9D4B2" size={14} />
          <span>Vila Mariana</span>
        </div>
      </Header>
      <Content>
        <MuiTable
          schema={schema}
          data={data && data.doadoras}
          loading={loading}
        />
      </Content>
    </Container>
  );
}

export default PreCadastro;
