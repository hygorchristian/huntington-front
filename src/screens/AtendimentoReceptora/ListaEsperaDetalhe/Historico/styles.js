import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  padding-top: 45px;
  
  fieldset{
    margin-top: 40px;
    
    .info{
      display: grid;
      grid-template-columns: 150px 90px 190px 1fr 100px;
      
      .data{
        display: flex;
        flex-direction: row;
        align-self: center;
        align-items: center;
        
        span{
          font-size: 14px;
          margin-left: 12px;
        }
      }
    }
  }
`;
