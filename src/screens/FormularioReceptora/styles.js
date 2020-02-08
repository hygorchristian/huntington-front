import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Scrollbars } from 'react-custom-scrollbars';
import SwipeableViews from 'react-swipeable-views';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;  
  align-items: center;
  
  background: url("/img/login-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Card = styled.div`
  width: 900px;
  height: 95vh;
  max-height: 95vh;
  background-color: #fdfdfd;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);  
  overflow-y: auto;
  border-radius: 5px;
  border: 1px solid #A9D4B2;
`;


export const Content = styled(SwipeableViews)`
  width: 900px;
  height: 95vh;
  max-height: 95vh;
  background-color: #fdfdfd;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);  
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
  
  
`;

export const Loading = styled(CircularProgress).attrs({
  size: 20,
})`
  margin-top: 10px;
`;
