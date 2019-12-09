import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 250px;

  button{
    height: 40px;
    width: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    cursor: pointer;
     
    & *{      
      font-size: 18px;
    }
    
    &:active, &.inativo{
      opacity: .3;
    }   
  }
  
  span{
    margin: 0 20px;
    font-size: 14px;
    width: 150px;
    text-align: center;
  }
`;
