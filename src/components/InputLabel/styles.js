import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #707070;  
  
  span{
    font-size: 13px;
    margin-bottom: 10px;
  }
  
  .input-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
    margin-bottom: 24px;
    height: 35px;
    background-color: #F6F6F6;
    width: ${({ width }) => width}px;
    
    input{
      flex: 1;
    }
  }
`;
