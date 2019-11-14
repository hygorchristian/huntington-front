import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 835px;  
  flex:1;
  
  & > img{
    margin-top: 130px;
    height: 104px;
    width: 300px;
    object-fit: contain;
  }
  
  h1{
   font-weight: 200;
   font-size: 24px;
   margin-top: 60px;
   margin-bottom: 35px;  
  }
  
  input{
    width: 300px;  
    margin-bottom: 15px;
  }
  
  button{    
    width: 300px;
    margin-top: 5px;  
    height: 35px;  
    border: none;
    background-color: #3A6E50;
    color: #ffffff;
    font-size: 13px;
    text-transform: uppercase;
    border-radius: 5px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: calc(100vw - 835px);
  flex:1;
  object-fit: cover;
  object-position: center center; 
`;
