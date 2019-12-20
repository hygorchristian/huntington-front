import React from 'react';

import { Container } from './styles';

function Botao({ color = 'primary', ...props }) {
  return <Container color={color} {...props} />;
}

export default Botao;
