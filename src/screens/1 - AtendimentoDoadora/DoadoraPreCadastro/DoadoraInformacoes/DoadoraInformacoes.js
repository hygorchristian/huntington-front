import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Container, Header } from './styles';
import AdicionarRow from '~/components/AdicionarRow';
import Loading from '~/components/Loading';
import Triagem from '~/components/Triagem';
import RecepcaoDoadora from '~/components/RecepcaoDoadora';

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
      {data && <RecepcaoDoadora data={data} />}
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
