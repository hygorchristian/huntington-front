import React, { useState, useEffect } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

import { Container, Header, Questionario } from './styles';
import LabelValue from '~/components/LabelValue';
import FichaInformacoes from '~/components/FichaInformacoes';
import { formatarDiaMesAno } from '~/utils/data';
import Botao from '~/components/Botao';
import DialogValidarFormulario from '~/components/DialogValidarFomulario';

const INITIAL = {
  name: 'Carolina Marrocos',
  pin: '12345678',
  email: 'emailreceptora@email.com.br',
  rg: '3.153.025',
  rg_expeditor: 'SSP-DF',
  birth: '1995-09-06T12:00:00Z',
  form: {
    receiver_name: 'Andressa Guimarães',
    receiver_etnia: {
      name: 'branca'
    },
    receiver_ascendance: 'italiana',
    receiver_blood_type: 'A+',
    receiver_height: '160',
    receiver_weight: '63',
    receiver_hair_color: 'Castanho Claro',
    receiver_eye_color: 'Castanho Escuro',
    receiver_hair_properties: 'Cacheado',
    receiver_skin_tone: 'Branca C',
    receiver_picture: {
      url: 'https://randomuser.me/api/portraits/women/79.jpg'
    },
    partner_name: 'Rodrigo Thomas',
    partner_etnia: { name: 'branca' },
    partner_ascendance: 'italiana',
    partner_blood_type: 'A+',
    partner_height: '160',
    partner_weight: '63',
    partner_hair_color: 'Castanho Claro',
    partner_eye_color: 'Castanho Escuro',
    partner_hair_properties: 'Cacheado',
    partner_skin_tone: 'Branca C',
    partner_picture: {
      url: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg'
    },
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    validation_cicle_type: '',
    validation_addition: '',
    validation_obs: '',
    is_valid: false,
  }
};

function ContatoInformacoes() {
  const [data, setData] = useState(INITIAL);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    //
  }, []);

  return (
    <Container>
      <Header>
        <div className="row">
          <div className="info">
            <div className="col mr-40">
              <label>PIN</label>
              <span>{data.pin}</span>
            </div>
            <div className="col mr-80">
              <label>Contato</label>
              <span>{data.email}</span>
            </div>
            <div className="col mr-40">
              <label>CPF</label>
              <span>{data.cpf}</span>
            </div>
            <div className="col mr-40">
              <label>RG</label>
              <span>
                {data.rg}
                {' '}
                {data.rg_expeditor}
              </span>
            </div>
            <div className="col mr-40">
              <label>Nascimento</label>
              <span>{formatarDiaMesAno(data.birth)}</span>
            </div>
          </div>
        </div>
      </Header>
      <Questionario>
        <fieldset>
          <legend>QUESTIONÁRIO</legend>
          <div className="info">
            <div className="icon-value">
              <FiCalendar size={15} color="#BCBCBC" />
              <span>19/04/2019</span>
            </div>
            <div className="icon-value">
              <FiMapPin size={15} color="#BCBCBC" />
              <span>Vila Mariana</span>
            </div>
            <LabelValue label="Tipo de Tratamento">Ovodação</LabelValue>
            <LabelValue label="Médico">Eduardo Botelho</LabelValue>
          </div>
          <div className="fichas">
            <FichaInformacoes titulo="Receptora" data={data.form} />
          </div>
          <div className="consideracoes">
            <h2>Considerações</h2>
            <p>{data.form.obs}</p>
          </div>

          <div className="controller">
            <Botao endIcon="check" onClick={() => setDialogOpen(true)}>
              Validar Formulário
            </Botao>
          </div>
        </fieldset>
        <DialogValidarFormulario
          data={data.form}
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        />
      </Questionario>
    </Container>
  );
}

export default ContatoInformacoes;
