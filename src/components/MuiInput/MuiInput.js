import React from 'react';
import InputMask from 'react-input-mask';

import { Container } from './styles';

function MuiInput({
 mask, value, onChange, ...props
}) {
  if (mask) {
    return (
      <InputMask
        mask={mask}
        value={value}
        onChange={onChange}
        maskChar=""
      >
        {() => <Container {...props} />}
      </InputMask>
    );
  }

  return <Container value={value} onChange={onChange} {...props} />;
}

export default MuiInput;
