import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  
  .qnt{
    width: 250px;
  }
  
  .extra-info{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    flex-direction: row;
    margin: 10px 0;
    
    &.highlight{
      border-radius: 5px;
      background-color: #f3f9f4;
      padding: 10px 20px;    
    }
  }
`;
