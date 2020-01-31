import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 26px;
  padding-right: 26px;
  border-bottom: 1px solid rgba(165,165,165,0.3);
`;

export const Tab = styled.div`
  margin-right: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  
  
  span{
    font-size: 16px;
    font-weight: 500;
    color: ${({ selected }) => (selected ? TEXT_PRIMARY : 'rgba(112,112,112,0.5)')};
    margin-bottom: 10px;
  }

  div{
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #A9D4B2;
  }
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
`;
