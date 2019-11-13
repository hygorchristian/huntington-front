import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html, body, #root{
    height: 100%;
  }
  
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Hind', sans-serif;
  }
  
  
  .input{
    height: 40px;
    border: none;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding-left: 17px;
    font-size: 14px;
    font-weight: 200;
  }
  
  .button{  
    height: 40px;
    border-radius: 3px;
    border: none;
    background-color: #018BD0;  
    color: #ffffff;  
    font-weight: 600;
    font-size: 14px;
    transition: all 150ms ease-in-out;
    cursor: pointer;
    
    &:active{
      opacity: 0.6;
    }
  }
  
  input{
    height: 35px;
    background-color: #F6F6F6;
    border: none;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 13px;   
    color: #707070;
    
    &::placeholder{
      color: rgba(112,112,112,0.5);
    }
  }
`;
