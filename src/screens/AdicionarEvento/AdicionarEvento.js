import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { withSnackbar } from 'notistack';
import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import { novoEventoSchema } from './validators';
import MuiInput from '~/components/MuiInput';
import MuiDatePicker from '~/components/MuiDatePicker';
import Loading from '~/components/Loading';
import Botao from '~/components/Botao';
import { NovoEventoActions } from '~/store/ducks/doadora/novoEvento';

function AdicionarEvento({ history, enqueueSnackbar }) {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.doadora.novoEvento);

  const cancelar = () => {
    history.push('/doadora/pre-cadastros');
  };

  const onSubmit = (values) => {
    dispatch(NovoEventoActions.novoEventoSaveRequest(values));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      date: new Date(),
      address: {
        address: ''
      },
    },
    onSubmit,
    validationSchema: novoEventoSchema
  });

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant: 'success' });
      formik.resetForm(formik.initialValues);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
    }
  }, [error]);

  return (
    <Container>
      <Voltar label="Pré Cadastros" route="/doadora/pre-cadastros" />
      <Header>
        <h1>Novo evento</h1>
      </Header>
      <Content>
        <form onSubmit={formik.handleSubmit}>
          <MuiInput
            name="name"
            label="Nome"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
            helperText={formik.errors.name}
          />
          <MuiDatePicker
            name="date"
            label="Data"
            value={formik.values.date}
            onChange={(e) => {
              formik.setFieldValue('date', e);
            }}
          />
          <MuiInput
            name="address.address"
            label="Local"
            type="text"
            value={formik.values.address.address}
            onChange={formik.handleChange}
            error={formik.errors.address && formik.errors.address.address}
            helperText={formik.errors.address && formik.errors.address.address}
          />
          {loading && <Loading />}
        </form>
        <div className="buttons">
          <Botao endIcon="close" color="" onClick={cancelar}>Cancelar</Botao>
          <Botao onClick={formik.submitForm} endIcon="check">Salvar</Botao>
        </div>
      </Content>
    </Container>
  );
}

export default withSnackbar(AdicionarEvento);
