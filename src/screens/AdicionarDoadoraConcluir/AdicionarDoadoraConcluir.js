import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { withSnackbar } from 'notistack';
import Voltar from '~/components/Voltar/Voltar';

import {
  Container, Header, Content, Main, Resumo
} from './styles';
import validationSchema from './validators';
import MuiInput from '~/components/MuiInput';
import Botao from '~/components/Botao';
import { formatIdade } from '~/utils/data';
import { NovaDoadoraActions } from '~/store/ducks/doadora/novaDoadora';
import Loading from '~/components/Loading';

function AdicionarDoadoraConcluir({ onVoltar, enqueueSnackbar }) {
  const {
 data, loading, message, error
} = useSelector((state) => state.doadora.novaDoadora);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant: 'success' });
    }
    if (error) {
      enqueueSnackbar(message, { variant: 'error' });
    }
  }, [message, error]);

  const onSubmit = (values) => {
    dispatch(NovaDoadoraActions.novaDoadoraSaveRequest(id, {
      ...values,
      ...data,
      etnia: data.etnia._id
    }));
  };

  const formik = useFormik({
    initialValues: {
      rg: '3.153.052',
      rg_expeditor: 'SSPDF',
      address: {
        address: 'Quadra 104',
        address_number: '1203',
        address_comp: 'Residencial Colina',
        cep: '71909-180'
      },
      celphone: '6199854665',
      phone: '6130536539',
      email: 'hygor.christian@gmail.com',
    },
    onSubmit,
    validationSchema
  });

  return (
    <Container>
      <Main>
        <Voltar label="Mutirão dia da saúde" route="/doadora/pre-cadastros/1" />
        <Header>
          <h1>Pré-cadastro</h1>
          <span>(Recepção)</span>
        </Header>
        <Content>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid">
              <MuiInput
                name="rg"
                label="RG nº"
                type="text"
                value={formik.values.rg}
                onChange={formik.handleChange}
                error={formik.errors.rg}
                helperText={formik.errors.rg}
              />
              <MuiInput
                name="rg_expeditor"
                label="Orgão expeditor"
                type="text"
                value={formik.values.rg_expeditor}
                onChange={formik.handleChange}
                error={formik.errors.rg_expeditor}
                helperText={formik.errors.rg_expeditor}
              />
            </div>
            <div className="line">
              <MuiInput
                name="address.address"
                label="Endereço"
                type="text"
                value={formik.values.address.address}
                onChange={formik.handleChange}
                error={formik.errors.address && formik.errors.address.address}
                helperText={formik.errors.address && formik.errors.address.address}
              />
              <MuiInput
                name="address.address_comp"
                label="Complemento"
                type="text"
                value={formik.values.address.address_comp}
                onChange={formik.handleChange}
                error={formik.errors.address && formik.errors.address.address_comp}
                helperText={formik.errors.address && formik.errors.address.address_comp}
              />
            </div>

            <div className="grid">
              <MuiInput
                name="address.address_number"
                label="Número"
                type="text"
                value={formik.values.address.address_number}
                onChange={formik.handleChange}
                error={formik.errors.address && formik.errors.address.address_number}
                helperText={formik.errors.address && formik.errors.address.address_number}
              />
              <MuiInput
                name="address.cep"
                label="CEP"
                type="text"
                value={formik.values.address.cep}
                onChange={formik.handleChange}
                mask="99.999-999"
                error={formik.errors.address && formik.errors.address.cep}
                helperText={formik.errors.address && formik.errors.address.cep}
              />
              <MuiInput
                name="celphone"
                label="Celular"
                type="text"
                value={formik.values.celphone}
                onChange={formik.handleChange}
                mask="(99) 9 9999-9999"
                error={formik.errors.celphone}
                helperText={formik.errors.celphone}
              />
              <MuiInput
                name="phone"
                label="Telefone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                mask="(99) 9999-9999"
                error={formik.errors.phone}
                helperText={formik.errors.phone}
              />
              <MuiInput
                name="email"
                label="E-mail"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                helperText={formik.errors.email}
              />
            </div>
            {loading && <Loading />}
          </form>
          <div className="buttons">
            <Botao startIcon="arrow-left" color="" onClick={onVoltar}>Voltar</Botao>
            <Botao endIcon="check" onClick={formik.submitForm}>Concluir</Botao>
          </div>
        </Content>
      </Main>
      <Resumo>
        <h2>Resumo</h2>
        <fieldset>
          <legend>Recepção</legend>
          <span>{data.name}</span>
          <span>{formatIdade(data.birth)}</span>
          <div className="info">
            <span>{data.marital_status}</span>
            <span>{data.etnia.name}</span>
          </div>
        </fieldset>
      </Resumo>
    </Container>
  );
}

export default withSnackbar(AdicionarDoadoraConcluir);
