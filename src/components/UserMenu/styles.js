import styled from 'styled-components';
import Popover from '@material-ui/core/Popover';

export const Container = styled.div`
  margin-left: 20px;

  .user-info{
    display: flex;
    flex-direction: column;
    margin: 0 16px;
    align-items: flex-start;
    
    
    .user-name{
      font-size: 14px;
      font-weight: 600;
      text-transform: none;
    }
    
    .user-role{
      font-size: 12px;
      color: rgba(0, 0, 0, .54);
      font-weight: 400;
      text-transform: none;
    }
  }
`;

export const Menu = styled(Popover).attrs({
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  },
  classes: {
    paper: 'py-8'
  }
})`
  
`;
