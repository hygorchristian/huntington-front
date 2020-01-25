import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import { Container, useStyles } from './styles';

function Notificacoes(props) {
  const classes = useStyles();

  return (
    <Container {...props}>
      <List className={classes.list}>
        <ListSubheader component="div">Notificações</ListSubheader>
        <ListItem
          primary="Notificação teste"
          secondary="Conteúdo extra"
        />
      </List>
      <Divider />
    </Container>
);
}

export default Notificacoes;
