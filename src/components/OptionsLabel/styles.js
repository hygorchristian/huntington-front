import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #707070;  
  margin-bottom: 36px;
  width: 100%;
  
  span{
    font-size: 13px;
    margin-bottom: 10px;
  }
  
  .options-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-gap: 10px;
    
    button{
      width: 100%;
      border-radius: 5px;
      height: 35px;
      background-color:#ffffff;
      color: #3E6F55;
      border: 1px solid #3E6F55;
      font-size: 13px;
      transition: all 150ms ease-in-out;
      cursor: pointer;
      
      &.selected{
        color: #ffffff;
        background-color: #3E6F55;
      }
      
      &:hover{
        background-color: #4a8e67;
        color: #ffffff;
      }
    }
  }
`;
