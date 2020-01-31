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
`;

export const Content = styled.div`
  flex: 1;
  padding-top: 30px; 
  width: 420px;
  
  .data{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h2{
      font-size: 13px;
      font-weight: 400;
      margin-left: 10px;
      margin-top: 2px;    
    }
  }
  
  .resultados{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 60px;
  }
  
  .separator{
    height: 1px;
    width: 100%;
    background-color: rgba(165,165,165,0.2);
  }
  
  .controller{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 35px;
  }
`;
