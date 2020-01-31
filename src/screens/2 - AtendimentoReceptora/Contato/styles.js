import styled from 'styled-components';
import { TEXT_PRIMARY, TEXT_SECONDARY } from '~/utils/colors';

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
  flex-direction: column;
  justify-content: center;
  padding-right: 45px;
  font-size: 14px;
  font-weight: 500;
  color: ${TEXT_PRIMARY};
  margin-top: 20px;
  
  h1{
    font-size: 22px;
    font-weight: 500;
    color: ${TEXT_PRIMARY};
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
`;
