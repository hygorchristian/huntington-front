import styled from 'styled-components';

export const Container = styled.div`
  flex:1 ;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  border-bottom: 1px solid rgba(165,165,165,0.3);
  align-items: flex-end;
  padding-bottom: 6px;
  
  h1{
    color: #707070;
    font-size: 18px;
    font-weight: 500;
    margin-right: 90px;
  }
  
  button{
    margin-left: 15px;
  }
`;

export const Lista = styled.div`
  max-width: 100%;
  padding-top: 28px;
  padding-right: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
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
  
  .dados-usuario{
    display: flex;
    flex-direction: column;
    width: 250px;
    align-self: center;
    
    .linha{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    
    h2.nome{
      font-size: 16px;
      font-weight: 500;
      color: #707070;
    }
    
    .cfa{
      font-size: 13px;
      font-weight: 500;
      color: #707070;
    }
    
    .consulta{
      font-size: 13px;
      font-weight: 200;
      color: #707070;
      margin-left: 5px;
    }
    
    label.origem{
      margin-left: 120px;
      font-size: 13px;
      color: #A9D4B2;
    }
    
    span.origem{
      font-size: 13px;
      color: #707070;
      margin-left: 5px;
    }
    
  }
  
  .quantidade{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    padding-bottom: 8px;
    
    span{
      font-size: 13px;
      font-weight: 500;
      color: #707070;
      margin-left: 8px;
      margin-top: 2px;
    }
  }
  
  .endereco{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    padding-bottom: 8px;
    margin-left: 32px;
    
    span{
      font-size: 13px;
      font-weight: 500;
      color: #707070;
      margin-left: 8px;
      margin-top: 2px;
    }
  }
  
  .acao{
    font-size: 13px;
    color: #327A3D;
    display: none;
  }
`;
