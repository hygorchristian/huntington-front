import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #707070;  
  margin-bottom: 36px;
  width: 100%;
  
  span{
    font-size: 13px;
    margin-bottom: 10px;
  }
  
  .options-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-gap: 10px;
  }
`;
