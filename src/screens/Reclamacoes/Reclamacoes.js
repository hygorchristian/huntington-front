import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HeaderActions } from '../../store/ducks/header';

import {
  Container, Header,
} from './styles';

function Reclamacoes({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeaderActions.headerSetBack(null));
  }, []);

  const navigate = (id) => {
    history.push(`/clientes/${id}`);
  };

  return (
    <Container>
      <Header>
        <h1>Reclamações</h1>
      </Header>
    </Container>
  );
}

export default Reclamacoes;
