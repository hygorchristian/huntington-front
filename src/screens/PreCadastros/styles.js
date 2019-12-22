import styled from 'styled-components';

export const Container = styled.div`
  flex:1 ;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  border-bottom: 1px solid rgba(165,165,165,0.3);
  align-items: flex-end;
  padding-bottom: 6px;
  
  h1{
    color: #707070;
    font-size: 18px;
    font-weight: 500;
    margin-right: 90px;
  }
  
  button{
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-top: 30px;
  padding-right: 30px;
`;
