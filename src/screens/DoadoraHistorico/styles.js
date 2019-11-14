import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  padding-top: 35px;

  .adicionar-historico{
    height: 65px;
    border: 2px dashed #f0f0f0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  fieldset{
    margin-top: 50px;   
    
    .data{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      span{
        font-size: 14px;
        color: #646464;
        margin-right: 40px;
        margin-left: 12px;
        margin-top: 1px;
      }
    }
  }
`;
