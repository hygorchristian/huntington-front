import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 10px;
  
  .row{
    display: flex;
    flex-direction: row;
  }
  
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`;
