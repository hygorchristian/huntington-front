import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import TabDashboard from '~/components/TabDashboard';
import Voltar from '~/components/Voltar/Voltar';
import Api from '~/services/api';

import {
 Container, Header, Content
} from './styles';

import tabs from './tabs';
import { PreCadastroActions } from '~/store/ducks/doadora/preCadastro';
import { getParams, getUrlParam } from '~/utils/url';

const getIndex = (name) => {
  switch (name) {
    case 'info': return 0;
    case 'historico': return 1;
    case 'exames': return 2;
    case 'ultrassons': return 3;
    default: return 0;
  }
};

function DoadoraPreCadastro() {
  const { id, doadora } = useParams();
  const tab = getUrlParam('tab', 'info');
  const index = getIndex(tab);
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
      <Voltar label={eventoNome} route={`/doadora/pre-cadastros/${id}`} />
      {
        data && (
        <>
          <Header>
            <h1>{data.name}</h1>
          </Header>
          <Content>
            <TabDashboard tabs={tabs} index={index} />
          </Content>
        </>
        )
      }

    </Container>
);
}

export default DoadoraPreCadastro;
