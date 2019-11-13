import React, { useEffect } from 'react';
import { FiPhone, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Search from '../../components/Search';

import {
 Container, Header, Separator, Info, Content, Nome, ContatoContainer, StatusContainer
} from './styles';
import { HeaderActions } from '../../store/ducks/header';

const itens = [
  {
    id: 1,
    nome: 'Acusticon COM AP LTDA',
    codigo: 'CN020645',
    subgrupo: 'SN002736',
    sao: '1234',
    contato: 'email@otica.com.br',
    localizacao: 'Vila Velha/ES',
    status: {
      color: '#3C8A2E',
      label: 'Ativo'
    }
  },
  {
    id: 2,
    nome: 'Óticas Pop',
    codigo: 'CN020654',
    subgrupo: 'SN002736',
    sao: '0125',
    contato: 'email@otica.com.br',
    localizacao: 'Vila Velha/ES',
    status: {
      color: '#3C8A2E',
      label: 'Ativo'
    }
  },
  {
    id: 3,
    nome: 'Acusticon COM AP LTDA',
    codigo: 'CN020645',
    subgrupo: 'SN002736',
    sao: '1234',
    contato: 'email@otica.com.br',
    localizacao: 'Vila Velha/ES',
    status: {
      color: '#9A9B9C',
      label: 'Inativo'
    }
  },
  {
    id: 4,
    nome: 'Óticas Pop',
    codigo: 'CN020654',
    subgrupo: 'SN002736',
    sao: '0125',
    contato: 'email@otica.com.br',
    localizacao: 'Vila Velha/ES',
    status: {
      color: '#3C8A2E',
      label: 'Ativo'
    }
  },
];

function Titulo({ titulo, codigo }) {
  return (
    <Nome>
      <h3>{titulo}</h3>
      <span>{codigo}</span>
    </Nome>
  );
}

function Status({ status }) {
  return (
    <StatusContainer color={status.color}>
      <div />
      <span>{status.label}</span>
    </StatusContainer>
  );
}

function Contato({ contato }) {
  return (
    <ContatoContainer>
      <h3>{contato}</h3>
      <div>
        <FiPhone />
        <span>
          <FiChevronDown />
        </span>
      </div>
    </ContatoContainer>
  );
}

function Clientes({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeaderActions.headerSetBack(null));
  }, []);

  const navigate = (id) => {
    history.push(`/clientes/${id}`);
  };

  return (
    <Container>
      <Header>
        <h1>Clientes</h1>
        <Search />
        <Separator />
        <Info color="#008BD0">
          <span>Ativos</span>
          <h2>32</h2>
        </Info>
        <Info color="#9A9B9C">
          <span>Inativos</span>
          <h2>11</h2>
        </Info>
      </Header>
      <Content>
        <table cellSpacing={0}>
          <thead>
            <th />
            <th>Subgrupo</th>
            <th>SAO</th>
            <th>Contato</th>
            <th>Localização</th>
            <th />
          </thead>
          <tbody>
            {
            itens.map((item) => (
              <tr key={item.id} onClick={() => navigate(item.id)}>
                <td>
                  <Titulo titulo={item.nome} codigo={item.codigo} />
                </td>
                <td>{item.subgrupo}</td>
                <td>{item.sao}</td>
                <td><Contato contato={item.contato} /></td>
                <td>{item.localizacao}</td>
                <td><Status status={item.status} /></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </Content>
    </Container>
);
}

export default Clientes;
