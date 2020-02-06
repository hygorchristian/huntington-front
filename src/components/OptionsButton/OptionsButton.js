import React, { useState } from 'react';

import { AccountCircleRounded, MoreVert } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu } from '~/components/UserMenu/styles';

function OptionsButton({ children, options = [], ...props }) {
  const [anchor, setAnchor] = useState(null);

  const handleClose = () => {
    setAnchor(null);
  };

  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClick = (action) => {
    handleClose();
    action();
  };

  return (
    <>
      <IconButton aria-label="cart" onClick={handleOpen}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option.label} onClick={() => handleClick(option.click)}>
            {option.icon && (
              <ListItemIcon>
                {option.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default OptionsButton;
