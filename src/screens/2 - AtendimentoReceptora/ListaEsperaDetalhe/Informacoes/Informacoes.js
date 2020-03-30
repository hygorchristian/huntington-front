import React, { useState } from 'react';

import {
 Container, Info, InfoExtra, Questionario
} from './styles';
import LabelValue from '~/components/LabelValue';
import FichaInformacoes from '~/components/FichaInformacoes';

  const INITIAL = {
    name: 'Carolina Marrocos',
    pin: '12345678',
    email: 'emailreceptora@email.com.br',
    rg: '3.153.025',
    rg_expeditor: 'SSP-DF',
    birth: '1995-09-06T12:00:00Z',
    abo1: 'A+',
    abo2: 'O-',
    etnia: {
      name: 'Branca',
    },
    status: {
      name: 'Em espera'
    },
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

  function Informacoes() {
    const [data, setData] = useState(INITIAL);

  return (
    <Container>
      <Info>
        <LabelValue label="Período"><span>Set/2018</span></LabelValue>
        <LabelValue label="PIN"><span>{data.pin}</span></LabelValue>
        <LabelValue label="ABO"><span>{data.abo1}</span></LabelValue>
        <LabelValue label="ABO2"><span>{data.abo2}</span></LabelValue>
        <LabelValue label="Etnia"><span>{data.etnia && data.etnia.name}</span></LabelValue>
        <LabelValue label="Status"><span>{data.status && data.status.name}</span></LabelValue>
      </Info>
      <InfoExtra>
        <div className="left">
          <LabelValue label="Médico(a)"><span>Gabriela Braun</span></LabelValue>
          <LabelValue label="Unidade"><span>Vila Mariana</span></LabelValue>
          <LabelValue label="Tipo de Ciclo"><span>FET</span></LabelValue>
          <LabelValue label="Observação"><span>-</span></LabelValue>
        </div>
        <div className="right">
          <LabelValue label="OD1"><span>12345678</span></LabelValue>
          <LabelValue label="OD2"><span>12345678</span></LabelValue>
          <LabelValue label="OD3"><span>12345678</span></LabelValue>
        </div>
      </InfoExtra>
      <Questionario>
        <legend>Questionrio</legend>
        <div className="fichas">
          <FichaInformacoes data={data.form} />
        </div>
        <div className="consideracoes">
          <h2>Considerações</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </Questionario>
    </Container>
);
}

export default Informacoes;
