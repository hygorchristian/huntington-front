import React from 'react';

import { Container } from './styles';

function Loading({ size = 20, ...props }) {
  return <Container size={size} {...props} />;
}

export default Loading;
