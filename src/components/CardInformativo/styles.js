import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 125px;
  height: 100px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 15px;
  align-items: flex-start;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
    
  &:hover{
    border: 1px solid #A9D4B2;
  }
  
  h3{
    font-size: 14px;
    font-weight: 400;
    color: #A5A5A5;
    line-height: 14px;
    text-align: left;
    flex: 1;
  }
  
  .valor{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    
    
    span{
      margin-left: 10px;
      font-size: 24px;
      font-weight: 500;
      color: ${TEXT_PRIMARY};
    }
    
  }
`;
