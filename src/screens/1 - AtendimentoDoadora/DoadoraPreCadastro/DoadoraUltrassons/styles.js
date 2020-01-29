import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  width: 700px;
  padding-top: 35px;

  .preencher{
    height: 65px;
    border: 2px dashed #f0f0f0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  
  
  fieldset{
    cursor: pointer;
    
    legend{
      font-size: 13px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      letter-spacing: 1.11px;
      
      span{
        margin-left: 10px;
        margin-top: 2px;
      }
    }   
    
    .info{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      
      .item{
        display: flex;
        flex-direction: row;
        align-items: center;
      
        span{
          font-size: 14px;
          margin-right: 12px;
          margin-left: 12px;
        }
        
        .number{
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
    
    .conduta{
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    
      h4{
        font-size: 12px;
        color: ${TEXT_SECONDARY}
      }
      
      p{
        padding: 0;
        font-size: 14px;
      }
    }
  }
`;
