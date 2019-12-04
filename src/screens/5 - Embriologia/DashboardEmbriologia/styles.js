import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 100%;
  background-color: #EDF5F0;
  padding: 60px 0 20px 0;
  margin-right: 45px;
  
  h1{
    width: 250px;
    text-align: center;
    font-size: 20px;
    font-weight: 200;
    color: #707070;
    margin-bottom: 30px;
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
