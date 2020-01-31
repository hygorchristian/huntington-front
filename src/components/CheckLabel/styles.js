import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  .label{
    display: flex;
    flex-direction: row;
    
    label{
      font-size: 13px;
      color: ${TEXT_PRIMARY};
    }
  }
  
  .inputs{
    margin-top: 15px;
  }
`;
