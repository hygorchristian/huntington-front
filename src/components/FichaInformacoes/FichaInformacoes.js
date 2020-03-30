import React from 'react';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';
import { BASE_URL } from '~/services/api';

function FichaInformacoes({ titulo, data }) {
  console.tron.log({ data });

  const getPhoto = (photo) => photo && `${BASE_URL}${photo.url}`;

  return (
    <>
      <Container>
        <h2 className="titulo">Receptora</h2>
        <div className="dados">
          <div className="infos">
            <LabelValue label="Nome">{data.receiver_name}</LabelValue>
            <LabelValue label="Etnia">{data.receiver_etnia}</LabelValue>
            <LabelValue label="Ascendência">{data.receiver_ascendance}</LabelValue>
            <LabelValue label="Tipo sanguíneo">{data.receiver_blood_type}</LabelValue>
            <LabelValue label="Peso">
              {data.receiver_weight}
              {' Kg'}
            </LabelValue>
            <LabelValue label="Altura">
              {data.receiver_height}
              {' cm'}
            </LabelValue>
            <LabelValue label="Cor dos olhos">{data.receiver_eye_color}</LabelValue>
            <LabelValue label="Cor do cabelo">{data.receiver_hair_color}</LabelValue>
            <div />
            <LabelValue label="Característica do cabelo">{data.receiver_hair_properties}</LabelValue>
            <LabelValue label="Cor da pele">{data.receiver_skin_tone}</LabelValue>
          </div>
          <div className="foto">
            <label>Foto</label>
            <img src={getPhoto(data.receiver_picture)} />
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="titulo">Cônjuge/Parceiro</h2>
        <div className="dados">
          <div className="infos">
            <LabelValue label="Nome">{data.partner_name}</LabelValue>
            <LabelValue label="Etnia">{data.partner_etnia}</LabelValue>
            <LabelValue label="Ascendência">{data.partner_ascendance}</LabelValue>
            <LabelValue label="Tipo sanguíneo">{data.partner_blood_type}</LabelValue>
            <LabelValue label="Peso">
              {data.partner_weight}
              {' Kg'}
            </LabelValue>
            <LabelValue label="Altura">
              {data.partner_height}
              {' cm'}
            </LabelValue>
            <LabelValue label="Cor dos olhos">{data.partner_eye_color}</LabelValue>
            <LabelValue label="Cor do cabelo">{data.partner_hair_color}</LabelValue>
            <div />
            <LabelValue label="Característica do cabelo">{data.partner_hair_properties}</LabelValue>
            <LabelValue label="Cor da pele">{data.partner_skin_tone}</LabelValue>
          </div>
          <div className="foto">
            <label>Foto</label>
            <img src={getPhoto(data.partner_picture)} />
          </div>
        </div>
      </Container>
    </>

);
}

export default FichaInformacoes;
