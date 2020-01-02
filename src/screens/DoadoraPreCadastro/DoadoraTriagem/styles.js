import styled from 'styled-components';

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
    font-size: 22px;
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

export const Content = styled.div`
  flex: 1;
  padding-top: 30px;
  
  .perguntas{  
    width: 850px;
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
