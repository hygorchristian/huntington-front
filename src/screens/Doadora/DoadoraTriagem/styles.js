import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  flex: 1;
  margin-left: 45px;
`;

export const Voltar = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  
  h3{
    font-weight: 400;
    font-size: 13px;
    margin-left: 15px;
    color: ${TEXT_PRIMARY};
  }
`;

export const Header = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 45px;
  font-size: 14px;
  font-weight: 500;
  color: ${TEXT_PRIMARY};
  border-bottom: 1px solid rgba(165,165,165,0.3);
  
  h1{
    font-size: 22px;
    font-weight: 500;
    color: ${TEXT_PRIMARY};
    flex: 1;
  } 
  
  .endereco, .quantidade{
    display: flex;
    flex-direction: row;
    align-items: center;    
    margin-left: 30px;
    
    span{
      margin-left: 8px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-top: 30px;
  
  .perguntas{  
    width: 800px;
    padding-bottom: 35px;
    border-bottom: 1px solid rgba(165,165,165,0.3);
  }
  
  .infos{
    display: flex;
    flex-direction: column;
    width: 400px;
    padding-top: 40px;
    padding-bottom: 56px;
    
    .info{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
      
      label{
        width: 180px;
        font-size: 13px;
        color: ${TEXT_PRIMARY};
      }
      
      input{
        flex: 1;
        width: 10px;
        
        
      }
      
      textarea{
        height: 90px;
        flex: 1;
        margin-top: 15px;
      }
      
      span{
        color: #B9B9B9;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 13px;
      }
    }
  }
  
  .controller{
    width: 800px;
    border-top: 1px solid rgba(165,165,165,0.3);
    padding-top: 35px;
    padding-bottom: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
    
  }
`;
