import React from 'react';

import { Container } from './styles';
import items from './items';
import { isEmpty } from '~/utils/string';

function Triagem({ data }) {
  console.tron.log({ data: data.sterile });
  console.tron.log({ data });

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
    </Container>
  );
}

export default Triagem;
