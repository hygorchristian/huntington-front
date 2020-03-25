import styled from 'styled-components';

export const Container = styled.div`
  
  textarea{
    width: 100%;
    height: 120px;
    margin-top: 32px;
    margin-bottom: 40px;
  } 
  
  .separator{
    height: 1px;
    width: 100%;
    background-color: rgba(165,165,165,0.2);
    margin-top: 40px;
  }
  
  .controller{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }
`;
