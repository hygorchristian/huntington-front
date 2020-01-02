import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Header, Recepcao } from './styles';
import AdicionarRow from '~/components/AdicionarRow';

function DoadoraInformacoes() {
  const history = useHistory();

  const adicionarTriagem = () => {
    history.push('/doadora/detalhes/1/triagem');
  };

  return (
    <Container>
      <Header>
        <div className="row">
          <div className="info">
            <div className="col mr-40">
              <label>ID</label>
              <span>12345678</span>
            </div>
            <div className="col mr-40">
              <label>PIN</label>
              <span>123456</span>
            </div>
            <div className="col mr-40">
              <label>Origem</label>
              <span>Mutirão</span>
            </div>
            <div className="col">
              <label>Indicação</label>
              <span>Sim</span>
            </div>
          </div>
          <div className="status">
            <div className="col">
              <label>D.P.M</label>
              <span>26/06/2019</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="status" style={{ marginRight: 15, width: 170 }}>
            <div className="col">
              <label>Status de atendimento</label>
              <span>Programada</span>
            </div>
          </div>
          <div className="status" style={{ marginRight: 15, width: 170 }}>
            <div className="col">
              <label>Perfil</label>
              <span>Ativa</span>
            </div>
          </div>
        </div>
      </Header>
      <Recepcao>
        <fieldset>
          <legend>RECEPÇÃO</legend>
          <div className="content">
            <div className="col">
              <span className="label">Maria Carolina do Rosário</span>
              <span className="label">28 anos, 05 de maio de 1991</span>
              <div className="infos">
                <span>Solteira</span>
                <span>Parda</span>
              </div>
            </div>
            <div className="col">
              <div className="info">
                <label>RG nº</label>
                <span>332548 SPTC/SP</span>
              </div>
              <div className="info">
                <label>Endereço</label>
                <span>Rua Itaboraí, 456, Bela Vista, São Paulo/SP, Apto 506, 25.654-98</span>
              </div>
            </div>
          </div>
          <div className="contatos">
            <div className="info">
              <label>Celular</label>
              <span>(11) 99966-9898</span>
            </div>
            <div className="info">
              <label>Telefone</label>
              <span>(11) 3333-9898 </span>
            </div>
            <div className="info">
              <label>E-mail</label>
              <span>emaildoadora@email.com.br </span>
            </div>
          </div>
        </fieldset>
      </Recepcao>
      <div className="row">
        <AdicionarRow label="Adicionar" context="Triagem" onClick={adicionarTriagem} />
      </div>
    </Container>
);
}

export default DoadoraInformacoes;
