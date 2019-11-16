import React, { useRef } from 'react';

import { Container } from './styles';

function Checkbox({ label, checked, ...props }) {
  const inputRef = useRef(null);

  return (
    <Container {...props}>
      <input ref={inputRef} name="teste" type="checkbox" checked={checked} />
      <label htmlFor="teste">{label}</label>
    </Container>
);
}

export default Checkbox;
