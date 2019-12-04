import React from 'react';
import { FiMapPin, FiUsers } from 'react-icons/fi';

import {
  Container, Header, Content, Busca, Subheader
} from './styles';
import Voltar from '~/components/Voltar/Voltar';

const items = [1, 2, 3, 4, 5];

function PreCadastro({ history }) {
  return (
    <Container>
      <Voltar label="Banco de Óvulos" route="/receptora/banco-ovulos" />
      <Header>
        <h1>Carolina Marrocos</h1>
      </Header>
      <Subheader>
        <Busca />
        {/* <button onClick={novaDoadora}>Adicionar</button> */}
      </Subheader>
      <Content />
    </Container>
  );
}

export default PreCadastro;
