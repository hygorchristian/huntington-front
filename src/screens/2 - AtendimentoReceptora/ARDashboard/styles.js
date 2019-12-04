import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const Side = styled.div`
  width: 355px;
  height: 100%;
  background-color: #EDF5F0;
  padding: 100px 45px 20px 45px;
  margin-right: 45px;
  
  h1{
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 200;
    color: #707070;
  }
`;

export const Main = styled.div`
  flex:1;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  margin-top: 70px;
`;
