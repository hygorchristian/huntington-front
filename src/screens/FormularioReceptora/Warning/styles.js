import styled from 'styled-components';

export const Container = styled.div`
  height: 89vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > img{
    margin-top: 60px;
  }
  
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    margin-top: 120px;
  
    h2{
      font-size: 28px;
      font-weight: 400;
      color: #707070;
      margin-top: 40px;
    }
  
    h4{
      font-size: 18px;
      font-weight: 600;
      color: #a5a5a5;
      margin-top: 20px;
    }
    
    p{
      font-size: 18px;
      font-weight: 400;
      color: #a5a5a5;
      text-align: center;
      margin-top: 30px;
    }
  }
  
`;
