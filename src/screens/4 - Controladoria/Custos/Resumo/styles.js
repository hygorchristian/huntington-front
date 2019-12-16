import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  padding-top: 40px;
  
  .row{
    h2{
      font-size: 16px;
      font-weight: 400;
    }
  
    table{
      margin-top: 26px;
      margin-bottom: 26px;
    }
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
    margin-bottom: 100px;
        
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
