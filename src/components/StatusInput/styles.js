import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: #F3F9F4;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  
  h1{
    font-size: 14px;
    font-weight: 400;
  }
  
  .v-separator{
    height: 50px;
    width: 1px;
    background-color: rgba(112,112,112,0.1);
    margin-left: 12px;
    margin-right: 24px;
  }
  
  .space{
    flex: 1;
  }
  
`;
