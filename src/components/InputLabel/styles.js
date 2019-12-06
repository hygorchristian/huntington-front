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
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
    height: 35px;
    background-color: ${({ light }) => (light ? '#ffffff' : '#F6F6F6')};
    width: ${({ width }) => width}px;
    
    input{
      flex: 1;
      width: 100%;    
      background-color: ${({ light }) => (light ? '#ffffff' : '#F6F6F6')};
    
    }
  }
`;
