import styled from 'styled-components';
import BuscaBase from '../../components/Busca';

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
    color: #707070;
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
  color: #707070;
  border-bottom: 1px solid rgba(165,165,165,0.3);
  
  h1{
    font-size: 18px;
    font-weight: 500;
    color: #707070;
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

export const Subheader = styled.div`
  padding: 20px 45px 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  & > button{
    height: 35px;
    width: 115px;
    background-color: #3E6F55;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }
`;


export const Busca = styled(BuscaBase)`
  width: 450px;
`;


export const Content = styled.div`
  width: 100%;
  
  form{
    margin-top: 40px;
    width: 500px;
    padding-bottom: 80px;
    border-bottom: 1px solid rgba(112,112,112,0.2);
    
    & > input{
      width: 100%;
        margin-bottom: 20px;
    }
    
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;
      
      & > input{
        flex: 1;
        margin-left: 10px;
      }
    }
  }
  
  .buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 32px;
    width: 500px;
  
    button{
      height: 35px;
      width: 100px;
      border-radius: 5px;
      background-color: #3E6F55;
      font-size: 13px;
      text-transform: uppercase;
      color: #ffffff;
      margin-left: 18px;
      cursor: pointer;
      transition: all 250ms ease-in-out;
      
      &.light{
        background-color: #ffffff;
        color: #3E6F55;
        border: 1px solid #3E6F55;
      }
      
      &:active{
        opacity: .5;
        border: 1px solid #8adab3;
      }
    }
  }
`;
