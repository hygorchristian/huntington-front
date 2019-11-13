import React, { useEffect } from 'react';
import { FiPhone, FiChevronDown } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import Search from '../../components/Search';

import {
  Container,
  Header,
  Content,
  Nome,
  ContatoContainer,
  Title,
  TabController,
  TabContainer
} from './styles';
import { HeaderActions } from '../../store/ducks/header';

const itens = [
  {
    id: 1,
    numero: 1,
    nome: 'Acusticon COM AP LTDA',
    codigo: 'CN020645',
    endereco: 'Av. Tulio de Rose, 80, Sala 357 Passo da Areia',
    cidade: 'Porto Alegre/RS',
  },
  {
    id: 2,
    numero: 2,
    nome: 'Acusticon COM AP LTDA',
    codigo: 'CN020645',
    endereco: 'Av. Tulio de Rose, 80, Sala 357 Passo da Areia',
    cidade: 'Porto Alegre/RS',
  },
  {
    id: 3,
    numero: 3,
    nome: 'Acusticon COM AP LTDA',
    codigo: 'CN020645',
    endereco: 'Av. Tulio de Rose, 80, Sala 357 Passo da Areia',
    cidade: 'Porto Alegre/RS',
  },
  {
    id: 4,
    numero: 4,
    nome: 'Acusticon COM AP LTDA',
    codigo: 'CN020645',
    endereco: 'Av. Tulio de Rose, 80, Sala 357 Passo da Areia',
    cidade: 'Porto Alegre/RS',
  },
];

function Titulo({ titulo, codigo }) {
  return (
    <Nome>
      <span>{codigo}</span>
      <h3>{titulo}</h3>
    </Nome>
  );
}

function Contato() {
  return (
    <ContatoContainer>
      <div>
        <FiPhone />
        <span>
          <FiChevronDown />
        </span>
      </div>
    </ContatoContainer>
  );
}

function Tab({ active, children }) {
  return (
    <TabContainer active={active}>
      <span>{children}</span>
      <div />
    </TabContainer>
  );
}

function Cliente({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeaderActions.headerSetBack({ label: 'Clientes', route: '/clientes' }));
  }, []);

  const navigate = (id) => {
    history.push(`/clientes/${id}`);
  };

  return (
    <Container>
      <Header>
        <Title>
          <h1>Acusticon COM AP LTDA</h1>
          <h4>CN015864</h4>
        </Title>
        <TabController>
          <Tab active>Lojas</Tab>
          <Tab>Usuários</Tab>
          <Tab>Mensagens</Tab>
        </TabController>
      </Header>
      <Content>
        <table cellSpacing={0}>
          <thead>
            <th>Nº</th>
            <th>Loja</th>
            <th>Endereço</th>
            <th>Cidade/UF</th>
            <th />
          </thead>
          <tbody>
            {
            itens.map((item) => (
              <tr key={item.id} onClick={() => navigate(item.id)}>
                <td>{item.numero}</td>
                <td>
                  <Titulo titulo={item.nome} codigo={item.codigo} />
                </td>
                <td>{item.endereco}</td>
                <td>{item.cidade}</td>
                <td><Contato /></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
  );
}

export default Cliente;
