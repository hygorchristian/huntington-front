import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.fieldset`
  width: 750px;
  
  legend{
    text-transform: uppercase;
  }
  
  .item{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
    
    .label{
      color: ${TEXT_SECONDARY};
      font-size: 14px;
      width: 350px;
    }
    
    .resposta{
      flex: 1;
      display: flex;
      flex-direction: row;
      
      .value{
        font-size: 13px;
      }
    }
  }
`;
