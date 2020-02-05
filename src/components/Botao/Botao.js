import React from 'react';
import Check from '@material-ui/icons/Check';
import Add from '@material-ui/icons/Add';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Close from '@material-ui/icons/Close';
import Cached from '@material-ui/icons/Cached';

import { makeStyles } from '@material-ui/core';
import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
}));

function Botao({
 color = 'primary', endIcon, startIcon, ...props
}) {
  const getIcon = (icon) => {
    switch (icon) {
      case 'check':
        return <Check />;
      case 'add':
        return <Add />;
      case 'arrow-left':
        return <ArrowBack />;
      case 'arrow-right':
        return <ArrowForward />;
      case 'close':
        return <Close />;
      case 'sync':
        return <Cached />;
      default:
        return null;
    }
  };

  const classes = useStyles();

  return (
    <Container
      className={classes.margin}
      color={color}
      endIcon={getIcon(endIcon)}
      startIcon={getIcon(startIcon)}
      {...props}
    />
  );
}

export default Botao;
