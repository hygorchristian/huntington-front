import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

import { Container, Header, Questionario } from './styles';
import LabelValue from '~/components/LabelValue';
import FichaInformacoes from '~/components/FichaInformacoes';
import { formatarDiaMesAno } from '~/utils/data';
import Botao from '~/components/Botao';
import DialogValidarFormulario from '~/components/DialogValidarFomulario';
import Api from '~/services/api';
import Voltar from '~/components/Voltar/Voltar';
import { Content } from '~/screens/2 - AtendimentoReceptora/Contato/styles';
import AdicionarRow from '~/components/AdicionarRow';
import { encode } from '~/utils/jwt';

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
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEnviarFormulario = () => {
    const date = new Date();
    date.setDate(date.getDate() + 10);

    const val = {
      receiver_id: id,
      receiver_name: data.name,
      form_variant: 'receptores_heteros',
      expire_date: date
    };

    encode(val).then((encoded) => {
      const url = `http://localhost:3030/receptora/form?token=${encoded}`;
      console.tron.log(url);
      console.log(url);
    }).catch((err) => {
    });
  };

  useEffect(() => {
    Api.getReceiver(id).then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.tron.error(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Container>
        <Voltar label="Contatos" route="/receptora/contatos" />
        <Content>
          Carregando...
        </Content>
      </Container>
    );
  }

  return data && (
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
              {data.rg && <span>{`${data.rg} ${data.rg_expeditor}`}</span>}
            </div>
            <div className="col mr-40">
              <label>Nascimento</label>
              <span>{formatarDiaMesAno(data.birth)}</span>
            </div>
          </div>
        </div>
      </Header>
      {data.form ? (
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
              <FichaInformacoes data={data.form} />
            </div>
            <div className="consideracoes">
              <h2>Considerações</h2>
              <p>{data.form.obs}</p>
            </div>
            {!data.form.is_valid && (
              <div className="controller">
                <Botao endIcon="check" onClick={() => setDialogOpen(true)}>
                  Validar Formulário
                </Botao>
              </div>
            )}
          </fieldset>
          <DialogValidarFormulario
            data={data.form}
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
          />
        </Questionario>
      ) : (
        <AdicionarRow label="Enviar formulário" context="Formulário" onClick={handleEnviarFormulario} />
      )}
    </Container>
  );
}

export default ContatoInformacoes;
