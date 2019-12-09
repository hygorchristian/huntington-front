import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import {
  Container, Header, Content, Busca, Subheader
} from './styles';

const items = [1, 2, 3, 4, 5];

function Estoques({ history }) {
  const detalhes = (id) => {
    history.push('/controladoria/estoque/1');
  };

  return (
    <Container>
      <Header>
        <h1>Estoque</h1>
        <div className="info">
          <h3>10</h3>
          <span>Reservados</span>
        </div>
        <div className="info">
          <h3>20</h3>
          <span>Em avaliação</span>
        </div>
        <div className="info">
          <h3>30</h3>
          <span>Disponíveis</span>
        </div>
      </Header>
      <Subheader>
        <Busca />
      </Subheader>
      <Content>
        <table cellSpacing={0}>
          <thead>
            <th>ID</th>
            <th>PIN</th>
            <th>Nome</th>
            <th>Data da coleta</th>
            <th>Lotes totais</th>
            <th>Em avaliação</th>
            <th>Reservados</th>
            <th>Faturados</th>
            <th>Disponíveis</th>
            <th />
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhes(item)}>
                <td style={{ width: 100 }}>123456</td>
                <td style={{ width: 100 }}>123456</td>
                <td>Carolina Marrocos</td>
                <td>25/10/18</td>
                <td style={{ width: 120 }}>2</td>
                <td style={{ width: 100 }}>0</td>
                <td style={{ width: 150 }}>1</td>
                <td style={{ width: 150 }}>0</td>
                <td style={{ width: 150 }}>1</td>
                <td style={{ width: 150 }}>
                  <FiChevronDown color="#646464" size={16} />
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default Estoques;
