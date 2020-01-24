import React from 'react';

import { Container } from './styles';
import { formatIdade } from '~/utils/data';
import LabelValue from '~/components/LabelValue';
import { formatAddress, isEmpty } from '~/utils/string';
import items from '~/components/Triagem/items';

function Resumo({ doadora }) {
  if (!doadora) return null;
  const triagem = doadora.triagem;

  return (
    <Container>
      <h2>Resumo</h2>
      <fieldset>
        <legend>Recepção</legend>
        <span>{doadora.name}</span>
        <span>{formatIdade(doadora.birth)}</span>
        <div className="info">
          <span>{doadora.marital_status}</span>
          <span>{doadora.etnia.name}</span>
        </div>
        <LabelValue label="RG">
          {doadora.rg}
          {' '}
          {doadora.rg_expeditor}
        </LabelValue>
        <LabelValue label="Endereço">
          {formatAddress(doadora.address)}
        </LabelValue>
        <LabelValue label="Celular">
          {doadora.celphone}
        </LabelValue>
        <LabelValue label="Telefone">
          {doadora.phone}
        </LabelValue>
        <LabelValue label="Email">
          {doadora.email}
        </LabelValue>

      </fieldset>
      <fieldset className="triagem">
        <legend>Triagem</legend>
        {triagem && items.map((item) => (
          <div className="item" key={item.key}>
            <span className="label">{item.label}</span>
            <div className="resposta">
              <span className="value">{triagem[item.key] ? 'Sim' : 'Não'}</span>
            </div>
          </div>
        ))}
        <div className="separator" />
        <div className="triagem-data">
          <LabelValue label="Peso">{triagem.weight}</LabelValue>
          <LabelValue label="Altura">{triagem.height}</LabelValue>
          <LabelValue label="Pressão Arterial">{triagem.arterial_press}</LabelValue>
          <LabelValue label="IMC">{triagem.imc}</LabelValue>
        </div>
      </fieldset>
    </Container>
  );
}

export default Resumo;
