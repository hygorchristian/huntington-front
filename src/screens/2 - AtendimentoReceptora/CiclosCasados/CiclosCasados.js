import React from 'react';

import TabLinks from '~/components/TabLinks/TabLinks';
import Busca from '~/components/Busca';
import { tabs } from './tabs';

import { Container, Header, Content } from './styles';

const items = [1, 2, 3, 4, 5];

function CiclosCasados({ history }) {
  const novaDoadora = () => {

  };

  const detalhesDoadora = () => {
    history.push('/receptora/lista-espera/1');
  };

  return (
    <Container>
      <Header>
        <h1>Ciclos Casados</h1>
        <div className="reservas">
          <h2>20</h2>
          <span>Reservas</span>
        </div>
        <Busca />
        <button onClick={novaDoadora}>Adicionar</button>
      </Header>
      <Content>
        <table cellSpacing={0}>
          <thead>
            <th>Receptora</th>
            <th>Doadora</th>
            <th>Tipo de Reserva</th>
            <th>Lotes</th>
            <th>Óvulos</th>
            <th>Documentos</th>
            <th>Financeiro</th>
            <th>Transporte</th>
            <th>Aviso de FOT</th>
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhesDoadora(item)}>
                <td style={{ width: 70 }}>
                  <a
                    onClick={(e) => { e.stopPropagation(); }}
                    href="/receptora/contatos/1"
                    target="_blank"
                  >
                    123456
                  </a>
                </td>
                <td style={{ width: 70 }}><a>123456</a></td>
                <td style={{ width: 70 }}>Banco</td>
                <td style={{ width: 70 }}>2</td>
                <td style={{ width: 70 }}>14</td>
                <td style={{ width: 70 }}>Em aberto</td>
                <td style={{ width: 70 }}>Em aberto</td>
                <td style={{ width: 70 }}>Em aberto</td>
                <td style={{ width: 70 }}>Em aberto</td>
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
