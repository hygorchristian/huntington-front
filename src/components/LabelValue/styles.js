import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  
  label{
    font-size: 12px;
    color: ${TEXT_SECONDARY};
  }
  
  span{
    font-size: 14px;
    color: #646464;
  }
`;
