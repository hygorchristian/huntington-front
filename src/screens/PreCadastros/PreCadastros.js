import React from 'react';
import { FiUsers, FiMapPin } from 'react-icons/fi';

import {
 Container, Header, Item, Lista
} from './styles';
import Busca from '../../components/Busca';

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

function ListaItem({ onClick }) {
  return (
    <Item onClick={onClick}>
      <div className="dados-usuario">
        <div className="linha">
          <h2 className="nome">Mutirão Dia da Saúde</h2>
        </div>
        <div className="linha">
          <span className="consulta">16 de agosto de 2019</span>
        </div>
      </div>
      <div className="quantidade">
        <FiUsers color="#A9D4B2" size={14} />
        <span>52</span>
      </div>
      <div className="endereco">
        <FiMapPin color="#A9D4B2" size={14} />
        <span>Vila Mariana</span>
      </div>
    </Item>
  );
}

function PreCadastros({ history }) {
  const navigate = (id) => {
    history.push(`/pre-cadastros/${id}`);
  };

  const novoEvento = () => {
    history.push('/novo-evento');
  };

  return (
    <Container>
      <Header>
        <h1>Pré-Cadastros</h1>
        <Busca />
        <button onClick={novoEvento}>Adicionar</button>
      </Header>
      <Lista>
        {
          items.map((item) => (
            <ListaItem key={item.id} onClick={() => navigate(item.id)} item={item} />
          ))
        }
      </Lista>
    </Container>
);
}

export default PreCadastros;
