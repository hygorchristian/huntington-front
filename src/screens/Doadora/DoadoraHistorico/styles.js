import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  width: 950px;
  padding-top: 35px;
  
  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .col{
    display: flex;
    flex-direction: column;
    margin-right: 64px;
    
    label{
      font-size: 13px;
      color: ${TEXT_SECONDARY};
    }
    
    span{
      font-size: 14px;
      color: #646464;
    }
  }

  .adicionar-historico{
    height: 65px;
    border: 2px dashed #f0f0f0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;
