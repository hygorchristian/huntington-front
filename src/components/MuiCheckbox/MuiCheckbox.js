import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container } from './styles';

function MuiCheckbox({ label, ...props }) {
  return (
    <Container>
      <FormControlLabel
        label={label}
        control={(
          <Checkbox
            value="checkedE"
            color="primary"
            {...props}
          />
        )}
      />
    </Container>
  );
}

export default MuiCheckbox;
