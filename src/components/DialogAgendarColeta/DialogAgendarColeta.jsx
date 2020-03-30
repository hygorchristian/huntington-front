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
import { showErrorMessage } from '~/utils/notistack';
import Loading from '~/components/Loading';

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

function DialogAgendarColeta({ onClose, open, doadora, ...other }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    await Api.agendarColeta(values).then((response) => {
      window.location.reload();
    }).catch((err) => {
      onClose();
      showErrorMessage('Não foi possível fazer o agendamento, tente novamente.');
    }).finally(() => {
      setLoading(false);
    });
  };

  const formik = useFormik({
    onSubmit,
    initialValues: {
      donor: doadora,
      date: new Date(),
    },
    validationSchema: Yup.object().shape({
      date: Yup.string()
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
        Agendamento de coleta
      </DialogTitle>
      <DialogContent dividers>
        <MuiDatePicker
          name="date"
          label="Data da coleta"
          value={formik.values.date}
          onChange={(e) => {
            formik.setFieldValue('date', e);
          }}
          error={formik.errors.date}
          helperText={formik.errors.date}
        />

      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancelar
        </Button>
        <Button onClick={formik.submitForm} color="primary">
          Salvar
        </Button>
        {loading && <Loading />}
      </DialogActions>
    </Dialog>
  );
}

export default DialogAgendarColeta;
