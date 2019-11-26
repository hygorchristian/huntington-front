import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import {
  Container, Header, Content, Busca, Subheader
} from './styles';

const items = [1, 2, 3, 4, 5];

function PreCadastro({ history }) {
  const detalhes = (id) => {
    history.push('/receptora/banco-ovulos/1');
  };

  return (
    <Container>
      <Header>
        <h1>Banco de Óvulos</h1>
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
            <th>Mês</th>
            <th>Ano</th>
            <th>Lotes totais</th>
            <th>Lotes disponíveis</th>
            <th />
            <th />
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhes(item)}>
                <td style={{ width: 70 }}>123456</td>
                <td style={{ width: 70 }}>123456</td>
                <td>Carolina Marrocos</td>
                <td>Agosto</td>
                <td style={{ width: 120 }}>2018</td>
                <td style={{ width: 100 }}>2</td>
                <td style={{ width: 150 }}>1</td>
                <td style={{ width: 150 }}>
                  <FiChevronDown color="#646464" size={16} />
                </td>
                <td style={{ width: 300 }} />
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default PreCadastro;
