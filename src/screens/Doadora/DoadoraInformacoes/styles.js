import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  
  .row{
    width: 750px;
  }
`;

export const Header = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 750px;
  
  .rowinfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  }
  
  .info{
    height: 90px;
    background-color: rgba(169,212,178,0.15);;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    margin-right: 15px;   
    flex: 1; 
  }
  
  .status{
    height: 90px;
    background-color: rgba(169,212,178,0.15);
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 150px;
    
    .select{
      width: 250px;
      margin-right: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  
  .mr-40{      
    margin-right: 40px;
  }
  
  .col{
      display: flex;
      flex-direction: column;
      
      label{
        font-size: 13px;
        color: ${TEXT_SECONDARY};
      }
      
      span{
        display: block;
        color: #646464;
        font-size: 14px;
      }
    }
`;
