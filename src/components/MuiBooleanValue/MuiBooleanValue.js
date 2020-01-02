import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  form: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginRight: theme.spacing(2)
  }
}));

function MuiBooleanValue({
 label, placeholder, value, mt = 0, ...props
}) {
  const classes = useStyles();

  return (
    <Grid direction="column" container spacing={1} className={classes.margin} style={{ marginTop: mt }}>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <InputLabel>{label}</InputLabel>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.form} alignItems="center">
        <Grid item className={classes.button}>
          <Button variant="outlined" color="primary">Sim</Button>
        </Grid>
        <Grid item className={classes.button}>
          <Button variant="outlined" color="primary">Não</Button>
        </Grid>
        <Grid item>
          <TextField variant="outlined" label={placeholder} {...props} />
        </Grid>
      </Grid>
    </Grid>
);
}

export default MuiBooleanValue;
