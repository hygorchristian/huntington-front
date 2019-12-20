import React from 'react';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Container } from './styles';
import 'moment/locale/pt-br';


function MuiDatePicker(props) {
  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale="pt-BR"
    >
      <Container {...props} />
    </MuiPickersUtilsProvider>
);
}

export default MuiDatePicker;
