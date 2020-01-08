import styled from 'styled-components';

export const Container = styled.div`
  width: 750px;
  
  .row{
    display: flex;
    flex-direction: row;
    width: 100%;
    
    &.date{
      width: 400px;
      margin-top: 10px;
    }
  }
  
  .separator{
    height: 1px;
    width: 100%;
    background-color: rgba(165,165,165,0.2);
  }
  
  .controllers{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 35px;
    margin-bottom: 90px;
  }
`;
