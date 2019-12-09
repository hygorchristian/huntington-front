import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  padding-top: 50px;

  .row{
    display: flex;
    flex-direction: row;
    
    
    .info{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 72px;
      min-width: 250px;
      border-radius: 5px;
      margin-right: 10px;
      background-color: #F3F9F4;
    }
  }
  
  .grid{
    display: grid;
    width: 100%;
    padding: 0 20px;
    grid-template-columns: 140px 140px 1fr;
    margin-top: 35px;
    grid-row-gap: 50px;
  }
`;
