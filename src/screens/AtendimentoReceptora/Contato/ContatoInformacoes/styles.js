import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 850px;
  
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
        color: #ABABAB;
      }
      
      span{
        display: block;
        color: #646464;
        font-size: 14px;
      }
    }
`;

export const Questionario = styled.div`
  width: 850px;
  margin-top: 20px;
  
  fieldset{  
    position: relative;   
    margin-bottom: 50px; 
    
    legend{
      color: #3A6E50;
      padding-left: 8px;
      padding-right: 8px;
    }
    
    .content{      
      display: flex;
      flex-direction: row;
      
      .item{
        display: flex;
        flex-direction: column;
        margin-right: 60px;
        
        label{
          font-size: 13px;
          color: #ABABAB;
        }
        
        .value{
          font-size: 14px;
          color: #646464;
        }
      }
    }
  }
`;
