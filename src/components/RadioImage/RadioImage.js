import React from 'react';
import { CheckBox, CheckCircle } from '@material-ui/icons';

import { Container } from './styles';

function RadioImage({
 checked, image, label, onCheck, ...props
}) {
  return (
    <Container checked={checked} onClick={onCheck}>
      <div className="image">
        {checked && <CheckCircle className="icon" color="primary" />}
        <img src={image} alt="option" />
      </div>
      <span className="label">{label}</span>
    </Container>
);
}

export default RadioImage;
