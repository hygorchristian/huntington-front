import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Api from '~/services/api';

import { Content } from './styles';
import MuiInput from '~/components/MuiInput';
import Botao from '~/components/Botao';
import Loading from '~/components/Loading';

function DialogLItem({
 open, onClose, onReceptora, ...other
}) {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [receptora, setReceptora] = useState(null);
  const [loading, setLoading] = useState(null);

  const onBusca = () => {
    setError(null);
    setLoading(true);

    Api.getReceiver(value).then((response) => {
      setReceptora(response.data);
    }).catch((err) => {
      setError('Receptora não existe');
    }).finally(() => {
      setLoading(false);
    });
  };

  const onConfirm = () => {
    onReceptora(receptora);
    onClose();
  };

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
          <div className="col">
            <MuiInput
              label="ID Receptora"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              error={error}
              helperText={error}
            />
            <Botao onClick={onBusca}>Buscar</Botao>
            { loading && <Loading /> }
          </div>
          <div className="separator" />
          <div className="info">
            {`Receptora: ${receptora && receptora.name}`}
          </div>
        </Content>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="error" onClick={onClose}>
          Cancelar
        </Button>
        <Button color="primary" onClick={onConfirm}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogLItem;
