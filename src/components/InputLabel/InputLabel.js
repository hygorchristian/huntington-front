import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import { Container } from './styles';
import MuiInput from '~/components/MuiInput';

function InputLabel({
 label, style, width = 200, ...props
}) {
  return (
    <Container width={width} style={{ style }}>
      <MuiInput
        name="weight"
        label={label}
        {...props}
      />
    </Container>
);
}

export default InputLabel;
