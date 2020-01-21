import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container } from './styles';

function MuiCheckbox({
 label, checked, onChange, ...props
}) {
  const handleChange = () => {
    const val = !!checked;
    onChange(!val);
  };

  return (
    <Container>
      <FormControlLabel
        label={label}
        control={(
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            {...props}
          />
        )}
      />
    </Container>
  );
}

export default MuiCheckbox;
