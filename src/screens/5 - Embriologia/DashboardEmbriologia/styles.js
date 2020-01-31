import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex: 1;
`;

export const Side = styled.div`
  width: 500px;
  height: 100%;
  background-color: #EDF5F0;
  margin-right: 45px;
  position: relative;
  
  .side-content{   
    width: 100%; 
    display: flex;
    flex-direction: column;
    padding: 60px 0 20px 40px;
    max-height: calc(100vh - 90px);
    overflow: auto;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  h1{
    width: 250px;
    font-size: 28px;
    font-weight: 200;
    color: ${TEXT_PRIMARY};
    margin-bottom: 30px;
    line-height: 38px;
  }
  
  .tarefas{
    margin-top: 40px;
    margin-bottom: 100px;
    
    .tarefas-header{
      display: flex;
      flex-direction: row;
      align-items: flex-end;  
      margin-bottom: 16px;   
      
      h2{
        font-size: 18px;
        font-weight: 400;
        margin-right: 10px;
        line-height: 24px;
      }
      
      span{
        font-size: 13px;
      }
    }
    
    .tarefa{
      width: 400px;
      margin-bottom: 8px;
      height: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-right: 14px;
      background: linear-gradient(to right, rgba(0,0,0,0) 0%,#ffffff 100%);
      border-radius: 5px;
      
      label{
        font-size: 14px;
      }
      
      span{
        font-size: 24px;
      }
    }
  }
`;

export const Main = styled.div`
  flex:1;
  max-height: calc(100vh - 90px);
  overflow: auto;
`;
