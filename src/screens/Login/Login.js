import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';
import { AuthActions } from '../../store/ducks/auth';

import {
 Container, Image, Form
} from './styles';

function Login() {
  const dispatch = useDispatch();

  const [etapa, setEtapa] = useState(1);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const isAuth = useSelector((state) => state.Auth.isAuth);

  const proximo = () => {
    setEtapa(2);
  };
  const login = () => {
    dispatch(AuthActions.authLoadSuccess('token'));
  };

  if (isAuth) return <Redirect to="/" />;

  return (
    <Container>
      <Image src="https://ak2.picdn.net/shutterstock/videos/13039982/thumb/4.jpg" />
      <Form>
        <img src="https://ihera.com.br/site/assets/files/1100/logo_huntington.jpg" alt="logo" />
        {
          etapa === 1 ? (
            <>
              <h1>Preencha seu e-mail</h1>
              <input placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="button" onClick={proximo}>Próximo</button>
            </>
          ) : (
            <>
              <h1>Informe sua senha</h1>
              <input type="email" placeholder="Digite aqui" value={email} />
              <input type="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} />
              <button type="button" onClick={login}>Entrar</button>
            </>
          )
        }
      </Form>
    </Container>
);
}

export default Login;
