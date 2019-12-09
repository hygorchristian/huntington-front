import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  
  table{
    width: 800px;
    margin-top: 50px;
    
    thead{
      th{
        font-size: 14px;
        font-weight: 400;
      }
    }
    
    tbody{
      tr{
        height: 50px;
        
        &.final td{        
          border-top: 1px solid #C9C9C9;
        }
      
        td{
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          
          &.head  {
            text-align: right;
            font-size: 14px;
            width: 150px;
          }       
        }
      }
    }
  }
`;
