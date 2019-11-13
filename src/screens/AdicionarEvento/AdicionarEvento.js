import React from 'react';
import { FiChevronLeft, FiCalendar, FiMapPin } from 'react-icons/fi';

import {
  Container, Header, Voltar, Content
} from './styles';

function AdicionarEvento({ history }) {
  const navigate = () => {
    history.push('/pre-cadastros');
  };

  return (
    <Container>
      <Voltar onClick={navigate}>
        <FiChevronLeft />
        <h3>Pré-Cadastros</h3>
      </Voltar>
      <Header>
        <h1>Novo evento</h1>
      </Header>
      <Content>
        <form>
          <input id="nome" placeholder="Nome" />
          <div className="row">
            <FiCalendar color="#676767" />
            <input id="data" />
          </div>
          <div className="row">
            <FiMapPin color="#676767" />
            <input id="local" />
          </div>
        </form>
        <div className="buttons">
          <button className="light">Cancelar</button>
          <button>Salvar</button>
        </div>
      </Content>
    </Container>
  );
}

export default AdicionarEvento;
