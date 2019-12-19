import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginSchema } from './validators';

import {
 Container, Content, Form
} from './styles';
import MuiField from '~/components/MuiField';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);

  const onSubmit = () => {

  };

  if (isAuth) return <Redirect to="/" />;

  return (
    <Container>
      <Content>
        <img src="/img/logo-dark.svg" />
        <h2>Bem-vindo (a)</h2>
        <span>Entre com seu e-mail e senha</span>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
            >
              <MuiField
                name="email"
                label="Email"
                type="email"
              />
              <MuiField
                name="password"
                label="Senha"
                type="password"
              />
              <button type="submit">Entrar</button>
            </Form>
          )}
        </Formik>
        {/* <a>Não possuo cadastro</a> */}
      </Content>
    </Container>
);
}

export default Login;
