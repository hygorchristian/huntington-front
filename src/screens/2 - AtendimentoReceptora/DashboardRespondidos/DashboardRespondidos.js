import React from 'react';
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
];

function ListaItem({ item }) {
  return (
    <Item>
      <div className="dados-usuario">
        <div className="linha">
          <h2 className="nome">Manoela Soares</h2>
          <span className="pin">PIN 123456</span>
        </div>
        <div className="linha">
          <span className="consulta">Respondido em 10/09/2019</span>
        </div>
      </div>
      <div className="acao">
        Validar questionário
      </div>
    </Item>
  );
}

function DashboardRespondidos() {
  return (
    <Container>
      <Lista>
        {
          items.map((item) => (
            <ListaItem key={item.id} item={item} />
          ))
        }
      </Lista>
    </Container>
  );
}

export default DashboardRespondidos;
