import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    letter-spacing: 0.8px;
  }
  
  html, body, #root{
    height: 100%;
  }
  
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Hind', sans-serif;
    color: #646464;
  }  
  
  table{
    border-collapse: collapse; 
  
    thead{
    
      th{
        font-size: 12px;
        font-weight: 600;
        color: #ABABAB;
        height: 30px;
      }
    }
    
    tbody{
    
      tr{
        height: 40px;
        cursor: pointer;
        
        &:hover *{
          color: #3A6E50 !important;
        }
        
        &:not(:last-child){
          border-bottom: 1px solid rgba(112,112,112,0.1);
        }
        
        td{           
          padding-left: 25px;
          padding-right: 25px;
          font-size: 14px;
          text-align: center;
          
          &.left{
            text-align: left;          
          }
          
          &.right{
            text-align: right;          
          }
          
        }
      }
    }
  }
  
  a{
    cursor: pointer;
    text-decoration: underline;
  }
    
  
  textarea{
    padding: 16px;
  }
  
  input, textarea{
    height: 35px;
    background-color: #F6F6F6;
    border: none;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 13px;   
    color: #707070;
    resize: none;
    
    &::placeholder{
      color: rgba(112,112,112,0.5);
    }
    
    &:focus{
      border: 1px solid #A9D4B2;
    }
  }
  
  .btn{
    height: 35px;
    padding: 0 24px;
    border-radius: 5px;
    background-color:#3A6E50 ;
    font-size: 12px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
    
    &.light{
      background-color:#ffffff;
      color: #3A6E50;
      border: 1px solid #3A6E50;
    }
  }
  
  fieldset{  
    width: 100%;
    padding: 20px 15px;
    border-radius: 5px;
    border: 1px solid #51996f; 
    
    legend{
      color: #3A6E50;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  
  button{
    border: none;
  }
`;
