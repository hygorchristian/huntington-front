import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const Container = styled(KeyboardDatePicker).attrs({
  margin: 'normal',
  format: 'DD/MM/YYYY',
  fullWidth: true,
  variant: 'outlined',
  okLabel: 'ok',
  cancelLabel: 'cancelar',
  KeyboardButtonProps: {
    'aria-label': 'change date'
  },
})`
  
`;
