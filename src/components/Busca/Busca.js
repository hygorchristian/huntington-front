import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Busca({ onSearch, ...props }) {
  const classes = useStyles();
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  const [value, setValue] = useState(q);

  const onClick = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <IconButton onClick={onClick} className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
);
}

export default Busca;
