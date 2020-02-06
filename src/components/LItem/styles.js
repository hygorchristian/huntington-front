import styled from 'styled-components';
import MDCard from '@material-ui/core/Card/Card';

export const Container = styled(MDCard).attrs({
  elevation: 1
})`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .flex{
    flex: 1;
  }
    
`;
