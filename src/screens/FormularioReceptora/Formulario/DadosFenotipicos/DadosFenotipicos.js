import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { Container } from './styles';
import RadioImage from '~/components/RadioImage';
import MuiInput from '~/components/MuiInput';
import MuiSelect from '~/components/MuiSelect';
import SkinSelector from '~/components/SkinSelector';
import ImagePicker from '~/components/ImagePicker';

function DadosFenotipicos({ formik }) {
  const { values, handleChange, setFieldValue } = formik;

  const [eyeColor, setEyeColor] = useState(null);
  const [hairColor, setHairColor] = useState(null);
  const [hairType, setHairType] = useState(null);
  const [skinTone, setSkinTone] = useState(null);
  const [image, setImage] = useState(null);

  return (
    <Container>
      <div className="grid">
        <MuiSelect
          label="Tipo Sanguíneo"
          name="receiver_blood_type"
          value={values.receiver_blood_type}
          onChange={handleChange}
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
        <MuiInput
          label="Peso"
          name="receiver_weight"
          value={values.receiver_weight}
          onChange={handleChange}
        />
        <MuiInput
          label="Altura"
          name="receiver_height"
          value={values.receiver_height}
          onChange={handleChange}
        />
      </div>
      <span className="label" style={{ marginTop: 50 }}>Cor dos olhos</span>
      <div className="row">
        <RadioImage
          image="/img/form/olho-azul-h.png"
          label="Azul"
          checked={values.receiver_eye_color === 'azul'}
          onCheck={() => setFieldValue('receiver_eye_color', 'azul')}
        />
        <RadioImage
          image="/img/form/olho-verde-h.png"
          label="Verde"
          checked={values.receiver_eye_color === 'verde'}
          onCheck={() => setFieldValue('receiver_eye_color', 'verde')}
        />
        <RadioImage
          image="/img/form/olho-castanho-claro-h.png"
          label="Castanho Claro"
          checked={values.receiver_eye_color === 'castanho-claro'}
          onCheck={() => setFieldValue('receiver_eye_color', 'castanho-claro')}
        />
        <RadioImage
          image="/img/form/olho-castanho-escuro-h.png"
          label="Castanho Escuro"
          checked={values.receiver_eye_color === 'castanho-escuro'}
          onCheck={() => setFieldValue('receiver_eye_color', 'castanho-escuro')}
        />
        <RadioImage
          image="/img/form/olho-preto-h.png"
          label="Preto"
          checked={values.receiver_eye_color === 'preto'}
          onCheck={() => setFieldValue('receiver_eye_color', 'preto')}
        />
      </div>
      <span className="label">Cor do cabelo</span>
      <div className="row">
        <RadioImage
          image="/img/form/cabelo-ruivo.png"
          label="Ruivo"
          checked={values.receiver_hair_color === 'ruivo'}
          onCheck={() => setFieldValue('receiver_hair_color', 'ruivo')}
        />
        <RadioImage
          image="/img/form/cabelo-loiro.png"
          label="Loiro"
          checked={values.receiver_hair_color === 'loiro'}
          onCheck={() => setFieldValue('receiver_hair_color', 'loiro')}
        />
        <RadioImage
          image="/img/form/cabelo-castanho-claro.png"
          label="Castanho Claro"
          checked={values.receiver_hair_color === 'castanho-claro'}
          onCheck={() => setFieldValue('receiver_hair_color', 'castanho-claro')}
        />
        <RadioImage
          image="/img/form/cabelo-castanho-escuro.png"
          label="Castanho Escuro"
          checked={values.receiver_hair_color === 'castanho-escuro'}
          onCheck={() => setFieldValue('receiver_hair_color', 'castanho-escuro')}
        />
        <RadioImage
          image="/img/form/cabelo-preto.png"
          label="Preto"
          checked={values.receiver_hair_color === 'preto'}
          onCheck={() => setFieldValue('receiver_hair_color', 'preto')}
        />
      </div>
      <span className="label">Característica do Cabelo</span>
      <div className="row">
        <RadioImage
          image="/img/form/cabelo-liso-h.png"
          label="Liso"
          checked={values.receiver_hair_properties === 'liso'}
          onCheck={() => setFieldValue('receiver_hair_properties', 'liso')}
        />
        <RadioImage
          image="/img/form/cabelo-ondulado-h.png"
          label="Ondulado"
          checked={values.receiver_hair_properties === 'ondulado'}
          onCheck={() => setFieldValue('receiver_hair_properties', 'ondulado')}
        />
        <RadioImage
          image="/img/form/cabelo-cacheado-h.png"
          label="Cacheado"
          checked={values.receiver_hair_properties === 'cacheado'}
          onCheck={() => setFieldValue('receiver_hair_properties', 'cacheado')}
        />
        <RadioImage
          image="/img/form/cabelo-crespo-h.png"
          label="Crespo"
          checked={values.receiver_hair_properties === 'crespo'}
          onCheck={() => setFieldValue('receiver_hair_properties', 'crespo')}
        />
      </div>
      <span className="label">Cor da pele</span>
      <SkinSelector
        skinTone={values.receiver_skin_tone && values.receiver_skin_tone.slice(0, -2)}
        value={values.receiver_skin_tone}
        onChange={(val) => setFieldValue('receiver_skin_tone', val)}
      />
      <span className="label">Foto Paciente Receptora</span>
      <ImagePicker
        value={image}
        onSelect={(file) => {
          setImage(URL.createObjectURL(file));
        }}
        onDelete={() => {
          setImage(null);
        }}
      />
    </Container>
);
}

export default DadosFenotipicos;
