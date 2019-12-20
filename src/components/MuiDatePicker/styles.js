import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const Container = styled(KeyboardDatePicker).attrs({
  margin: 'normal',
  format: 'dd/MM/yyyy',
  fullWidth: true,
  variant: 'outlined',
  KeyboardButtonProps: {
    'aria-label': 'change date'
  }
})`
  
`;
