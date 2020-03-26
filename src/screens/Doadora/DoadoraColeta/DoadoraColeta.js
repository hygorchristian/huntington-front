import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import { useHistory, useParams } from 'react-router-dom';
import set from '@babel/runtime/helpers/esm/set';
import Api from '~/services/api';

import { Container } from './styles';
import ResultadoPrimeiraConsulta from '~/components/ResultadoPrimeiraConsulta';
import { showErrorMessage } from '~/utils/notistack';
import AdicionarRow from '~/components/AdicionarRow';
import DialogAgendarColeta from '~/components/DialogAgendarColeta/DialogAgendarColeta';
import DialogExamResult from '~/components/DialogExamResult';

function DoadoraColeta() {
  const [data, setData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { doadora } = useParams();
  const history = useHistory();


  const agendarColeta = () => {
    setDialogOpen(true);
  };

  useEffect(() => {
    Api.getDoadora(doadora).then((response) => {
      const consults = lodash.get(response, 'data.consultations', []);
      const consult = consults.length > 0 ? consults[0] : null;
      setData(consult);
    }).catch((err) => {
      showErrorMessage('Erro ao carregar dados');
    });
  }, []);

  return (
    <Container>
      <AdicionarRow onClick={agendarColeta} label="Agendar coleta" />
      <DialogAgendarColeta
        keepMounted
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        doadora={doadora}
      />
    </Container>
);
}

export default DoadoraColeta;
