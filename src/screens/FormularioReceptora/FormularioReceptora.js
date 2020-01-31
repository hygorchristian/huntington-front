import React, { useState, useEffect } from 'react';

import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import {
 Container, Content, Card, FormLabel
} from './styles';

import validationSchema from './validationSchema';
import initialValues from './initialValues';
import MuiInput from '~/components/MuiInput';
import MuiSelect from '~/components/MuiSelect';
import ImagePicker from '~/components/ImagePicker';


function FormularioReceptora() {
  const [etnias, setEtnias] = useState([]);
  const [receptoraImage, setReceptoraImage] = useState(null);
  const [parceiroImage, setParceiroImage] = useState(null);

  const onSubmit = () => {};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });


  return (
    <Container>
      <Content>
        <img src="/img/logo-dark.svg" />
        <h2>Bem-vindo (a)</h2>
        <span>Preencha o formulário</span>

        <Card elevation="4">
          <FormLabel>Receptora</FormLabel>
          <MuiInput label="Nome" />
          <MuiSelect
            name="etnia"
            label="Etnia"
            value={formik.values.etnia}
            handleChange={(e) => {
              formik.setFieldValue('etnia', e.target.value);
            }}
            error={formik.errors.etnia}
          >
            {
              etnias.map((etnia) => (
                <MenuItem value={etnia._id}>{etnia.name}</MenuItem>
              ))
            }
          </MuiSelect>
          <MuiInput label="Ascendência" />
          <MuiInput label="Tipo sanguíneo" />
          <MuiInput label="Altura" />
          <MuiInput label="Peso" />
          <MuiInput label="Cor do Cabelo" />
          <MuiInput label="Cor da pele" />
          <ImagePicker
            value={receptoraImage}
            onSelect={(file) => {
              setReceptoraImage(URL.createObjectURL(file));
            }}
            onDelete={() => {
              setReceptoraImage(null);
            }}
          />
        </Card>

        <Card elevation="4">
          <FormLabel>Receptora</FormLabel>
          <MuiInput label="Nome" />
          <MuiSelect
            name="etnia"
            label="Etnia"
            value={formik.values.etnia}
            handleChange={(e) => {
              formik.setFieldValue('etnia', e.target.value);
            }}
            error={formik.errors.etnia}
          >
            {
              etnias.map((etnia) => (
                <MenuItem value={etnia._id}>{etnia.name}</MenuItem>
              ))
            }
          </MuiSelect>
          <MuiInput label="Ascendência" />
          <MuiInput label="Tipo sanguíneo" />
          <MuiInput label="Altura" />
          <MuiInput label="Peso" />
          <MuiInput label="Cor do Cabelo" />
          <MuiInput label="Cor da pele" />
          <ImagePicker
            value={receptoraImage}
            onSelect={(file) => {
              setReceptoraImage(URL.createObjectURL(file));
            }}
            onDelete={() => {
              setReceptoraImage(null);
            }}
          />
        </Card>

        {/* <Formik */}
        {/*  initialValues={{ identifier: '', password: '' }} */}
        {/*  validationSchema={LoginSchema} */}
        {/*  onSubmit={onSubmit} */}
        {/* > */}
        {/*  {({ handleSubmit, isSubmitting }) => ( */}
        {/*    <Form */}
        {/*      onSubmit={handleSubmit} */}
        {/*    > */}
        {/*      <MuiField */}
        {/*        name="identifier" */}
        {/*        label="Email ou Identificador" */}
        {/*        type="text" */}
        {/*      /> */}
        {/*      <MuiField */}
        {/*        name="password" */}
        {/*        label="Senha" */}
        {/*        type="password" */}
        {/*      /> */}
        {/*      {isSubmitting && <Loading size={20} />} */}
        {/*      <button type="submit">Entrar</button> */}
        {/*    </Form> */}
        {/*  )} */}
        {/* </Formik> */}
        {/* <a>Não possuo cadastro</a> */}
      </Content>
    </Container>
  );
}

export default FormularioReceptora;
