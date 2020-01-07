import React from 'react';
import { useParams } from 'react-router-dom';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Container, Content, Header } from './styles';
import Voltar from '~/components/Voltar';
import MuiInput from '~/components/MuiInput';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';
import validationSchema from './validationSchema';
import initialValues from './initialValues';
import MuiBoolean from '~/components/MuiBoolean';
import { PreCadastroActions } from '~/store/ducks/doadora/preCadastro';

function PreencherUltrassom() {
  const { doadora } = useParams();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(PreCadastroActions.preCadastroUpdateRequest(doadora, { ultrassom: values }));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <Container>
      <Voltar
        route="/doadora/detalhes/1"
        label="Ultrassons | Maria Carolina do Rosário"
      />
      <Header>
        <h1>Ultrassom</h1>
      </Header>
      <Content>
        <MuiInput
          label="Contagem de folículos"
          type="number"
          name="follicles"
          onChange={formik.handleChange}
          value={formik.values.follicles}
          error={formik.errors.follicles}
          helperText={formik.errors.follicles}
        />
        <MuiBoolean
          label="Apta para doação?"
          name="able_to_donate"
          formik={formik}
        />
        <MuiTextarea
          label="Observação"
          placeholder="Escreva a observação"
          name="obs"
          onChange={formik.handleChange}
          value={formik.values.obs}
          error={formik.errors.obs}
          helperText={formik.errors.obs}
        />
        <div className="separator" />
        <div className="controller">
          <Botao endIcon="check" onClick={formik.submitForm}>Concluir</Botao>
        </div>
      </Content>
    </Container>
  );
}

export default PreencherUltrassom;
