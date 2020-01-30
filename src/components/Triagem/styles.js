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
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ededed;
    
    .label{
      color: ${TEXT_SECONDARY};
      font-size: 14px;
      width: 350px;
      margin-right: 20px;
    }
    
    .resposta{
      flex: 1;
      display: flex;
      flex-direction: row;
      
      .value{
        font-size: 14px;
      }
      
      .obs{
        font-size: 14px;
      }
    }
  }
  
  .triagem-data{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 40px;
  }
`;
