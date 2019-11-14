import React from 'react';
import { FiMapPin, FiUsers } from 'react-icons/fi';

import {
 Container, Header, Content, Busca, Subheader
} from './styles';
import Voltar from '../../components/Voltar/Voltar';

const items = [1, 2, 3, 4, 5];

function PreCadastro({ history }) {
  const novaDoadora = () => {
    history.push('/pre-cadastros/1/nova-doadora');
  };

  const detalhesDoadora = (id) => {
    history.push('/doadora/1');
  };

  return (
    <Container>
      <Voltar label="Pré-Cadastros" route="/pre-cadastros" />
      <Header>
        <h1>Mutirão Dia da Saúde</h1>
        <div className="quantidade">
          <FiUsers color="#A9D4B2" size={14} />
          <span>52</span>
        </div>
        <div className="endereco">
          <FiMapPin color="#A9D4B2" size={14} />
          <span>Vila Mariana</span>
        </div>
      </Header>
      <Subheader>
        <Busca />
        <button onClick={novaDoadora}>Adicionar</button>
      </Subheader>
      <Content>
        <table cellSpacing={0}>
          <thead>
            <th>ID</th>
            <th />
            <th />
            <th>Interesse em doar</th>
            <th>Apta a doar</th>
            <th>Status de Atendimento</th>
          </thead>
          <tbody>
            {
            items.map((item) => (
              <tr className="linha" onClick={() => detalhesDoadora(item)}>
                <td style={{ width: 70 }}>123456</td>
                <td>Carolina Marrocos</td>
                <td>emaildoadora@email.com.br</td>
                <td style={{ width: 120 }}>yes</td>
                <td style={{ width: 100 }}>Em análise</td>
                <td style={{ width: 150 }}>Pré-Cadastrada</td>
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
