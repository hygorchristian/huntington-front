import React from 'react';

import { Container } from './styles';

function Reservas() {
  return (
    <Container>
      <table>
        <thead>
          <th />
          <th>JULHO</th>
          <th>AGOSTO</th>
          <th>SETEMBRO</th>
        </thead>
        <tbody>
          <tr>
            <td className="head">Estoque inicial</td>
            <td>100</td>
            <td>100</td>
            <td>90</td>
          </tr>
          <tr>
            <td className="head">Entrada</td>
            <td>+30</td>
            <td>+40</td>
            <td>+20</td>
          </tr>
          <tr>
            <td className="head">Reservas</td>
            <td>-30</td>
            <td>-50</td>
            <td>-60</td>
          </tr>
          <tr className="final">
            <td className="head">Estoque final</td>
            <td>100</td>
            <td>90</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </Container>
);
}

export default Reservas;
