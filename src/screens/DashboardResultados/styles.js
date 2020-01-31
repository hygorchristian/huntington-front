import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
`;

export const DataContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  span{
    color: #A5A5A5;
    font-size: 14px;
    margin-top: -3px;
    margin-right: 15px;
    margin-left: 15px;
  }
`;

export const Ano = styled.span`
  font-size: 14px;
  color: #A9D4B2;
`;

export const Lista = styled.div`
  padding-right: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 16px;
  border: 1px solid transparent;
  border-bottom: 1px solid rgba(165,165,165,0.2);
  cursor: pointer;
  
  &:hover{  
    border: 1px solid #A9D4B2;
    border-radius: 5px;
    
    & .acao{
      display: flex;
    }
  }
  
  .horario{
    display: flex;
    font-size: 18px;
    font-weight: 200;
    color: ${TEXT_PRIMARY};
    margin-right: 22px;
  }  
  
  .separator{
    width: 1px;
    height: 33px;
    background-color: #A5A5A5;
  }
  
  .dados-usuario{
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    
    .linha{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    
    h2.nome{
      font-size: 16px;
      font-weight: 500;
      color: ${TEXT_PRIMARY};
    }
    
    .pin{
      font-size: 13px;
      font-weight: 200;
      color: #327A3D;
      margin-left: 15px;
    }
    
    .consulta{
      font-size: 13px;
      font-weight: 200;
      color: ${TEXT_PRIMARY};
    }
    
    label.origem{
      margin-left: 90px;
      font-size: 13px;
      color: #A9D4B2;
    }
    
    span.origem{
      font-size: 13px;
      color: ${TEXT_PRIMARY};
      margin-left: 5px;
    }
    
  }
  
  .resultados{
    display: flex;
    flex-direction: column;
    flex:1;
    margin-left: 48px;
    
    label{
      font-size: 13px;
      color: #A9D4B2;
    }
    
    span{
      font-size: 13px;
      color: ${TEXT_PRIMARY};
    }
  }
  
  .acao{
    font-size: 13px;
    color: #327A3D;
    display: none;
  }
`;
