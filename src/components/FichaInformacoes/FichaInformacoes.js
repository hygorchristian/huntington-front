import React from 'react';

import { Container } from './styles';
import LabelValue from '~/components/LabelValue';

function FichaInformacoes({ titulo }) {
  const random = Math.ceil(Math.random() * 99);

  return (
    <Container>
      <h2 className="titulo">{titulo}</h2>
      <div className="dados">
        <div className="infos">
          <LabelValue label="Nome">Andressa Guimarães</LabelValue>
          <LabelValue label="Etnia">Branca</LabelValue>
          <LabelValue label="Ascendência">Italiana</LabelValue>
          <LabelValue label="Tipo sanguíneo">A+</LabelValue>
          <LabelValue label="Peso">63kg</LabelValue>
          <LabelValue label="Altura">1,60m</LabelValue>
          <LabelValue label="Cor dos olhos">Castanho Escuro</LabelValue>
          <LabelValue label="Cor do cabelo">Castanho Claro</LabelValue>
          <div />
          <LabelValue label="Característica do cabelo">Cacheado</LabelValue>
          <LabelValue label="Cor da pele">Branca C</LabelValue>
        </div>
        <div className="foto">
          <label>Foto</label>
          <img src={`https://randomuser.me/api/portraits/women/${random}.jpg`} />
        </div>
      </div>
    </Container>
);
}

export default FichaInformacoes;
