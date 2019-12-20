import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Formik, useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '~/components/InputLabel';
import OptionsLabel from '~/components/OptionsLabel';

import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import { LoginSchema } from '~/screens/Login/validators';
import { Form, Loading } from '~/screens/Login/styles';
import MuiField from '~/components/MuiField';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiSelect from '~/components/MuiSelect';
import { AdicionarDoadoraSchema } from '~/screens/AdicionarDoadoraInicio/validators';
import MuiInput from '~/components/MuiInput';

function AdicionarDoadoraInicio({ onProximo }) {
  const [estadoCivil, setEstadoCivil] = useState(null);
  const [etnia, setEtnia] = useState(null);

  const onSubmit = (values) => {

  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      nascimento: '',
      estadocivil: 'dddd',
      etnia: ''
    },
    onSubmit,
    validationSchema: AdicionarDoadoraSchema
  });
  return (
    <Container>
      <Voltar label="Mutirão dia da saúde" route="/doadora/pre-cadastros/1" />
      <Header>
        <h1>Pré-cadastro</h1>
        <span>(Recepção)</span>
      </Header>
      <Content>
        <form onSubmit={formik.handleSubmit}>
          <MuiInput
            name="nome"
            label="Nome"
            type="text"
            value={formik.values.nome}
            onChange={formik.handleChange}
          />
          <MuiDatePicker
            name="nascimento"
            label="Data de Nascimento"
            value={formik.values.nascimento}
            onChange={(e) => {
              formik.setFieldValue('nascimento', e);
            }}
          />
          <MuiSelect
            name="estadocivil"
            label="Estado Civil"
            value={formik.values.estadocivil}
            handleChange={(e) => {
              formik.setFieldValue('estadocivil', e.target.value);
            }}
          >
            <MenuItem value="casada">Casada</MenuItem>
            <MenuItem value="solteira">Solteira</MenuItem>
            <MenuItem value="divorciada">Divorciada</MenuItem>
            <MenuItem value="viúva">Viúva</MenuItem>
          </MuiSelect>
          <MuiSelect
            name="etnia"
            label="Etnia"
            value={formik.values.etnia}
            handleChange={(e) => {
              formik.setFieldValue('etnia', e.target.value);
            }}
          >
            <MenuItem value="branca">Branca</MenuItem>
            <MenuItem value="loira">Loira</MenuItem>
            <MenuItem value="parda">Parda</MenuItem>
            <MenuItem value="negra">Negra</MenuItem>
            <MenuItem value="oriental">Oriental</MenuItem>
            <MenuItem value="outra">Outra</MenuItem>
          </MuiSelect>
          {formik.isSubmitting && <Loading size={20} />}
          {/* <span>{error}</span> */}
        </form>
        {/* <form> */}
        {/*  <InputLabel */}
        {/*    label="Nome" */}
        {/*    type="text" */}
        {/*    width={400} */}
        {/*  /> */}
        {/*  <InputLabel */}
        {/*    label="Data de Nascimento" */}
        {/*    type="date" */}
        {/*    width={300} */}
        {/*  /> */}
        {/*  <OptionsLabel */}
        {/*    label="Estado Civil" */}
        {/*    data={[ */}
        {/*      'Casada', */}
        {/*      'Solteira', */}
        {/*      'Divorciada', */}
        {/*      'Viúva' */}
        {/*    ]} */}
        {/*    value={estadoCivil} */}
        {/*    onSelect={(value) => setEstadoCivil(value)} */}
        {/*  /> */}
        {/*  <OptionsLabel */}
        {/*    label="Etnia" */}
        {/*    data={[ */}
        {/*      'Branca', */}
        {/*      'Loira', */}
        {/*      'Parda', */}
        {/*      'Negra', */}
        {/*      'Oriental', */}
        {/*      'Outra', */}
        {/*    ]} */}
        {/*    value={etnia} */}
        {/*    onSelect={(value) => setEtnia(value)} */}
        {/*  /> */}
        {/* </form> */}
        <div className="buttons">
          <button onClick={onProximo} className="light">Próximo</button>
        </div>
      </Content>
    </Container>
  );
}

export default withRouter(AdicionarDoadoraInicio);
