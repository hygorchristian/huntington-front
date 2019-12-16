import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  width: 600px;
  
  .info{
    height: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: 110px 110px 1fr 110px;
    background-color: #F3F9F4;
    border-radius: 5px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const Content = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  
  table{
    width: 100%;
    margin-top: 45px;
  }
  
  .total{
    margin-top: 20px;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(to right, rgba(0,0,0,0) 0%,#ffffff 100%);
        
    label{
      font-size: 13px;
      color: #A4A4A4;
    }
    
    span{
      font-size: 14px;
      color: #646464;
      margin-left: 24px;
      margin-right: 30px;
    }
  }
`;
