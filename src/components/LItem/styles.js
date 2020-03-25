import styled from 'styled-components';
import MDCard from '@material-ui/core/Card/Card';

export const Container = styled(MDCard).attrs({
  elevation: 3
})`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .grid{
    flex: 1;
    display: grid;
    padding: 20px;
    grid-row-gap: 20px;
    
    grid-template-columns: 1fr 1fr;
  }
    
`;
