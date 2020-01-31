import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${TEXT_PRIMARY};  
  margin-bottom: 36px;
  width: 100%;
  
  span{
    font-size: 13px;
    margin-bottom: 10px;
  }
  
  .options-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-gap: 10px;
  }
`;
