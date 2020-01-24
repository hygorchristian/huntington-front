/* eslint-disable object-curly-newline */

import React, { useState, useEffect, useRef, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';

import { useFormik } from 'formik';
import Api from '~/services/api';

import options from './options';
import MuiInput from '~/components/MuiInput';
import MuiTextarea from '~/components/MuiTextarea';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiCheckbox from '~/components/MuiCheckbox';
import validationSchema from './validationSchema';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';
import ExameContext from '~/contexts/ExameContext';
import { formatarDiaMesAno } from '~/utils/data';

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

function DialogExamResult({ onClose, open, exam, ...other }) {
  const { getExames } = useContext(ExameContext);
  const radioGroupRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const form = options[exam.name];
  const classes = useStyles();

  const onSubmit = async (values) => {
    let tempObs = null;
    if (exam.name === 'sorologias' && values.result === 'Positivo') {
      Object.keys(values.sorologias).forEach((key) => {
        if (values.sorologias[key]) {
          if (!tempObs) tempObs = '';
          tempObs += `${key}, `;
        }
      });
    }

    let result = null;
    if (form.result.type === 'date') result = formatarDiaMesAno(values.result);

    const data = {
      result: result || values.result,
      obs: tempObs || values.obs
    };

    const response = await Api.updateExam(exam._id, data).catch((error) => {
      showErrorMessage('Erro ao atualizar exame');
    });

    if (response.status === 200) {
      showSuccessMessage('Exame atualizado com sucesso!');
      getExames();
      onClose();
    }
  };

  const formik = useFormik({
    onSubmit,
    initialValues: {
      result: null,
      obs: null,
      sorologias: {}
    },
    validationSchema
  });

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  useEffect(() => {
    setDisabled(formik.values.result !== 'Positivo');
  }, [formik]);

  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">
        {'Inserir resultado ('}
        {exam.name}
        {')'}
      </DialogTitle>
      <DialogContent dividers>
        {form.result.type === 'radio' && (
        <>
          <FormLabel>Inserir resultado</FormLabel>
          <Divider className={classes.divider} />
          <RadioGroup
            ref={radioGroupRef}
            aria-label="ringtone"
            name="ringtone"
            value={formik.values.result}
            onChange={(e) => formik.setFieldValue('result', e.target.value)}
          >
            {form.result.values.map((option) => (
              <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          <Divider className={classes.divider} />
        </>
        )}

        {form.result.type === 'input' && (
        <>
          <FormLabel>Inserir resultado</FormLabel>
          <Divider className={classes.divider} />
          <MuiInput label="Resultado" />
          <Divider className={classes.divider} />
        </>
        )}

        {form.result.type === 'date' && (
        <>
          <FormLabel>Inserir resultado</FormLabel>
          <Divider className={classes.divider} />
          <MuiDatePicker
            name="result"
            label="Data da Coleta"
            value={formik.values.result}
            onChange={(e) => {
              formik.setFieldValue('result', e);
            }}
            error={formik.errors.result}
            helperText={formik.errors.result}
          />
          <Divider className={classes.divider} />
        </>
        )}

        {form.obs.type === 'textarea' && (
          <>
            <FormLabel>Adicionar informações</FormLabel>
            <MuiTextarea
              label="Observações"
              onChange={(e) => formik.setFieldValue('obs', e.target.value)}
            />
          </>
        )}

        {form.obs.type === 'checkbox' && (
          <>
            <FormLabel>Inserir resultado</FormLabel>
            <Divider className={classes.divider} />
            {form.obs.values.map((option) => (
              <MuiCheckbox
                disabled={disabled}
                label={option}
                onChange={(_, label) => {
                  const sor = formik.values.sorologias;
                  sor[label] = true;
                  formik.setFieldValue('sorologias', sor);
                }}
              />
            ))}
            <Divider className={classes.divider} />
          </>
        )}

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

export default DialogExamResult;
