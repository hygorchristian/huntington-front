import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import MuiToolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';

// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import FilterListIcon from '@material-ui/icons/FilterList';

import Botao from '~/components/Botao';
import Busca from '~/components/Busca';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
}));

const Toolbar = ({ onSearch, onAdd }) => {
  const classes = useToolbarStyles();

  // const [anchorEl, setAnchorEl] = useState(null);
  //
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <MuiToolbar className={classes.root}>
      <Busca placeholder="Pesquisar..." onSearch={onSearch} />
      <div style={{ flex: 1 }} />
      <Botao
        style={{ marginRight: 10 }}
        startIcon={<AddIcon />}
        onClick={onAdd}
      >
        Adicionar
      </Botao>
      {/* <Tooltip title="Filter list"> */}
      {/*  <IconButton onClick={handleClick}> */}
      {/*    <FilterListIcon /> */}
      {/*  </IconButton> */}
      {/* </Tooltip> */}
      {/* <Menu */}
      {/*  id="simple-menu" */}
      {/*  anchorEl={anchorEl} */}
      {/*  keepMounted */}
      {/*  open={Boolean(anchorEl)} */}
      {/*  onClose={handleClose} */}
      {/* > */}
      {/*  <MenuItem onClick={handleClose}>Profile</MenuItem> */}
      {/*  <MenuItem onClick={handleClose}>My account</MenuItem> */}
      {/*  <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      {/* </Menu> */}
    </MuiToolbar>
  );
};

export default Toolbar;
