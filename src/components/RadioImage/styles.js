import styled from 'styled-components';
import { primary } from '~/styles/colors';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .image{
    display: flex;
    position: relative;
  
    img{
      height: 95px;
      width: 95px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      background-color: rgba(196,196,196,0.5);
      border: ${({ checked }) => (checked ? `2px solid ${primary['500']}` : 'none')};
      transition: transform 250ms ease-in-out;
      
      &:hover{
        background-color: #C4C4C4;
        border: 2px solid ${primary['500']};
        transform: scale(1.1);
      }
    }
    
    .icon{
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: white;
      border-radius: 50%;
      z-index: 100;
    }
  }
  
  .label{
    font-size: 16px;
    color: ${({ checked }) => (checked ? '#3e6f55' : '#707070')};
    margin-top: 15px;
  }
`;
