import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
`;

export const Info = styled.div`
  width: 100%;
  height: 75px;
  border-radius: 5px;
  background-color: rgba(169,212,178,0.15);
  display: grid;
  grid-template-columns: 85px 115px 50px 80px 230px 1fr;
  align-items: center;
  padding: 0 20px;
  margin-top: 35px;
`;

export const InfoExtra = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  
  .left{
    flex: 1;
    display: grid;
    grid-template-columns: 200px 140px 1fr;
    padding: 0 20px;
  }
  
  .right{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(169,212,178,0.15);
    grid-row-gap: 15px;
    grid-column-gap: 35px;
  }
`;

export const Questionario = styled.fieldset`
  margin-top: 15px;
  margin-bottom: 60px;
  
  .fichas{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  
  .consideracoes{
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    width: 100%;
  
    h2{
      font-size: 12px;
      font-weight: 400;
      color: ${TEXT_SECONDARY};
    }
    
    p{
      font-size: 14px;    
      padding: 0;
    }
  }
`;
