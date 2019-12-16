import React from 'react';

import { Container, Header, Content } from './styles';
import LabelValue from '~/components/LabelValue';
import MonthPicker from '~/components/MonthPicker';
import data from './data';

function Custos() {
  return (
    <Container>
      <Header>
        <div className="info">
          <LabelValue label="Entrada">25/05/2019</LabelValue>
          <LabelValue label="Origem">Mutirão</LabelValue>
          <div />
          <LabelValue label="Custos Totais">R$ 6.000,00</LabelValue>
        </div>
      </Header>
      <Content>
        <MonthPicker />
        <table>
          <thead>
            <th />
            <th>Desc. Custo</th>
            <th>Fornecedor</th>
            <th>NF</th>
            <th>R$</th>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr key={val.id}>
                <td>{val.data}</td>
                <td className="left">{val.desc_custo}</td>
                <td>{val.fornecedor}</td>
                <td>{val.nf}</td>
                <td>{val.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          <label>Total:</label>
          <span>5.000,00</span>
        </div>
      </Content>
    </Container>
  );
}

export default Custos;
