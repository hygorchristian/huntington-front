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
    margin-top: 215px;
    height: 75px;
    width: 75px;
  }
  
  h1{
   font-weight: 400;
   font-size: 28px;
   margin-top: 110px;
   margin-bottom: 50px;  
  }
  
  input{
    width: 300px;  
    margin-bottom: 15px;
  }
  
  button{    
    width: 300px;
    margin-top: 5px;    
  }
`;

export const Image = styled.img`
  height: 100%;
  width: calc(100vw - 835px);
  flex:1;
  object-fit: cover;
  object-position: center center; 
`;

export const Help = styled.div`
  position: absolute;
  display: inline-flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  bottom : 0;
  margin-left: 25px;
  margin-bottom: 25px;
  align-self: flex-start;
  cursor: pointer;
  
  &:active{
    opacity: 0.6;
  }
`;


export const HelpContainer = styled.div`
  position: fixed;
  width: 835px;
  padding-left: 45px;
  padding-right: 45px;
  bottom : ${({ showing }) => (showing ? 0 : '-500px')};
  background-color: #008BD0;
  transition: all 350ms ease-in-out;
  
  h2{
    width: 500px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  p{
    margin-top: 25px;
    font-size: 14px;
    width: 500px;
    color: #ffffff;
  }
  
  span{
    display: block;
    margin-top: 35px;
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 65px;
  }
`;

export const Fechar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 100%;
  cursor: pointer;
  
  &:active{
    opacity: .6;
  }
`;
