import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  background-color: #EEEEEE;
  padding: 74px 30px;
  color: #646464;
  height: calc(100vh - 90px);
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  
  h2{
    font-size: 18px;
    font-weight: 400;
  }
  
  fieldset{
    border-radius: 5px;
    padding: 25px 15px;
    margin-top: 35px;
    border: 1px solid rgba(112,112,112,0.6);
    
    legend{
      margin-left: 10px;
      text-transform: uppercase;  
      padding-left: 10px;  
      padding-right: 10px;  
    } 
        
    & > span{
      display: flex;
      margin-bottom: 5px;
    }
    
    .info{
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      margin-bottom: 20px;
      
      span{
        height: 35px;
        padding: 0 20px;
        line-height: 35px;
        text-align: center;
        margin-right: 10px;
        border: 1px solid rgba(112,112,112,0.6);
        border-radius: 4px;
      }
    }
  }
  
  .triagem{
    .item{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 40px;
      
      .label{
        flex: 1;
      }
    }
    
    .separator{
      height: 1px;
      width: 100%;
      background: #c7c7c7;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    
    .triagem-data{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
