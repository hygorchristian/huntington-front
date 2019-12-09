import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-left: 45px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  
  .pin{
    display: flex;
    flex-direction: column;
    
    label{
      color: #ABABAB;
      font-size: 14px;
    }
    
    span{
      font-size: 21px;
      color: #707070;
    }
  }
  
  .separator{
    height: 70px;
    width: 1px;
    background-color: rgba(112,112,112,0.3);
    margin: 0 35px;
  }
  
`;


export const Content = styled.div`
  
`;
