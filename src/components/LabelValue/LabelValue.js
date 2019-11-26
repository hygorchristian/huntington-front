import React from 'react';

import { Container } from './styles';

function LabelValue({ label, children, ...props }) {
  return (
    <Container {...props}>
      <label>{label}</label>
      {children}
    </Container>
);
}

export default LabelValue;
