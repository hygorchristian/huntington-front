import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Scrollbars } from 'react-custom-scrollbars';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;  
  align-items: center;
  
  background: url("/img/login-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 900px;
  height: 90vh;
  max-height: 90vh;
  background-color: #fdfdfd;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  border-radius: 5px;
  border: 1px solid #A9D4B2;
  
  @media (max-width: 900px) {
    width: 768px;
  }
  
  @media (max-width: 780px) {
    width: 600px;
  }
  
  @media (max-width: 640px) {
    width: 100%;
  }
  
  & > img{
    margin-bottom: 50px;
    margin-top: 60px;
  }
  
  h2{
    font-size: 28px;
    font-weight: 400;
    color: #3A6E4F;
  }
  
  h4{
    font-size: 18px;
    font-weight: 600;
    color: #A5A5A5;
  }
  
  .scroll{
    flex: 1;
    width: 700px;  
    position: relative;
    margin-top: 40px;  
    margin-bottom: 40px;
  
    .overlay{
      height: 100px;
      width: 100%;
      background-image: linear-gradient(transparent, #fff);
      position: absolute;
      bottom: -20px;
    }
    
    p{
      margin-bottom: 24px;
    }
  }
  
  .separator{
    height: 1px;
    width: 90%;
    background-color: rgba(112,112,112,0.2);
    margin-top: 40px;
    margin-bottom: 20px;
  }
  
  .disclaimer{
    width: 550px;
    text-align: center;
    color: #a5a5a5;
    margin-bottom: 50px;
    font-size: 13px;
    font-weight: 600;
  }
`;

export const Loading = styled(CircularProgress).attrs({
  size: 20,
})`
  margin-top: 10px;
`;

export const Scroll = styled(Scrollbars).attrs({
  autoHide: true,
})`
  width: 500px;
  height: 200px;
`;
