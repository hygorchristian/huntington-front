import React from 'react';
import {
  FiCalendar,
  FiMapPin,
} from 'react-icons/fi';
import {
  FaUserMd,
} from 'react-icons/fa';

import { Container } from './styles';

function getIconByName(name) {
  switch (name) {
    case 'calendar':
      return FiCalendar;
    case 'map-pin':
      return FiMapPin;
    case 'doctor':
      return FaUserMd;
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
          size={15}
          color="#BCBCBC"
          style={{ marginRight: 14 }}
        />
      ) }
      <span>{children}</span>
    </Container>
);
}

export default IconLabel;
