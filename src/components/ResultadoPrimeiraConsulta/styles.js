import styled from 'styled-components';

export const Container = styled.div`
  
  fieldset{
    
    legend{
      text-transform: uppercase;
    }  
    
    .data{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      span{
        font-size: 14px;
        color: #646464;
        margin-right: 40px;
        margin-left: 12px;
        margin-top: 1px;
      }
    }
    
    .check-label{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 48px;
      
      span{
        margin-right: 14px;
      }
    }
  }
`;
