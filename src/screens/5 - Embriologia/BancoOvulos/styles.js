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
  align-items: flex-end;
  padding-bottom: 6px;
  
  h1{
    color: ${TEXT_PRIMARY};
    font-size: 18px;
    font-weight: 500;
    margin-right: 90px;
  }
`;

export const Content = styled.div`
  width: 100%;  
  
  table{
    width: 100%;
    padding-right: 45px;
    margin-top: 23px;
    
    th{
      font-size: 13px;
      color: #A5A5A5;
      font-weight: 400;
    }
    
    tr{
      height: 60px;
      cursor: pointer;
    }
    
    td{
      border-bottom: 1px solid rgba(165,165,165,0.2);
      font-size: 14px;
      font-weight: 400;
      color: ${TEXT_PRIMARY};
      text-align: center;
    }
  }
`;
