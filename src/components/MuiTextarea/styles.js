import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled(TextField).attrs({
  variant: 'outlined',
  margin: 'normal',
  fullWidth: true,
  autoComplete: 'off',
  multiline: true,
  rows: 4,
})`
`;
