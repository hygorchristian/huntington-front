import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Main = styled.div`
  flex: 1;
  margin-left: 45px;
`;

export const Resumo = styled.div`
  width: 500px;
  background-color: #EEEEEE;
  padding: 74px 30px;
  color: #646464;
  
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
    font-size: 18px;
    font-weight: 500;
    color: ${TEXT_PRIMARY};
  } 
  
  span{
    font-size: 13px;
    color: ${TEXT_PRIMARY};
    margin-left: 8px;
    font-weight: 200;
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

export const Subheader = styled.div`
  padding: 20px 45px 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const Content = styled.div`
  width: 100%;
  
  form{
    margin-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(112,112,112,0.2);    
  }
  
  .grid{
    width: 600px;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  
  .line{
    width: 600px;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr;
  }
  
  .buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
    width: 600px;
  }
`;
