import styled from 'styled-components';

export const Container = styled.div`
  width: 325px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-right: 18px;  
  background-color: rgba(165,165,165,0.1);
  border-radius: 5px;
  
  input{
    margin-left: 22px;
    font-size: 13px;
    height: 100%;
    background-color: transparent;
    border: none;
    flex: 1;
    
    &:focus{
      border: none;
    }
    
    &::placeholder{
      color: rgba(112,112,112,0.5);
    }
  }
  
  button{
    color: #3A6E4F;
    font-size: 13px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: 500;
  }
`;
