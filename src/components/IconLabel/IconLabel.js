import React from 'react';
import {
  FiCalendar,
  FiMapPin,
} from 'react-icons/fi';

import { Container } from './styles';

function getIconByName(name) {
  switch (name) {
    case 'calendar':
      return FiCalendar;
    case 'map-pin':
      return FiMapPin;
    default:
      return null;
  }
}

function IconLabel({ name, children, ...props }) {
  const Icon = getIconByName(name);

  return (
    <Container {...props}>
      { Icon && (
        <Icon
          size={12}
          color="#BCBCBC"
          style={{ marginRight: 14 }}
        />
      ) }
      <span>{children}</span>
    </Container>
);
}

export default IconLabel;
