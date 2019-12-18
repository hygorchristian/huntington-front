import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthActions } from '~/store/ducks/auth';

import {
 Container, Content, Form, Field
} from './styles';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);

  const login = () => {
    dispatch(AuthActions.authLoadSuccess('token', 'atendimento-doadora'));
  };

  if (isAuth) return <Redirect to="/" />;

  const validator = () => {

  };
  const onSubmit = () => {

  };

  return (
    <Container>
      <Content>
        <img src="/img/logo-dark.svg" />
        <h2>Bem-vindo (a)</h2>
        <span>Entre com seu e-mail e senha</span>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validator}
          onSubmit={onSubmit}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form
                onSubmit={handleSubmit}
              >
                <Field
                  name="email"
                  label="Email"
                  type="email"
                />
                <Field
                  name="password"
                  label="Senha"
                  type="password"
                />
              </Form>
          )}
        </Formik>

        <button onClick={login}>Entrar</button>

        <a>Não possuo cadastro</a>
      </Content>
    </Container>
);
}

export default Login;
