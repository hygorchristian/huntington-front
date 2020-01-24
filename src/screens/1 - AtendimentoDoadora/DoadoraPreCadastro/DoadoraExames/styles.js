import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  padding-top: 35px;
  padding-bottom: 100px;
  
  .header{
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
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
  
  .exames-iniciais{
    height: 80px;
    width: 100%;
    background-color: #F8F8F8;
    border-radius: 5px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    padding: 17px 15px;
    
    .col{
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      
      .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        
        label{
          font-size: 14px;
          margin-top: 3px;
          margin-left: 12px;
        }
      }
      
      & > span, & > a{
        font-size: 13px;
        width: 100%;
        text-align: right;
      }
    }
  }

  .adicionar-coleta{
    height: 65px;
    border: 2px dashed #f0f0f0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  fieldset{
    margin-top: 50px;   
    cursor: pointer;
    
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
      
      .col{
        display: flex;
        flex-direction: column;
        margin-right: 45px;
        
        label{
          font-size: 13px;
          color: #ABABAB;
        }
        
        span{
          font-size: 14px;
          color: #646464;
          display: block;
        }
      }
      
      .inserir-resultados{
        display: none;
        flex: 1;
        
        span{
          display: block;
          width: 100%;
          text-align: right;
          font-size: 13px;
        }
      }
      
      &:hover .inserir-resultados{
        display: flex;
      }
    }
    
    
  }
`;
