import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { Container } from './styles';

function MuiDatePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container {...props} />
    </MuiPickersUtilsProvider>
);
}

export default MuiDatePicker;
