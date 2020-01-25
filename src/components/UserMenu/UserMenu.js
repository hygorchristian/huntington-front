import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {
 AccountCircleRounded, Mail, ExitToApp, KeyboardArrowDown
} from '@material-ui/icons';

import { Container, Menu } from './styles';

function UserMenu({ onClose, ...props }) {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <Container>
      <Button onClick={handleClick}>
        <Avatar alt="user photo" src="https://randomuser.me/api/portraits/women/26.jpg" />
        <div className="user-info">
          <span className="user-name">Talita Santos</span>
          <span className="user-role">Atendimento a Doadora</span>
        </div>
        <KeyboardArrowDown fontSize="small" color="primary" />
      </Button>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={onClose}>
          <ListItemIcon>
            <AccountCircleRounded />
          </ListItemIcon>
          <ListItemText className="pl-0" primary="Meu Perfil" />
        </MenuItem>
        <MenuItem onClick={onClose}>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText className="pl-0" primary="Notificações" />
        </MenuItem>
        <MenuItem onClick={onClose}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText className="pl-0" primary="Logout" />
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default UserMenu;
