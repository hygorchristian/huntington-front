import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 20px;

  .file-select{  
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px dashed #878787;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    label{
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 100px;
      cursor: pointer;
    }
    
    input{
      visibility: hidden;
      display: none;
    }
  }

  .file-container{
    height: 150px;
    width: 100%;    
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    
    img{
      width: 200px;
      height: 150px;
      border-radius: 12px;
      background-color: grey;
      object-fit: cover;
    }
    
    a{
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
  }
  
  
  
`;
