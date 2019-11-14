import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px; 

  label{
    flex: 1;
    text-align: right;
    font-size: 13px;
    color: #707070;
    margin-right: 25px;
  }
  
  button{
    height: 35px;
    border-radius: 5px;
    border: none;
    width: 65px;
    background-color: #88b6a0;
    font-size: 14px;
    color: #ffffff;
    margin-right: 8px;
  }
  
  input{
    margin-left: 16px;
    width: 300px;
  }
`;
