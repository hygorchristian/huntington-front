import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #F8F8F8;
  padding-left: 18px;
  height: 45px;
  border-radius: 3px;
  
  input{
    width: 300px;
  }
  
  span{
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    
    &:active{
      opacity: .6;
    }
  }  
`;
