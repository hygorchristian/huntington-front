import styled from 'styled-components';
import MDCard from '@material-ui/core/Card';
import BuscaBase from '~/components/Busca';
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
    font-size: 18px;
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
  width: 100%;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 100px;
`;


export const Card = styled(MDCard).attrs({
  elevation: 4
})`
  padding: 20px;
  
  .label-value{
    margin-right: 50px;
  }
  
  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .separator-h{
    width: 100%;
    height: 1px;
    background-color: #e2e2e2;
    margin: 20px 0;
  }
  
  .separator-v{
    height: 80px;
    width: 1px;
    background-color: #e2e2e2;
    margin: 0 20px;
  }
`;
