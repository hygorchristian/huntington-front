import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;

  textarea{
    width: 600px;
    height: 160px;
  }
  
  .separator{
    height: 1px;
    width: 100%;
    background-color: rgba(165,165,165,0.2);
    margin-top: 70px;
  }
  
  .controllers{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 35px;
  }
  
`;
