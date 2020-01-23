import styled from 'styled-components';

export const Container = styled.div`
  .col{
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    
    .title{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      label{
        font-size: 14px;
        margin-top: 3px;
        margin-left: 12px;
        width: 100%;
        text-align: right;
      }
    }
    
    span, a{
      font-size: 11px;
      width: 100%;
      text-align: right;
      min-width: 70px;
    }
  }
`;
