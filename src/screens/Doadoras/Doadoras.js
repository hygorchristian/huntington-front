import React from 'react';

import TabLinks from '../../components/TabLinks/TabLinks';
import Busca from '../../components/Busca';
import { tabs } from './tabs';

import { Container, Header, Content } from './styles';

const items = [1, 2, 3, 4, 5];

function Doadoras({ history }) {
  const novaDoadora = () => {

  };

  const detalhesDoadora = () => {
    history.push('/doadora/detalhes/1');
  };

  return (
    <Container>
      <Header>
        <h1>Doadoras</h1>
        <Busca />
        <button onClick={novaDoadora}>Adicionar</button>
      </Header>
      <Content>
        <TabLinks tabs={tabs} />
        <table cellSpacing={0}>
          <thead>
            <th>PIN</th>
            <th>Doações</th>
            <th>Origem</th>
            <th />
            <th>Etnia</th>
            <th>D.P.M</th>
            <th>A.C.O</th>
            <th>Ciclo casado</th>
            <th>Status de Atendimento</th>
            <th>Perfil</th>
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhesDoadora(item)}>
                <td style={{ width: 70 }}>123456</td>
                <td style={{ width: 70 }}>0</td>
                <td style={{ width: 70 }}>Porta</td>
                <td style={{ width: 300 }}>Carolina Marrocos</td>
                <td style={{ width: 100 }}>Negra</td>
                <td style={{ width: 100 }}>21/06/19</td>
                <td style={{ width: 70 }}>Sim</td>
                <td style={{ width: 70 }}>Sim</td>
                <td style={{ width: 180 }}>Estimulação</td>
                <td style={{ width: 130 }}>Ativa</td>
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
