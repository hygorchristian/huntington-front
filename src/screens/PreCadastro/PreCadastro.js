import React from 'react';
import { FiMapPin, FiUsers } from 'react-icons/fi';
import AddIcon from '@material-ui/icons/Add';

import {
 Container, Header, Content, Busca, Subheader
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import Botao from '~/components/Botao';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import data from './mock';

function PreCadastro({ history }) {
  const novaDoadora = () => {
    history.push('/doadora/pre-cadastros/1/nova-doadora');
  };

  const detalhesDoadora = (id) => {
    history.push('/doadora/detalhes/1');
  };

  return (
    <Container>
      <Voltar label="Pré-Cadastros" route="/doadora/pre-cadastros" />
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
      <Content>
        <MuiTable schema={schema} data={data} />
        {/* <table cellSpacing={0}> */}
        {/*  <thead> */}
        {/*    <th>ID</th> */}
        {/*    <th /> */}
        {/*    <th /> */}
        {/*    <th>Interesse em doar</th> */}
        {/*    <th>Apta a doar</th> */}
        {/*    <th>Status de Atendimento</th> */}
        {/*  </thead> */}
        {/*  <tbody> */}
        {/*    { */}
        {/*    items.map((item) => ( */}
        {/*      <tr className="linha" onClick={() => detalhesDoadora(item)}> */}
        {/*        <td>123456</td> */}
        {/*        <td>Carolina Marrocos</td> */}
        {/*        <td>emaildoadora@email.com.br</td> */}
        {/*        <td>yes</td> */}
        {/*        <td>Em análise</td> */}
        {/*        <td>Pré-Cadastrada</td> */}
        {/*      </tr> */}
        {/*    )) */}
        {/*  } */}
        {/*  </tbody> */}
        {/* </table> */}
      </Content>
    </Container>
);
}

export default PreCadastro;
