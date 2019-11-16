import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  
  background: url("/img/login-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Form = styled.form`
  width: 600px;
  height: 800px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img{
    margin-bottom: 60px;
  }
  
  h2{
    font-size: 24px;
    font-weight: 200;
    color: #3A6E4F;
  }
  
  span{
    font-size: 14px;
    margin-top: 20px;
  }
  
  button{
    height: 40px;
    width: 115px;
    border-radius: 5px;
    background-color: #3E6F55;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 13px;
    margin-top: 45px;
    border: none;
  }
  
  a{
    font-size: 14px;
    margin-top: 30px;
    text-decoration: none;
  }
`;
