import React from 'react';

import TabLinks from '../../../components/TabLinks/TabLinks';
import Busca from '../../../components/Busca';
import { tabs } from './tabs';

import { Container, Header, Content } from './styles';

const items = [1, 2, 3, 4, 5];

function ListaEspera({ history }) {
  const novaDoadora = () => {

  };

  const detalhesDoadora = () => {
    history.push('/receptora/lista-espera/1');
  };

  return (
    <Container>
      <Header>
        <h1>Lista de Espera</h1>
        <Busca />
        <button onClick={novaDoadora}>Adicionar</button>
      </Header>
      <Content>
        <TabLinks tabs={tabs} />
        <table cellSpacing={0}>
          <thead>
            <th>Ano</th>
            <th>Mês</th>
            <th>Receptora</th>
            <th>PIN</th>
            <th>ABO</th>
            <th>ABO2</th>
            <th>Perfil</th>
            <th>Status</th>
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhesDoadora(item)}>
                <td style={{ width: 70 }}>2019</td>
                <td style={{ width: 90 }}>Janeiro</td>
                <td style={{ width: 300 }}>Andressa Guimarães</td>
                <td style={{ width: 90 }}>123456</td>
                <td style={{ width: 70 }}>A+</td>
                <td style={{ width: 70 }}>O-</td>
                <td style={{ width: 150 }}>Branca</td>
                <td style={{ width: 200 }}>Em avaliação</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default ListaEspera;
