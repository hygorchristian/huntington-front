/* eslint-disable object-curly-newline */

import React, { useState, useEffect, useRef, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Api from '~/services/api';

import MuiDatePicker from '~/components/MuiDatePicker';

const useStyles = makeStyles(() => ({
  paper: {
    width: '80%',
    maxHeight: 435,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  }
}));

function DialogConfirmarDpm({ onClose, open, doadora, ...other }) {
  const classes = useStyles();

  const onSubmit = async (values) => {
    const response = await Api.updateDoadora(doadora.id, { dpm: values.dpm });
    console.tron.log(response);
    window.location.reload();
  };

  const formik = useFormik({
    onSubmit,
    initialValues: {
      dpm: null,
    },
    validationSchema: Yup.object().shape({
      dpm: Yup.string()
        .typeError('Data inválida')
        .required('Campo obrigatório'),
    })
  });

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">
Inserir data da próxima menstruação
      </DialogTitle>
      <DialogContent dividers>
        <MuiDatePicker
          name="dpm"
          label="Data da Próxima Menstruação"
          value={formik.values.dpm}
          onChange={(e) => {
            formik.setFieldValue('dpm', e);
          }}
          error={formik.errors.dpm}
          helperText={formik.errors.dpm}
        />

      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancelar
        </Button>
        <Button onClick={formik.submitForm} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogConfirmarDpm;
