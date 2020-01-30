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
        <LabelValue label="Peso">{data.weight}</LabelValue>
        <LabelValue label="Altura">{data.height}</LabelValue>
        <LabelValue label="Pressão Arterial">{data.arterial_press}</LabelValue>
        <LabelValue label="IMC">{data.imc}</LabelValue>

      </div>
    </Container>
  );
}

export default Triagem;
