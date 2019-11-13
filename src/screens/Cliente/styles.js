import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  width: 100%;
`;

export const Header = styled.div`
  height: 124px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 45px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
  
  h1{
    font-size: 28px;
    font-weight: 400;
    width: 370px;
  }
  
  
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 48px;
  padding-left: 45px;
  padding-right: 45px;
  
  table{
  
    thead{
    
      th{
        font-size: 12px;
        font-weight: 600;
        color: #ABABAB;
        height: 30px;
      }
    }
    
    tbody{
    
      tr{
        height: 80px;
        cursor: pointer;
        
        &:hover *{
          color: #008BD0 !important;
        }
        
        td{        
          border-bottom: 1px solid rgba(112,112,112,0.25);
          padding-left: 25px;
          padding-right: 25px;
          font-size: 14px;
        }
      }
    }
  }
`;

export const Nome = styled.div`
  display: flex;
  flex-direction: column;
  
  h3{
    font-size: 16px;
    font-weight: 500;
  }
  
  span{
    font-size: 14px;
    font-weight: 400;
  }
`;

export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h3{
    font-size: 14px;
    font-weight: 400;
  }
  
  div{
    display: flex;
    flex-direction: row;
    margin-left: 40px;
    align-items: center;
    
    span{
      display: flex;
      height: 24px;
      width: 24px;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  div{
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin-right: 10px;
  }
  
  span{
    font-size: 14px;
    line-height: 14px;
    color: {({ color }) => color};
  }
`;

export const Title = styled.div`
  h1{
    font-size: 28px;
  }
  
  h4{
    font-weight: 400;
    font-size: 16px;
    color: #8B8D8E;
  }
`;

export const TabController = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: flex-end;
`;

export const TabContainer = styled.div`
  margin-right: 60px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 11px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  
  &:hover div{
    opacity: 1;
  }
  
  div{  
    transition: all 150ms ease-in-out;
    opacity: ${({ active }) => (active ? 1 : 0)};
    position: absolute;
    width: 100%;
    background-color: #008BD0;
    height: 3px;
    bottom: 0;
  }
`;
