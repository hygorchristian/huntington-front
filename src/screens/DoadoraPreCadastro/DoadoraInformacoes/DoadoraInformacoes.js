import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Container, Header, Recepcao } from './styles';
import AdicionarRow from '~/components/AdicionarRow';
import Loading from '~/components/Loading';
import { formatIdade } from '~/utils/data';
import { formatAddress } from '~/utils/string';
import Triagem from '~/components/Triagem';

function DoadoraInformacoes() {
  const history = useHistory();
  const { id, doadora } = useParams();
  const { data, loading, error } = useSelector((state) => state.doadora.preCadastro.item);

  const adicionarTriagem = () => {
    history.push(`/doadora/pre-cadastros/${id}/${doadora}/triagem`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        <div className="info">
          <div className="col mr-40">
            <label>ID</label>
            <span>{data.id}</span>
          </div>
          <div className="col mr-40">
            <label>PIN</label>
            <span>Inexistente</span>
          </div>
          <div className="col">
            <label>Apta para doação?</label>
            <span>Em análise</span>
          </div>
        </div>
        <div className="status">
          <div className="col">
            <label>Status de Atendimento</label>
            <span>{data.status.name}</span>
          </div>
        </div>
      </Header>
      <Recepcao>
        <fieldset>
          <legend>RECEPÇÃO</legend>
          <div className="content">
            <div className="col">
              <span className="label">{data.name}</span>
              <span className="label">{formatIdade(data.birth)}</span>
              <div className="infos">
                <span>{data.marital_status}</span>
                <span>{data.etnia.name}</span>
              </div>
            </div>
            <div className="col">
              <div className="info">
                <label>RG nº</label>
                <span>
                  {data.rg}
                  {' '}
                  {data.rg_expeditor}
                </span>
              </div>
              <div className="info">
                <label>Endereço</label>
                <span>{formatAddress(data.address)}</span>
              </div>
            </div>
          </div>
          <div className="contatos">
            <div className="info">
              <label>Celular</label>
              <span>{data.celphone}</span>
            </div>
            <div className="info">
              <label>Telefone</label>
              <span>{data.phone}</span>
            </div>
            <div className="info">
              <label>E-mail</label>
              <span>{data.email}</span>
            </div>
          </div>
        </fieldset>
      </Recepcao>
      {
        data.triagem ? (
          <Triagem data={data.triagem} />
        ) : (
          <div className="row">
            <AdicionarRow label="Adicionar" context="Triagem" onClick={adicionarTriagem} />
          </div>
        )
      }

    </Container>
);
}

export default DoadoraInformacoes;
