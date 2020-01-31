import styled from 'styled-components';
import { TEXT_PRIMARY, TEXT_SECONDARY } from '~/utils/colors';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .separator{
    height: 220px;
    width: 1px;
    background: #c7c7c7;
    margin: 0 40px;
  }
  
  .receptora{
    display: flex;
    flex-direction: column;
    width: 130px;
    
    h4 {
      font-size: 13px;
      color: ${TEXT_SECONDARY};
    }
    
    .name {
      font-size: 16px;
      font-weight: 600;
      color: ${TEXT_PRIMARY};
    }
    
    .pin {
      font-size: 14px;
    }    
  }
  
  .form{
    flex: 1;
  
    .row{
      display: flex;
      flex-direction: row;
      width: 500px;
      justify-content: space-between;
    }
  }
`;
