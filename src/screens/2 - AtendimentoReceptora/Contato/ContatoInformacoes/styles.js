import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  width: 950px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .row{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  
  .info{
    height: 70px;
    background-color: rgba(169,212,178,0.15);
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;  
    flex: 1; 
  }
  
  .status{
    height: 70px;
    background-color: rgba(169,212,178,0.15);
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
  }
  
  .mr-40{      
    margin-right: 40px;
  }
  
  .mr-80{      
    margin-right: 80px;
  }
  
  .col{
      display: flex;
      flex-direction: column;
      
      label{
        font-size: 13px;
        color: ${TEXT_SECONDARY};
      }
      
      span{
        display: block;
        color: #646464;
        font-size: 14px;
      }
    }
`;

export const Questionario = styled.div`
  width: 100%;
  margin-top: 20px;
  
  fieldset{  
    margin-bottom: 50px; 
    
    legend{
      color: #3A6E50;
      padding-left: 8px;
      padding-right: 8px;
    }
    
    .info{
      display: grid;
      grid-template-columns: 150px 160px 1fr 180px;
      
      .icon-value{
        display: flex;
        align-items: center;
        align-self: center;
      
        span{
          margin-left: 12px;
        }
      }
    }
    
    .fichas{
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      margin-top: 35px;
    }
    
    .consideracoes{
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      width: 100%;
    
      h2{
        font-size: 12px;
        font-weight: 400;
        color: ${TEXT_SECONDARY};
      }
      
      p{
        font-size: 14px;      
      }
    }
    
    .controller{
      margin-top: 50px;
      margin-bottom: 20px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;
