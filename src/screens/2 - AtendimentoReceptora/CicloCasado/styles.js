import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  flex:1 ;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  margin-top: 20px;
  align-items: center;
  padding-bottom: 6px;
  
  h1{
    color: ${TEXT_PRIMARY};
    font-size: 18px;
    font-weight: 500;
    margin-right: 90px;
  }
  
  .reservas{
    height: 40px;
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    align-items: center;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid rgba(112,112,112,0.5);
    
    h2{
      font-size: 21px;
      font-weight: 400;
      line-height: 20px;
    }
    
    span{
      font-size: 13px;
      color: #B2B2B2;
      margin-left: 10px;
      line-height: 20px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  
  .grid{
    display: grid;
    width: 850px;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 250px);
  }
`;
