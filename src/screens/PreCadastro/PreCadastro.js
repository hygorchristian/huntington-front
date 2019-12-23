import React from 'react';
import { FiMapPin, FiUsers } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import {
 Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import { getParams, strapiParams } from '~/utils/url';
import { PreCadastroActions } from '~/store/ducks/doadora/preCadastro';

function PreCadastro() {
  const data = useSelector((state) => state.doadora.preCadastro);
  const dispatch = useDispatch();
  const payload = getParams(['q', 'order:ASC', 'sort:id', 'page:1', 'perPage:10', 'filter']);


  React.useEffect(() => {
    dispatch(PreCadastroActions.preCadastroLoadRequest(strapiParams(payload)));
  }, []);

  return (
    <Container>
      <Voltar label="Pré-Cadastros" />
      <Header>
        <h1>Mutirão Dia da Saúde</h1>
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
        <MuiTable schema={schema} data={data && data.lista} loading={data && data.loading} />
      </Content>
    </Container>
);
}

export default PreCadastro;
