import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

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
  flex-direction: column;
  justify-content: center;
  padding-right: 45px;
  font-size: 14px;
  font-weight: 500;
  color: #707070;
  margin-top: 20px;
  
  h1{
    font-size: 22px;
    font-weight: 500;
    color: #707070;
    flex: 1;
  } 
  
  h3{
    font-size: 13px;
    color: ${TEXT_SECONDARY};
    font-weight: 400;
    margin-top: 5px;
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
  width: 100%;
  padding-top: 30px;
  padding-bottom: 100px;
  
  table{
    min-width: 900px;
    padding-right: 45px;
    
    th{
      font-size: 13px;
      color: #A5A5A5;
      font-weight: 400;
    }
    
    tr{
      height: 60px;
      cursor: pointer;
    }
    
    td{
      border-bottom: 1px solid rgba(165,165,165,0.2);
      font-size: 14px;
      font-weight: 400;
      color: #707070;
      text-align: center;
    }
  }
  
  .complemento{
    display: grid;
    width: 900px;
    padding: 30px;
    grid-template-columns: 180px 200px 1fr 250px;    
    grid-row-gap: 10px;
      border-bottom: 1px solid rgba(165,165,165,0.2);
  }
  
  .extra-info{
    display: flex;
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #F3F9F4;
    border-radius: 5px;
  }
  
  .status-box{
    min-height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 14px;
    border-radius: 5px;
    background-color: #F3F9F4;
    width: 900px;
    margin-top: 20px;
    
    h1{
      font-size: 14px;
      font-weight: 600;
    }
    
    .separator{
      background-color: rgba(112,112,112,0.1);
      height: 80px;
      width: 1px;
      display: flex;
      margin: 0 12px;
    }
    
    .content{
      display: grid;
      grid-template-columns: 170px 140px 160px 200px;
    }
    
  }
`;
