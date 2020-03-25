import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {
  Container, Item, Data, Lista, DataContainer, Ano
} from './styles';

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
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
  {
    id: 5,
  },
];

function ListaItem({ onClick }) {
  return (
    <Item onClick={onClick}>
      <span className="horario">08:15</span>
      <div className="separator" />
      <div className="dados-usuario">
        <div className="linha">
          <h2 className="nome">Manoela Soares</h2>
          <span className="pin">PIN 123456</span>
        </div>
        <div className="linha">
          <span className="consulta">Congelamento</span>
        </div>
      </div>
      <div className="acao">
        Ir para ficha >
      </div>
    </Item>
  );
}

function Coletas() {
  const history = useHistory();
  const navigate = () => {
    history.push('/embriologia/dashboard/coletas/1');
  };

  return (
    <Container>
      <Lista>
        {
          items.map((item) => (
            <ListaItem key={item.id} item={item} onClick={navigate} />
          ))
        }
      </Lista>
    </Container>
  );
}

export default Coletas;
