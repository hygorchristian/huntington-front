import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

import { Button } from './styles';

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

function MuiBoolean({ label, name, formik }) {
  const classes = useStyles();
  const value = formik.values[name];

  const getColor = (bool) => {
    if (value === bool) {
      return 'primary';
    }

    return '';
  };

  const getVariant = (bool) => {
    if (value === bool) {
      return 'contained';
    }

    return 'outlined';
  };

  return (
    <Grid direction="column" container spacing={1} className={classes.margin}>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <InputLabel>{label}</InputLabel>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.form} alignItems="center">
        <Grid item className={classes.button}>
          <Button
            variant={getVariant(true)}
            color={getColor(true)}
            error={formik.touched[name] && formik.errors[name]}
            onClick={() => formik.setFieldValue(name, true)}
          >
            Sim
          </Button>
        </Grid>
        <Grid item className={classes.button}>
          <Button
            color={getColor(false)}
            variant={getVariant(false)}
            error={formik.touched[name] && formik.errors[name]}
            onClick={() => formik.setFieldValue(name, false)}
          >
            Não
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MuiBoolean;
