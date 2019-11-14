import styled from 'styled-components';

export const Container = styled.div`
  .label{
    display: flex;
    flex-direction: row;
    
    label{
      font-size: 13px;
      color: #707070;
    }
  }
  
  .inputs{
    margin-top: 15px;
    
    button{
      width: 70px;
      height: 35px;
      border-radius: 5px;
      border: 1px solid #3A6E50;
      color: #3A6E50;
      margin-right: 10px;
      font-size: 13px;
      cursor: pointer;
      
      &.active{
        background-color: #3A6E50;
        color: #ffffff;
      }
    }
  }
`;
