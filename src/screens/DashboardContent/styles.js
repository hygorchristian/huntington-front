import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  
  p{
    font-size: 15px;
    letter-spacing: 1.2px;
    margin-bottom: 50px;
    width: 450px;
  }
  
  button{
    height: 40px;
    width: 300px;
    background-color: #519a70;
    border-radius: 5px;
    margin-bottom: 20px;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1.11px;
    color: #ffffff;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    
    &:hover{
      box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
    }
    
  }
`;
