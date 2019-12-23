import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import { getParams } from '~/utils/url';

import {
 Container, Header, Content
} from './styles';
import { EventosActions } from '~/store/ducks/doadora/eventos';

function PreCadastros({ history }) {
  const { list, error, loading } = useSelector((state) => state.doadora.eventos);
  const dispatch = useDispatch();
  const payload = getParams(['q', 'order:ASC', 'sort:id', 'page:1', 'perPage:10', 'filter']);


  useEffect(() => {
    dispatch(EventosActions.eventosLoadRequest());
  }, []);

  const navigate = (id) => {
    history.push(`/doadora/pre-cadastros/${id}`);
  };

  const novoEvento = () => {
    history.push('/doadora/novo-evento');
  };

  return (
    <Container>
      <Header>
        <h1>Pré-Cadastros</h1>
      </Header>
      <Content>
        <MuiTable schema={schema} data={list} loading={loading} />
      </Content>
    </Container>
);
}

export default PreCadastros;
