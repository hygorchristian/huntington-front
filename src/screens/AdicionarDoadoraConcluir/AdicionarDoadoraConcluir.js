import React from 'react';
import { withRouter } from 'react-router-dom';
import PrevIcon from '@material-ui/icons/ArrowBack';
import OkIcon from '@material-ui/icons/Check';

import { useFormik } from 'formik';
import Voltar from '~/components/Voltar/Voltar';

import {
  Container, Header, Content, Main, Resumo
} from './styles';
import { AdicionarDoadoraSchema } from '~/screens/AdicionarDoadoraInicio/validators';
import MuiInput from '~/components/MuiInput';
import Botao from '~/components/Botao';

function AdicionarDoadoraConcluir({ onVoltar }) {
  const onSubmit = (values) => {

  };

  const formik = useFormik({
    initialValues: {
      rg: '',
      orgao: '',
      endereco: '',
      complemento: '',
      numero: '',
      cep: '',
      celular: '',
      telefone: '',
      email: '',
    },
    onSubmit,
    validationSchema: AdicionarDoadoraSchema
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
              />
              <MuiInput
                name="orgao"
                label="Orgão expeditor"
                type="text"
                value={formik.values.orgao}
                onChange={formik.handleChange}
              />
            </div>
            <div className="line">
              <MuiInput
                name="endereco"
                label="Endereço"
                type="text"
                value={formik.values.endereco}
                onChange={formik.handleChange}
              />
              <MuiInput
                name="complemento"
                label="Complemento"
                type="text"
                value={formik.values.complemento}
                onChange={formik.handleChange}
              />
            </div>

            <div className="grid">
              <MuiInput
                name="numero"
                label="Número"
                type="text"
                value={formik.values.numero}
                onChange={formik.handleChange}
              />
              <MuiInput
                name="cep"
                label="CEP"
                type="text"
                value={formik.values.cep}
                onChange={formik.handleChange}
                mask="99.999-999"
              />
              <MuiInput
                name="celular"
                label="Celular"
                type="text"
                value={formik.values.celular}
                onChange={formik.handleChange}
                mask="(99) 9 9999-9999"
              />
              <MuiInput
                name="telefone"
                label="Telefone"
                type="text"
                value={formik.values.telefone}
                onChange={formik.handleChange}
                mask="(99) 9999-9999"
              />
              <MuiInput
                name="email"
                label="E-mail"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
          </form>
          <div className="buttons">
            <Botao startIcon={<PrevIcon />} color="" onClick={onVoltar}>Voltar</Botao>
            <Botao endIcon={<OkIcon />}>Concluir</Botao>
          </div>
        </Content>
      </Main>
      <Resumo>
        <h2>Resumo</h2>
        <fieldset>
          <legend>Recepção</legend>
          <span>Maria Carolina do Rosário</span>
          <span>28 anos, 05 de maio de 1992</span>
          <div className="info">
            <span>Solteira</span>
            <span>Parda</span>
          </div>
        </fieldset>
      </Resumo>

    </Container>
  );
}

export default withRouter(AdicionarDoadoraConcluir);
