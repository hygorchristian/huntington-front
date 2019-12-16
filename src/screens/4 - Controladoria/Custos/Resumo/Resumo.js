import React from 'react';

import { Container } from './styles';

function Resumo() {
  return (
    <Container>
      <div className="row">
        <h2>Soma Saldos</h2>
        <table>
          <thead>
            <th>Fornecedor</th>
            <th>Saldo</th>
          </thead>
          <tbody>
            <tr>
              <td>MGR</td>
              <td>8.373,48</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <h2>EXAMES</h2>
        <table>
          <tbody>
            <tr>
              <td>Cerba</td>
              <td>8.373,48</td>
            </tr>
            <tr>
              <td>Genomas</td>
              <td>8.373,48</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <h2>TRANSPORTE</h2>
        <table>
          <tbody>
            <tr>
              <td>HNTG</td>
              <td>8.373,48</td>
            </tr>
            <tr>
              <td>4BIO</td>
              <td>8.373,48</td>
            </tr>
            <tr>
              <td>Uber</td>
              <td>8.373,48</td>
            </tr>
          </tbody>
        </table>
        <div className="total">
          <label>Total:</label>
          <span>5.000,00</span>
        </div>
      </div>
    </Container>
);
}

export default Resumo;
