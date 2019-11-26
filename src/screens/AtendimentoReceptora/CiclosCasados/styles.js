import styled from 'styled-components';

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
    color: #707070;
    font-size: 18px;
    font-weight: 500;
    margin-right: 90px;
  }
  
  & > button{
    height: 35px;
    width: 115px;
    background-color: #3E6F55;
    color: #ffffff;
    border-radius: 5px;
    font-size: 13px;
    text-transform: uppercase;
    line-height: 35px;
    margin-left: 15px;
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
      color: #707070;
      text-align: center;
    }
  }
`;
