import React, { useState } from 'react';
import { useFormik } from 'formik';
import Voltar from '~/components/Voltar';

import Form1 from '~/screens/5 - Embriologia/NovaColeta/Form1';
import Form2 from '~/screens/5 - Embriologia/NovaColeta/Form2';

import validationSchema from './validationSchema';
import initialValues from './initialValues';

import {
  Container, Content, Header
} from './styles';


function NovaColeta() {
  const [tela, setTela] = useState(1);

  const onSubmit = () => {};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <Container>
      <Voltar
        route="/embriologia/dashboard/coletas/1"
        label="Banco de Óvulos"
      />
      <Header>
        <h1>Nova Coleta</h1>
      </Header>
      <Content>
        {tela === 1 ? (
          <Form1 formik={formik} onNext={() => setTela(2)} />
        ) : (
          <Form2 formik={formik} onPrev={() => setTela(1)} />
        )}
      </Content>
    </Container>
  );
}

export default NovaColeta;
