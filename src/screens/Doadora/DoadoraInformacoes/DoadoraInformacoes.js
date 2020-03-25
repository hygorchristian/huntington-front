import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Api from '~/services/api';

import { Container, Header, Recepcao } from './styles';
import AdicionarRow from '~/components/AdicionarRow';
import RecepcaoDoadora from '~/components/RecepcaoDoadora';
import { showErrorMessage } from '~/utils/notistack';
import Triagem from '~/components/Triagem';
import { formatarDiaMesAno } from '~/utils/data';
import MuiSelect from '~/components/MuiSelect';
import Botao from '~/components/Botao';
import DialogExamResult from '~/components/DialogExamResult';
import DialogConfirmarDpm from '~/components/DialogConfirmarDpm';

function DoadoraInformacoes() {
  const [data, setData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { doadora } = useParams();
  const history = useHistory();

  const adicionarTriagem = () => {
    history.push('/doadora/detalhes/1/triagem');
  };

  useEffect(() => {
    Api.getDoadora(doadora)
      .then((response) => {
        const donor = response.data;
        if (donor.consultations && donor.consultations.length > 0) {
          donor.dpm = formatarDiaMesAno(donor.consultations[0].dpm);
        } else {
          donor.dpm = null;
        }

        setData(donor);
      })
      .catch((err) => {
        console.tron.error({ err });
        showErrorMessage('Não foi possível recuperar os dados da doadora');
      });
  }, []);

  if (!data) return false;

  return (
    <Container>
      <Header>
        <div className="rowinfo">
          <div className="info">
            <div className="col mr-40">
              <label>ID</label>
              <span>{data.id}</span>
            </div>
            <div className="col mr-40">
              <label>PIN</label>
              <span>{data.pin || '-'}</span>
            </div>
            <div className="col mr-40">
              <label>Origem</label>
              <span>{data.origin || '-'}</span>
            </div>
            <div className="col">
              <label>Indicação</label>
              <span>{(data.indication && data.indication.value) ? 'Sim' : 'Não'}</span>
            </div>
          </div>
          <div className="status">
            <div className="col">
              <label>D.P.M.</label>

              {data.dpm ? (
                <span>{data.dpm}</span>
              ) : (
                <>
                  <Botao onClick={() => setDialogOpen(true)}>Confirmar DPM</Botao>
                  <DialogConfirmarDpm
                    keepMounted
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                    doadora={data}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="status">
          <div className="select">
            <MuiSelect
              style={{ width: 200 }}
              name="status"
              label="Status de Atendimento"
            >
              <MenuItem value="casada">Programada</MenuItem>
              <MenuItem value="solteira">Estimulação</MenuItem>
            </MuiSelect>
          </div>
          <div className="select">
            <MuiSelect
              style={{ width: 200 }}
              name="status"
              label="Perfil"
            >
              <MenuItem value="casada">Inativa</MenuItem>
              <MenuItem value="solteira">Excluída</MenuItem>
            </MuiSelect>
          </div>
        </div>
      </Header>
      <RecepcaoDoadora data={data} />
      {data.triagem ? (
        <Triagem data={data.triagem} />
      ) : (
        <div className="row">
          <AdicionarRow label="Adicionar" context="Triagem" onClick={adicionarTriagem} />
        </div>
      )}
    </Container>
);
}

export default DoadoraInformacoes;
