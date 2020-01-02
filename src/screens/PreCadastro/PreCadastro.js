import React from 'react';
import { FiMapPin, FiUsers } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
 Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import { EventoActions } from '~/store/ducks/doadora/evento';

function PreCadastro() {
  const { loading, data, error } = useSelector((state) => state.doadora.evento);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleRequest = (params) => {
    dispatch(EventoActions.eventoLoadRequest(id, params));
  };

  return (
    <Container>
      <Voltar label="Pré-Cadastros" />
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
          onRequest={handleRequest}
        />
      </Content>

    </Container>
);
}

export default PreCadastro;
