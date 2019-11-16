import React from 'react';

import { Container } from './styles';

function ItemResultado({
 value, icon, observacao, label
}) {
  const Icon = icon;

  return (
    <Container>
      <label>{label}</label>
      <div className="value">
        <span>{value}</span>
        {icon && <Icon />}
      </div>
      {observacao && (
        <div className="value">
          <span>{observacao}</span>
        </div>
      )}
    </Container>
);
}

export default ItemResultado;
