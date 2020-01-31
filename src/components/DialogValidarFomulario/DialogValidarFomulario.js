/* eslint-disable object-curly-newline */

import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import { Content } from './styles';

import MuiTextarea from '~/components/MuiTextarea';
import validationSchema from './validationSchema';
import MuiSelect from '~/components/MuiSelect';

function DialogValidarFormulario({ onClose, open, data, ...other }) {
  const onSubmit = async (values) => {

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

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      maxWidth="md"
      disableEscapeKeyDown
      open={open}
      {...other}
    >
      <DialogTitle>Validar questionário</DialogTitle>
      <DialogContent dividers>
        <Content>
          <div className="receptora">
            <h4>Receptora</h4>
            <span className="name">Carolina Marrocos</span>
            <span className="pin">12345678</span>
          </div>
          <div className="separator" />
          <div className="form">
            <div className="row">
              <MuiSelect
                style={{ width: 240 }}
                name="status"
                label="Tipo de Ciclo"
              >
                <MenuItem value="casada">Programada</MenuItem>
                <MenuItem value="solteira">Estimulação</MenuItem>
              </MuiSelect>
              <MuiSelect
                style={{ width: 240 }}
                name="status"
                label="Adicionais"
              >
                <MenuItem value="casada">Programada</MenuItem>
                <MenuItem value="solteira">Estimulação</MenuItem>
              </MuiSelect>
            </div>
            <MuiTextarea label="Observações" />
          </div>
        </Content>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="error">
          Cancelar
        </Button>
        <Button onClick={formik.submitForm} color="primary">
          Enviar para Lista de Espera
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogValidarFormulario;
