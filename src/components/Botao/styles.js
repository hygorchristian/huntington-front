import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Container = styled(Button).attrs({
  variant: 'contained'
})`
  span{
    color: ${({ color }) => (color === 'primary' ? '#ffffff' : 'inherit')};
  }
`;
