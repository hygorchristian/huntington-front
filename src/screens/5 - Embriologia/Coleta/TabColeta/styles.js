import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  width: 950px;
  padding-top: 35px;
  
  .header{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h2{
      font-size: 14px;
      font-weight: 500;
      color: #646464;
      width: 140px;
    }
    
    .line{
      height: 1px;
      width: 100%;
      background-color: rgba(165,165,165,0.2);
    }
  }
  
  fieldset{
    margin-bottom: 70px;
    
    legend{
      font-size: 13px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      
      span{
        margin-left: 10px;
        margin-top: 2px;
      }
    }
    
    .data{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      .adicionar-coleta{
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding-right: 20px;
      }
      
      .contagem{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 70px;
        
        span{
          font-size: 14px;
          line-height: 19px;
          color: ${TEXT_SECONDARY};
          
          &.quantidade{
            font-weight: 800;
            line-height: 19px;
            margin-left: 18px;
            margin-top: 2px;
          }
        }
        
        
      }
    }    
  }
`;
