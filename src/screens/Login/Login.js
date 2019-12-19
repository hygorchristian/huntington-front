import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginSchema } from './validators';
import jwtService from '~/services/jwtService';

import {
 Container, Content, Form, Loading
} from './styles';
import MuiField from '~/components/MuiField';
import { AuthActions } from '~/store/ducks/auth';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    setError(null);
    try {
      const response = await jwtService.login(values.identifier, values.password);
      dispatch(AuthActions.authLoadSuccess(response));
    } catch (e) {
      setError(e);
    }
  };

  if (isAuth) return <Redirect to="/" />;

  return (
    <Container>
      <Content>
        <img src="/img/logo-dark.svg" />
        <h2>Bem-vindo (a)</h2>
        <span>Entre com seu e-mail e senha</span>

        <Formik
          initialValues={{ identifier: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
            >
              <MuiField
                name="identifier"
                label="Email ou Identificador"
                type="text"
              />
              <MuiField
                name="password"
                label="Senha"
                type="password"
              />
              {isSubmitting && <Loading size={20} />}
              <button type="submit">Entrar</button>
              <span>{error}</span>
            </Form>
          )}
        </Formik>
        {/* <a>Não possuo cadastro</a> */}
      </Content>
    </Container>
);
}

export default Login;
