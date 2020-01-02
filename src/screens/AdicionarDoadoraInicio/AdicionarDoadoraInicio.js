import React from 'react';
import { withRouter } from 'react-router-dom';

import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';

import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiSelect from '~/components/MuiSelect';
import validationSchema from './validators';
import MuiInput from '~/components/MuiInput';
import Loading from '~/components/Loading';
import Botao from '~/components/Botao';
import { NovaDoadoraActions } from '~/store/ducks/doadora/novaDoadora';
import { formatIdade } from '~/utils/data';

function AdicionarDoadoraInicio({ onProximo }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.doadora.novaDoadora.data);

  const onSubmit = (values, formik) => {
    dispatch(NovaDoadoraActions.novaDoadoraSetData(values));
    onProximo();
  };

  const formik = useFormik({
    initialValues: {
      nome: data ? data.nome : '',
      nascimento: data ? data.nascimento : '',
      estadocivil: data ? data.estadocivil : '',
      etnia: data ? data.etnia : ''
    },
    onSubmit,
    validationSchema
  });

  console.tron.log(formatIdade(new Date(1995, 9, 6)));

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
            error={formik.errors.nome}
            helperText={formik.errors.nome}
          />
          <MuiDatePicker
            name="nascimento"
            label="Data de Nascimento"
            value={formik.values.nascimento}
            onChange={(e) => {
              formik.setFieldValue('nascimento', e);
            }}
            error={formik.errors.nascimento}
            helperText={formik.errors.nascimento}
          />
          <MuiSelect
            name="estadocivil"
            label="Estado Civil"
            value={formik.values.estadocivil}
            handleChange={(e) => {
              formik.setFieldValue('estadocivil', e.target.value);
            }}
            error={formik.errors.estadocivil}
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
            error={formik.errors.etnia}
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
            endIcon="arrow-right"
            onClick={formik.submitForm}
          >
            Próximo
          </Botao>
        </div>
      </Content>
    </Container>
  );
}

export default withRouter(AdicionarDoadoraInicio);
