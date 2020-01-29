import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`

  h2.titulo{
    font-size: 13px;
    font-weight: 500;
    margin-left: 10px;
    letter-spacing: 1.2px;
  }
  
  .dados{    
    border-radius: 5px;
    background-color: rgba(169,212,178,0.15);
    width: 100%;
    margin-top: 10px;
  
    .infos{
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 130px 130px;
      grid-row-gap: 30px;
      padding: 10px;
    }
    
    .foto{
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      
      label{
        font-size: 12px;
        color: ${TEXT_SECONDARY};
      }
      
      img{
        height: 130px;
        width: 170px;
        background-color: #EFEFEF;
        align-self: center;
        margin-bottom: 10px;
        border: none;
        object-fit: cover;
      }
    }
  }
  
  
`;
