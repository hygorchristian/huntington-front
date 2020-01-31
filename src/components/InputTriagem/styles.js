import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px; 

  label{
    flex: 1;
    text-align: right;
    font-size: 13px;
    color: ${TEXT_PRIMARY};
    margin-right: 25px;
  }
  
  input{
    margin-left: 16px;
    width: 300px;
  }
`;
