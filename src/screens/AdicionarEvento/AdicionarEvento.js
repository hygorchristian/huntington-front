import React from 'react';
import OkIcon from '@material-ui/icons/Check';

import { useFormik } from 'formik';
import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import { AdicionarDoadoraSchema } from '~/screens/AdicionarDoadoraInicio/validators';
import MuiInput from '~/components/MuiInput';
import MuiDatePicker from '~/components/MuiDatePicker';
import Loading from '~/components/Loading';
import Botao from '~/components/Botao';

function AdicionarEvento({ history }) {
  const cancelar = () => {
    history.push('/doadora/pre-cadastros');
  };

  const onSubmit = (values) => {

  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      data: new Date(),
      local: '',
    },
    onSubmit,
    validationSchema: AdicionarDoadoraSchema
  });

  return (
    <Container>
      <Voltar label="Pré Cadastros" route="/doadora/pre-cadastros" />
      <Header>
        <h1>Novo evento</h1>
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
            name="data"
            label="Data"
            value={formik.values.data}
            onChange={(e) => {
              formik.setFieldValue('data', e);
            }}
          />
          <MuiInput
            name="local"
            label="Local"
            type="text"
            value={formik.values.local}
            onChange={formik.handleChange}
          />
          {formik.isSubmitting && <Loading size={20} />}
        </form>
        <div className="buttons">
          <Botao color="" onClick={cancelar}>Cancelar</Botao>
          <Botao onClick={formik.submitForm} endIcon={<OkIcon />}>Salvar</Botao>
        </div>
      </Content>
    </Container>
  );
}

export default AdicionarEvento;
