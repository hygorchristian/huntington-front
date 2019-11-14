import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import { Container } from './styles';

function InputLabel({
 label, type, width = 200, ...props
}) {
  return (
    <Container width={width} {...props}>
      <span>{label}</span>
      <div className="input-container">
        <input type={type} />
        {type === 'date' && <FiCalendar style={{ marginRight: 12 }} />}
      </div>
    </Container>
);
}

export default InputLabel;
