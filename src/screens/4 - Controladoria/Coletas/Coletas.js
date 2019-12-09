import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import {
  Container, Header, Content, Busca, Subheader
} from './styles';
import MonthPicker from '~/components/MonthPicker';

const items = [1, 2, 3, 4, 5];

function Coletas({ history }) {
  const detalhes = (id) => {
    history.push('/controladoria/estoque/1');
  };

  return (
    <Container>
      <Header>
        <h1>Coletas</h1>
        <MonthPicker />
        <div className="info" style={{ marginLeft: 90 }}>
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
            <th>Data da coleta</th>
            <th>PIN</th>
            <th>Nome</th>
            <th>Lotes</th>
            <th>Fresco</th>
            <th>Total</th>
            <th>Backup</th>
            <th />
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhes(item)}>
                <td style={{ width: 120 }}>01/09/2019</td>
                <td style={{ width: 100 }}>123456</td>
                <td style={{ width: 250 }}>Carolina Marrocos</td>
                <td style={{ width: 100 }}>1</td>
                <td style={{ width: 100 }}>1</td>
                <td style={{ width: 100 }}>2</td>
                <td style={{ width: 100 }}>1</td>
                <td style={{ width: 100 }}>
                  <FiChevronRight color="#646464" size={16} />
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

export default Coletas;
