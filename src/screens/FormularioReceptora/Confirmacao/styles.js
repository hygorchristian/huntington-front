import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  

  & > img{
    margin-bottom: 50px;
    margin-top: 60px;
  }
  
  h2{
    font-size: 28px;
    font-weight: 400;
    color: #3A6E4F;
  }
  
  h4{
    font-size: 18px;
    font-weight: 600;
    color: #A5A5A5;
  }
  
  .scroll{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 700px;  
    padding: 40px 0;
    align-items: center;
    justify-content: space-around;    
  }
  
  .separator{
    height: 1px;
    width: 90%;
    background-color: rgba(112,112,112,0.2);
    margin-top: 40px;
    margin-bottom: 20px;
  }
  
  .disclaimer{
    width: 550px;
    text-align: center;
    color: #a5a5a5;
    margin-bottom: 50px;
    font-size: 13px;
    font-weight: 600;
  }
`;
