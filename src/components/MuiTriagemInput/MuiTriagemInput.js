import React from 'react';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { Button } from './styles';

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
  label, placeholder, name, formik, ...props
}) {
  const classes = useStyles();
  const value = formik.values[name];
  const details = formik.values[`${name}_details`];

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
    <Grid direction="row" alignItems="center" container spacing={1} className={classes.margin}>
      <Grid item className={classes.label}>
        <InputLabel>{label}</InputLabel>
      </Grid>
      <Grid className={classes.form}>
        <Button
          variant={getVariant(true)}
          color={getColor(true)}
          error={formik.touched[name] && formik.errors[name]}
          onClick={() => formik.setFieldValue(name, true)}
        >
          Sim
        </Button>
      </Grid>
      <Grid className={classes.form}>
        <Button
          color={getColor(false)}
          variant={getVariant(false)}
          error={formik.touched[name] && formik.errors[name]}
          onClick={() => formik.setFieldValue(name, false)}
        >
          Não
        </Button>
      </Grid>
      <Grid className={classes.flex}>
        <TextField
          fullWidth
          variant="outlined"
          label={placeholder}
          value={details}
          onChange={(e) => formik.setFieldValue(`${name}_details`, e.target.value)}
          error={formik.touched[name] && formik.errors[`${name}_details`]}
          helperText={formik.touched[name] && formik.errors[`${name}_details`]}
          {...props}
        />
      </Grid>
    </Grid>
  );
}

export default MuiTriagemInput;
