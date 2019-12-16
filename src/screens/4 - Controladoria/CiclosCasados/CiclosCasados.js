import React from 'react';

import {
  Container, Header, Content, Busca, Subheader
} from './styles';

const items = [1, 2, 3, 4, 5];

function CiclosCasados({ history }) {
  const detalhes = (id) => {
    history.push('/controladoria/ciclos-casados/1');
  };

  return (
    <Container>
      <Header>
        <h1>Ciclos Casados</h1>
        <div className="info">
          <h3>20</h3>
          <span>Em aberto</span>
        </div>
        <div className="info">
          <h3>5</h3>
          <span>Em atraso</span>
        </div>
        <div className="info">
          <h3>5</h3>
          <span>Faturados</span>
        </div>
      </Header>
      <Subheader>
        <Busca />
      </Subheader>
      <Content>
        <table cellSpacing={0}>
          <thead>
            <th>Receptora</th>
            <th>Doadora</th>
            <th>Tipo de Reserva</th>
            <th>Lotes</th>
            <th>Óvulos</th>
            <th>Reserva em</th>
            <th>Financeiro</th>
            <th>Faturado em</th>
            <th>NF</th>
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhes(item)}>
                <td style={{ width: 100 }}>12345678</td>
                <td style={{ width: 100 }}>12345678</td>
                <td style={{ width: 100 }}>Banco</td>
                <td style={{ width: 100 }}>2</td>
                <td style={{ width: 100 }}>14</td>
                <td style={{ width: 100 }}>05/09/2019</td>
                <td style={{ width: 100 }}>Em aberto</td>
                <td style={{ width: 100 }}>01/09/2019</td>
                <td style={{ width: 100 }}>1234</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default CiclosCasados;
