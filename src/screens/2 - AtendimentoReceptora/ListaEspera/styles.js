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
  padding-top: 50px;
`;
