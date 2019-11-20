import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthActions } from '../../store/ducks/auth';

import {
 Container, Form
} from './styles';
import InputLabel from '../../components/InputLabel';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);

  const login = () => {
    dispatch(AuthActions.authLoadSuccess('token', 'atendimento-doadora'));
  };

  if (isAuth) return <Redirect to="/" />;

  return (
    <Container>
      <Form>
        <img src="/img/logo-dark.svg" />
        <h2>Bem-vindo (a)</h2>
        <span>Entre com seu e-mail e senha</span>

        <InputLabel
          label="E-mail"
          width={350}
        />
        <InputLabel
          label="Senha"
          width={350}
        />

        <button onClick={login}>Entrar</button>

        <a>Não possuo cadastro</a>
      </Form>
    </Container>
);
}

export default Login;
