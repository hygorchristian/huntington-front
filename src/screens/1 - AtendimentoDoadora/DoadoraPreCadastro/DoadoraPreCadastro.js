import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import Api from '~/services/api';

import {
 Container, Header, Content
} from './styles';

import tabs from './tabs';
import { PreCadastroActions } from '~/store/ducks/doadora/preCadastro';

function DoadoraPreCadastro() {
  const { id, doadora } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.doadora.preCadastro.item);
  const [eventoNome, setEventoNome] = useState('');

  useEffect(() => {
    async function getEventoName() {
      const response = await Api.getEvent(id);
      if (response.data) {
        setEventoNome(response.data.name);
      }
    }

    dispatch(PreCadastroActions.preCadastroItemRequest(doadora));
    getEventoName();
  }, []);


  return (
    <Container>
      <Voltar label={eventoNome} route="/doadora/pre-cadastros/1" />
      {
        data && (
        <>
          <Header>
            <h1>{data.name}</h1>
          </Header>
          <Content>
            <TabDashboard tabs={tabs} />
          </Content>
        </>
        )
      }

    </Container>
);
}

export default DoadoraPreCadastro;
