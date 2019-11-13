import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  width: 100%;
`;

export const Header = styled.div`
  height: 124px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 45px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
  
  h1{
    font-size: 28px;
    font-weight: 400;
    width: 370px;
  }
  
  
`;
