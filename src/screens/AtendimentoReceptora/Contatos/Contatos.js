import React from 'react';

import TabLinks from '~/components/TabLinks/TabLinks';
import Busca from '~/components/Busca';
import { tabs } from './tabs';

import { Container, Header, Content } from './styles';

const items = [1, 2, 3, 4, 5];

function Doadoras({ history }) {
  const novaDoadora = () => {

  };

  const detalhesDoadora = () => {
    history.push('/receptora/contatos/1');
  };

  return (
    <Container>
      <Header>
        <h1>Contatos</h1>
        <Busca />
        <button onClick={novaDoadora}>Adicionar</button>
      </Header>
      <Content>
        <TabLinks tabs={tabs} />
        <table cellSpacing={0}>
          <thead>
            <th>PIN</th>
            <th />
            <th>Contato</th>
            <th>Cadastro</th>
            <th>Questionário</th>
            <th />
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhesDoadora(item)}>
                <td style={{ width: 70 }}>123456</td>
                <td style={{ width: 300 }}>Carolina Marrocos</td>
                <td style={{ width: 100 }}>emaildoadora@email.com.br</td>
                <td style={{ width: 100 }}>21/06/19</td>
                <td style={{ width: 70 }}>A enviar</td>
                <td style={{ width: 200 }} />
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default Doadoras;
