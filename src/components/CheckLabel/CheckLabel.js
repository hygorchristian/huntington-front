import React from 'react';

import { Container } from './styles';

function CheckLabel({ label, placeholder, ...props }) {
  return (
    <Container {...props}>
      <div className="label">
        <label>{label}</label>
      </div>
      <div className="inputs">
        <button className="active">Sim</button>
        <button>Não</button>
        <input placeholder={placeholder} />
      </div>

    </Container>
);
}

export default CheckLabel;
