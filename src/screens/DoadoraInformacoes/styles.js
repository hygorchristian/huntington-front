import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  width: 580px;
  
  .info{
    height: 70px;
    background-color: #ddf2e5;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    margin-right: 15px;   
    flex: 1; 
  }
  
  .status{
    height: 70px;
    background-color: #ddf2e5;
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
  
  .col{
      display: flex;
      flex-direction: column;
      
      label{
        font-size: 13px;
        color: #ABABAB;
      }
      
      span{
        display: block;
        color: #646464;
        font-size: 14px;
      }
    }
`;

export const Recepcao = styled.div`
  width: 580px;
  margin-top: 40px;
  
  fieldset{  
    width: 100%;
    padding: 20px 15px;
    border-radius: 5px;
    border: 1px solid #51996f;
    position: relative;
    
    &:after{
      content: url("/icons/check-circle.svg");
      position: absolute;
      top: 0;
      margin-top: 2px;
      right: 10px;
      background-color: #ffffff;
      padding: 0 5px;
      color: #51996f;
    }
    
    .content{      
      display: flex;
      flex-direction: row;
    }
    
    .contatos{
      display: flex;
      flex-direction: row;
      
      .info{
        margin-right: 30px;
      }
    }
    
    legend{
      color: #3A6E50;
      padding-left: 8px;
      padding-right: 8px;
    }
    
    .info{
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      
      label{
        font-size: 13px;
        color: #ABABAB;
      }
      
      span{
        display: block;
        color: #646464;
      }
    }
    
    .col{
      display: flex;
      flex-direction: column;
      flex: 1;
      
      .label{
        display: block;
        font-size: 14px;
        color: #646464;
        margin-bottom: 5px;
      }
      
      .infos{
        display: flex;
        flex-direction: row;
        
        span{
          display: block;
          height: 35px;
          border-radius: 3px;
          border: 1px solid #51996f;
          line-height: 34px;
          width: 75px;
          text-align: center;
          margin-right: 10px;
          margin-top: 10px;
          color: #3A6E50;
          font-size: 13px;
        }
      }
    }
    
   
  }
`;
