import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import InputLabel from '../../components/InputLabel';
import OptionsLabel from '../../components/OptionsLabel';

import {
  Container, Header, Voltar, Content, Main, Resumo
} from './styles';

function AdicionarDoadoraConcluir({ history, onVoltar }) {
  const navigate = () => {
    history.push('/pre-cadastros/1');
  };

  return (
    <Container>
      <Main>
        <Voltar onClick={navigate}>
          <FiChevronLeft />
          <h3>Mutirão dia da saúde</h3>
        </Voltar>
        <Header>
          <h1>Pré-cadastro</h1>
          <span>(Recepção)</span>
        </Header>
        <Content>
          <form>
            <div className="row">
              <InputLabel
                label="RG nº"
                type="text"
                width={160}
                style={{ marginRight: 20 }}
              />
              <InputLabel
                label="Orgão expeditor"
                type="text"
                width={160}
              />
            </div>
            <div className="row">
              <InputLabel
                label="Endereço"
                type="text"
                width={330}
                style={{ marginRight: 20 }}
              />
              <InputLabel
                label="Número"
                type="text"
                width={110}
              />
            </div>
            <div className="row">
              <InputLabel
                label="Complemento"
                type="text"
                width={450}
              />
            </div>
            <div className="row">
              <InputLabel
                label="CEP"
                type="text"
                width={130}
              />
            </div>
            <div className="row">
              <InputLabel
                label="Celular"
                type="text"
                width={200}
                style={{ marginRight: 20 }}
              />
              <InputLabel
                label="Telefone"
                type="text"
                width={200}
                style={{ marginRight: 20 }}
              />

            </div>
            <div className="row">
              <InputLabel
                label="E-mail"
                type="text"
                width={200}
              />
            </div>
          </form>
          <div className="buttons">
            <button className="light" onClick={onVoltar}>Voltar</button>
            <button>Concluir</button>
          </div>
        </Content>
      </Main>
      <Resumo>
        <h2>Resumo</h2>
        <fieldset>
          <legend>Recepção</legend>
          <span>Maria Carolina do Rosário</span>
          <span>28 anos, 05 de maio de 1992</span>
          <div className="info">
            <span>Solteira</span>
            <span>Parda</span>
          </div>
        </fieldset>
      </Resumo>

    </Container>
  );
}

export default withRouter(AdicionarDoadoraConcluir);
