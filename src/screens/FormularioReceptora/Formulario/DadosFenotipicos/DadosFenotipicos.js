import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { Container } from './styles';
import RadioImage from '~/components/RadioImage';
import MuiInput from '~/components/MuiInput';
import MuiSelect from '~/components/MuiSelect';
import SkinSelector from '~/components/SkinSelector';

function DadosFenotipicos() {
  const [eyeColor, setEyeColor] = useState(null);
  const [hairColor, setHairColor] = useState(null);
  const [hairType, setHairType] = useState(null);
  const [skinTone, setSkinTone] = useState(null);

  return (
    <Container>
      <div className="grid">
        <MuiSelect
          name="status"
          label="Tipo Sanguíneo"
        >
          <MenuItem value="a+">A+</MenuItem>
          <MenuItem value="a-">A-</MenuItem>
          <MenuItem value="b+">B+</MenuItem>
          <MenuItem value="b-">B-</MenuItem>
          <MenuItem value="ab+">AB+</MenuItem>
          <MenuItem value="ab-">AB-</MenuItem>
          <MenuItem value="o+">O+</MenuItem>
          <MenuItem value="o-">O-</MenuItem>
        </MuiSelect>
      </div>
      <div className="grid">
        <MuiInput label="Peso" />
        <MuiInput label="Altura" />
      </div>
      <span className="label" style={{ marginTop: 50 }}>Cor dos olhos</span>
      <div className="row">
        <RadioImage
          image="/img/form/olho-azul-h.png"
          label="Azul"
          checked={eyeColor === 'azul'}
          onCheck={() => setEyeColor('azul')}
        />
        <RadioImage
          image="/img/form/olho-verde-h.png"
          label="Verde"
          checked={eyeColor === 'verde'}
          onCheck={() => setEyeColor('verde')}
        />
        <RadioImage
          image="/img/form/olho-castanho-claro-h.png"
          label="Castanho Claro"
          checked={eyeColor === 'castanho-claro'}
          onCheck={() => setEyeColor('castanho-claro')}
        />
        <RadioImage
          image="/img/form/olho-castanho-escuro-h.png"
          label="Castanho Escuro"
          checked={eyeColor === 'castanho-escuro'}
          onCheck={() => setEyeColor('castanho-escuro')}
        />
        <RadioImage
          image="/img/form/olho-preto-h.png"
          label="Preto"
          checked={eyeColor === 'preto'}
          onCheck={() => setEyeColor('preto')}
        />
      </div>
      <span className="label">Cor do cabelo</span>
      <div className="row">
        <RadioImage
          image="/img/form/cabelo-ruivo.png"
          label="Ruivo"
          checked={hairColor === 'verde'}
          onCheck={() => setHairColor('verde')}
        />
        <RadioImage
          image="/img/form/cabelo-loiro.png"
          label="Loiro"
          checked={hairColor === 'loiro'}
          onCheck={() => setHairColor('loiro')}
        />
        <RadioImage
          image="/img/form/cabelo-castanho-claro.png"
          label="Castanho Claro"
          checked={hairColor === 'castanho-claro'}
          onCheck={() => setHairColor('castanho-claro')}
        />
        <RadioImage
          image="/img/form/cabelo-castanho-escuro.png"
          label="Castanho Escuro"
          checked={hairColor === 'castanho-escuro'}
          onCheck={() => setHairColor('castanho-escuro')}
        />
        <RadioImage
          image="/img/form/cabelo-preto.png"
          label="Preto"
          checked={hairColor === 'preto'}
          onCheck={() => setHairColor('preto')}
        />
      </div>
      <span className="label">Característica do Cabelo</span>
      <div className="row">
        <RadioImage
          image="/img/form/cabelo-liso-h.png"
          label="Liso"
          checked={hairType === 'liso'}
          onCheck={() => setHairType('liso')}
        />
        <RadioImage
          image="/img/form/cabelo-ondulado-h.png"
          label="Ondulado"
          checked={hairType === 'ondulado'}
          onCheck={() => setHairType('ondulado')}
        />
        <RadioImage
          image="/img/form/cabelo-cacheado-h.png"
          label="Cacheado"
          checked={hairType === 'cacheado'}
          onCheck={() => setHairType('cacheado')}
        />
        <RadioImage
          image="/img/form/cabelo-crespo-h.png"
          label="Crespo"
          checked={hairType === 'crespo'}
          onCheck={() => setHairType('crespo')}
        />
      </div>
      <span className="label">Cor da pele</span>
      <SkinSelector
        value={skinTone}
        onChange={(val) => setSkinTone(val)}
      />
    </Container>
);
}

export default DadosFenotipicos;
