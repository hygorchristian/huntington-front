import React from 'react';
import { withRouter } from 'react-router-dom';
import NextIcon from '@material-ui/icons/ArrowForward';

import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';

import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiSelect from '~/components/MuiSelect';
import { AdicionarDoadoraSchema } from '~/screens/AdicionarDoadoraInicio/validators';
import MuiInput from '~/components/MuiInput';
import Loading from '~/components/Loading';
import Botao from '~/components/Botao';

function AdicionarDoadoraInicio({ onProximo }) {
  const onSubmit = (values) => {

  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      nascimento: new Date(),
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
        </form>
        <div className="buttons">
          <Botao
            color=""
            endIcon={<NextIcon />}
            onClick={onProximo}
          >
            Próximo
          </Botao>
        </div>
      </Content>
    </Container>
  );
}

export default withRouter(AdicionarDoadoraInicio);
