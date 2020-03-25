import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import { Content } from './styles';
import MuiInput from '~/components/MuiInput';

function DialogLItem({ open, onClose, ...other }) {
  const [value, setValue] = useState(null);

  return (
    <Dialog
      maxWidth="md"
      disableEscapeKeyDown
      open={open}
      {...other}
    >
      <DialogTitle>Editar</DialogTitle>
      <DialogContent dividers>
        <Content>
          <MuiInput
            label="PIN Receptora"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="separator" />
          <div className="info">
            {`Doadora: ${value}`}
          </div>
        </Content>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="error" onClick={onClose}>
          Cancelar
        </Button>
        <Button color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogLItem;
