import styled from 'styled-components';
import { Form as FormFormik } from 'formik';
import CircularProgress from '@material-ui/core/CircularProgress';
import MDCard from '@material-ui/core/Card';
import MDFormLabel from '@material-ui/core/FormLabel';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;  
  overflow-y: auto;
  
  background: url("/img/login-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 900px;
  margin-top: 20px;
  background-color: #fdfdfd;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1200px) {
    width: 800px;
  }
  
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
    margin-bottom: 60px;
    margin-top: 60px;
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
  
  a{
    font-size: 14px;
    margin-top: 30px;
    text-decoration: none;
  }
`;

export const Loading = styled(CircularProgress).attrs({
  size: 20,
})`
  margin-top: 10px;
`;

export const Card = styled(MDCard)`
  width: 95%;
  padding: 20px;
  margin: 20px 20px 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

export const FormLabel = styled(MDFormLabel)`
  width: 100%;
  grid-area: 1 / 1 / 2 / 3;
`;
