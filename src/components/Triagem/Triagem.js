import React from 'react';

import { Container } from './styles';
import items from './items';
import { isEmpty } from '~/utils/string';
import LabelValue from '~/components/LabelValue';

function Triagem({ data }) {
  return (
    <Container>
      <legend>Triagem</legend>
      {items.map((item) => (
        <div className="item" key={item.key}>
          <span className="label">{item.label}</span>
          <div className="resposta">
            <span className="value">{data[item.key] ? 'Sim' : 'Não'}</span>
            {
              !isEmpty(data[`${item.key}_details`]) && (
                <span className="obs">
                  {', '}
                  {data[`${item.key}_details`]}
                </span>
              )
            }
          </div>
        </div>
      ))}
      <div className="divider" />
      <div className="triagem-data">
        <LabelValue label="Peso" />
        <LabelValue label="Altura" />
        <LabelValue label="Pressão Arterial" />
        <LabelValue label="IMC" />
      </div>
    </Container>
  );
}

export default Triagem;
