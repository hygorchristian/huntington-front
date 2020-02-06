import React from 'react';

import { Container } from './styles';

function LabelValue({ label, children, ...props }) {
  return (
    <Container className="label-value" {...props}>
      <label>{label}</label>
      {children}
    </Container>
);
}

export default LabelValue;
