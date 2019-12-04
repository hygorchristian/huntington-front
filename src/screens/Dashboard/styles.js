import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:  #3A6E4F;
  transition: all 350ms ease-in-out;
  
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ aberto }) => (aberto ? 'flex-start' : 'center')};
  width: ${({ aberto }) => (aberto ? '250px' : '110px')};
  padding-top: 35px;
  transition: all 350ms ease-in-out; 
  
  #fechar{
    margin-top: 38px;
    margin-right: 27px;
    margin-bottom: 32px;
    align-self: flex-end;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #B1C6B8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuController = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: ${({ aberto }) => (aberto ? '30px' : '0')};
  justify-content: ${({ aberto }) => (aberto ? 'flex-start' : 'center')};
  
  #logo{
    height: 36px;
    width: 40px;
  }
  
  #logo-complemento{
    height: 26px;
    width: 113px;
    margin-left: 8px;
  }
  
  
  
  span{
    display: flex;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    user-select: none;
    
    
    
    &:active{
      opacity: 0.4;
    }
  }
`;

export const Open = styled.div`
  margin-top: 55px;
  margin-bottom: 30px;
  height: 15px;
  user-select: none;
  
  &:active{
    opacity: 0.6;
  }
`;

export const Main = styled.div`
  flex:1;
  background: white;
  transition: all 350ms ease-in-out; 
`;

export const Header = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 45px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
  z-index: 90;
 
  h3{
    font-weight: 500;
    font-size: 16px;
  }
  
  img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 28px;
  }  
`;

export const Content = styled.main`
  flex:1;
  height: 200%;
  max-height: calc(100vh - 90px);
  overflow: auto; 
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100%;

  .item{
    display: flex;
    flex-direction: row;
    align-items: center;  
    height: 48px;
    margin-bottom: 5px;
    cursor: pointer;
    user-select: none;
    position: relative;
    text-decoration: none;
    
    .indicator{
      width: 5px;
      height: 38px;
      background-color: #B1C6B8;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      position: absolute;
    }
    
    &:active{
      opacity: 0.5;
    }
    
    span{
      margin-left: 45px;
      color: ${({ selected }) => (selected ? '#ffffff' : 'rgba(255,255,255,0.4)')};
      font-weight: ${({ selected }) => (selected ? 600 : 400)};
      align-self: center;
      font-size: 14;
   }
  }
  
  .subitem{
    display: flex;
    flex-direction: row;
    position: static;
    width: 100%;
    
    a{
      width: 100%;
      height: 34px;
      line-height: 34px;
      color: rgba(255,255,255,0.4);
      padding-left: 75px;
      margin-bottom: 5px;
      font-size: 14px;
      text-decoration: none;
    }
  }
  
  
  
  
  
 
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: flex-end;  
  
  & > span{
    display: inline-flex;
    margin-left: 20px;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    
    &:active{
      opacity: .6;
    }
  }
`;

export const Left = styled.div`  
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding-left: 54px;
  
  input{
    height: 32px;
    width: 250px;
    background-color: transparent;
    border: none;
    margin-left: 16px;
    font-size: 15px;
    color: #707070;
    
    &::placeholder{
      color: #A5A5A5;
    }
  }
  
  
  
`;

export const ProfileMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 250px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
  top: 90px;
  right: 45px;
  overflow: hidden;
  z-index: 100;
  
  .item-menu{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px rgba(112,112,112,0.1) solid;
    justify-content: flex-end;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    user-select: none;
    
    &:active{
      opacity: 0.5;
    }
    
    span{
      margin-right: 28px;
      font-size: 16px;
    }
  }
  
  .logout{
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,26,0,0.40);
    transition: all 100ms ease-in-out;
    cursor: pointer;
    user-select: none;
    
    &:active{
      opacity: 0.5;
    }
    
    span{
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 100ms ease-in-out;
  cursor: pointer;
  user-select: none; 
  margin-right: 50px; 
  position: relative;
  
  &:active{
    opacity: 0.5;
  }
  
  .badge{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    position: absolute;
    padding-left: 6px;
    padding-right: 6px;
    height: 14px;
    background-color: red;
    top: 0;
    right: 0;
    margin-right: -8px;  
    margin-top: -5px; 
  
    span{
      line-height: 10px;
      font-size: 10px;
      color: #ffffff;
      font-weight: 600;
      margin-top: 1px;
    }
  }
`;

export const SubItem = styled.div`
  
`;
