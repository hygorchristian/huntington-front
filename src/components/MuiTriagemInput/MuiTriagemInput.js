import React from 'react';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import MuiInput from '~/components/MuiInput';
import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  label: {
    width: 350,
    textAlign: 'right'
  },
  form: {
    margin: theme.spacing(1)
  },
  flex: {
    flex: 1,
    margin: theme.spacing(1)
  }
}));

function MuiTriagemInput({
  label, placeholder, value, mt = 0, ...props
}) {
  const classes = useStyles();

  return (
    <Grid direction="row" alignItems="center" container spacing={1} className={classes.margin} style={{ marginTop: mt }}>
      <Grid item className={classes.label}>
        <InputLabel>{label}</InputLabel>
      </Grid>
      <Grid className={classes.form}>
        <Button variant="outlined" color="primary">Sim</Button>
      </Grid>
      <Grid className={classes.form}>
        <Button variant="outlined" color="primary">Não</Button>
      </Grid>
      <Grid className={classes.flex}>
        <TextField fullWidth variant="outlined" label={placeholder} {...props} />
      </Grid>
    </Grid>
  );
}

export default MuiTriagemInput;
