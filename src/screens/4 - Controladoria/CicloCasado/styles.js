import styled from 'styled-components';
import { TEXT_PRIMARY, TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  flex: 1;
  margin-left: 45px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  
  .pin{
    display: flex;
    flex-direction: column;
    
    label{
      color: ${TEXT_SECONDARY};
      font-size: 14px;
    }
    
    span{
      font-size: 21px;
      color: ${TEXT_PRIMARY};
    }
  }
  
  .separator{
    height: 70px;
    width: 1px;
    background-color: rgba(112,112,112,0.3);
    margin: 0 35px;
  }
  
`;


export const Content = styled.div`
  
`;
