import styled from 'styled-components';
import MdButton from '@material-ui/core/Button';

export const Button = styled(MdButton).attrs({
  color: ({ error, color }) => (error ? 'secondary' : color),
})`

  span{
    color: ${({ color }) => (color === 'primary' ? '#ffffff' : 'inherit')}
  }
`;
