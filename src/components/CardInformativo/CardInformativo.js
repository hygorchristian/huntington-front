import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container } from './styles';

function CardInformativo({
 children, alta, baixa, value
}) {
  return (
    <Container>
      <h3>{children}</h3>
      <div className="valor">
        {alta && <FiChevronUp color="#A9D4B2" />}
        {baixa && <FiChevronDown color="#E07676" />}
        <span>{value}</span>
      </div>
    </Container>
);
}

export default CardInformativo;
