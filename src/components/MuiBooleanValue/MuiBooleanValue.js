import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { Button } from './styles';
import { getError, getValue } from '~/utils/formik';

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
  fieldLabel,
  name,
  formik,
  ...props
}) {
  const classes = useStyles();

  const boolOnChange = (val) => formik.setFieldValue(`${name}.value`, val);
  const boolValue = getValue(formik, `${name}.value`);
  const boolError = getError(formik, `${name}.value`);

  const getColor = (bool) => {
    if (boolValue === bool) {
      return 'primary';
    }

    return '';
  };

  const getVariant = (bool) => {
    if (boolValue === bool) {
      return 'contained';
    }

    return 'outlined';
  };

  return (
    <Grid direction="column" container spacing={1} className={classes.margin}>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <InputLabel>{fieldLabel}</InputLabel>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.form} alignItems="center">
        <Grid item className={classes.button}>
          <Button
            variant={getVariant(true)}
            color={getColor(true)}
            error={boolError}
            onClick={() => boolOnChange(true)}
          >
            Sim
          </Button>
        </Grid>
        <Grid item className={classes.button}>
          <Button
            color={getColor(false)}
            variant={getVariant(false)}
            error={boolError}
            onClick={() => boolOnChange(false)}
          >
            Não
          </Button>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            value={getValue(formik, `${name}.obs`)}
            error={getError(formik, `${name}.obs`)}
            helperText={getError(formik, `${name}.obs`)}
            onChange={(e) => formik.setFieldValue(`${name}.obs`, e.target.value)}
            {...props}
          />
        </Grid>
      </Grid>
    </Grid>
);
}

export default MuiBooleanValue;
