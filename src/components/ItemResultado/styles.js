import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 750px;
  margin-bottom: 10px;
  
  label{
    width: 200px;
    display: inline;
    font-size: 13px;
  }
  
  .value{
    height: 35px;
    width: 150px;
    background-color: rgba(242,242,242,0.3);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 12px;
    margin-right: 10px;
    
    span{
      font-size: 14px;
      flex: 1;
      margin-top: 2px;
    }
  }
`;
