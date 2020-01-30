import React from 'react';

import { Container } from './styles';
import { formatIdade } from '~/utils/data';
import { formatAddress } from '~/utils/string';

function RecepcaoDoadora({ data }) {
  return (
    <Container>
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
    </Container>
);
}

export default RecepcaoDoadora;
