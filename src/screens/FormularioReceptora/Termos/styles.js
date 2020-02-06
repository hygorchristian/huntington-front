import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { primary } from '~/styles/colors';

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  

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

export const Scroll = styled(Scrollbars).attrs({
  autoHide: true,
})`
  width: 500px;
  height: 200px;
`;

export const Thumb = styled.div`
  width: 4px !important;
  border-radius: 2px !important;
  background-color: ${primary['200']};
  transition: background-color 250ms ease-in-out;
  
  &:hover{
   background-color: ${primary['500']};
  }
  
  &:focus{
   background-color: ${primary['500']};
  }
`;
