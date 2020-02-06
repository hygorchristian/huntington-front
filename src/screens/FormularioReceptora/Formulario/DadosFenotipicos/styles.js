import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 10px;
  
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
  
  .label{
    display: block;
    font-size: 13px;
    color: rgba(0,0,0,0.5);
    margin-bottom: 24px;
    margin-top: 16px;
  }
  
  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;
