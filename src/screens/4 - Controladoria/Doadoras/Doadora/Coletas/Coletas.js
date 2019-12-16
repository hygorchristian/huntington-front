import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function Coletas() {
  const history = useHistory();

  const openColeta = () => {
    history.push('/controladoria/doadoras/1/coleta/1');
  };

  return (
    <Container>
      <table>
        <thead>
          <th>sjajs</th>
          <th>Origem</th>
          <th>Mês</th>
          <th>Ano</th>
          <th>Loja</th>
          <th>Fresco</th>
          <th>Total</th>
          <th>Backup</th>
        </thead>
        <tbody>
          <tr onClick={openColeta}>
            <td>1ª Coleta</td>
            <td>Mutirão</td>
            <td>Agosto</td>
            <td>2018</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </Container>
);
}

export default Coletas;
