import React from 'react';

import TabLinks from '~/components/TabLinks/TabLinks';
import Busca from '~/components/Busca';

import { Container, Header, Content } from './styles';

const items = [1, 2, 3, 4, 5];

function BancoOvulos({ history }) {
  const novaDoadora = () => {

  };

  const detalhesDoadora = () => {
    history.push('/embriologia/banco-ovulos/1');
  };

  return (
    <Container>
      <Header>
        <h1>Banco de Óvulos</h1>
        <Busca />
      </Header>
      <Content>
        <table cellSpacing={0}>
          <thead>
            <th>ID</th>
            <th>PIN</th>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th>Lotes Totais</th>
            <th>Lotes disponíveis</th>
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhesDoadora(item)}>
                <td style={{ width: 70 }}>123456</td>
                <td style={{ width: 90 }}>12345678</td>
                <td style={{ width: 150 }}>Carolina Marrocos</td>
                <td style={{ width: 110 }}>Agosto</td>
                <td style={{ width: 70 }}>2018</td>
                <td style={{ width: 70 }}>2</td>
                <td style={{ width: 70 }}>1</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default BancoOvulos;
