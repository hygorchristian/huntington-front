import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { LoginSchema } from './validators';
import jwtService from '~/services/jwtService';

import {
 Container, Content, Form, Loading
} from './styles';
import MuiField from '~/components/MuiField';
import { AuthActions } from '~/store/ducks/auth';
import { showErrorMessage } from '~/utils/notistack';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);

  const onSubmit = async (values) => {
    try {
      const response = await jwtService.login(values.identifier, values.password);
      dispatch(AuthActions.authLoadSuccess(response));
    } catch (e) {
      showErrorMessage('Email ou senha inválidos');
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
              <Button
                style={{ marginTop: 20 }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Entrar
              </Button>
            </Form>
          )}
        </Formik>
        {/* <a>Não possuo cadastro</a> */}
      </Content>
    </Container>
);
}

export default Login;
