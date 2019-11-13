import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';
import { AuthActions } from '../../store/ducks/auth';

import {
 Container, Image, Form, Help, HelpContainer, Fechar
} from './styles';

function Login() {
  const dispatch = useDispatch();

  const [showing, setShowing] = useState(false);
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
      <Image src="/img/bg.png" />
      <Form>
        <img src="/icons/logo.svg" alt="logo" />
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

        <Help onClick={() => setShowing(true)}>
          <FiHelpCircle size="20px" color="#8B8D8E" />
        </Help>
        <HelpContainer showing={showing}>
          <Fechar onClick={() => setShowing(false)}>
            <FiChevronDown color="#ffffff" />
          </Fechar>
          <h2>Essa é uma plataforma de relacionamento entre os empresários do segmento ótico e a Carl Zeiss</h2>
          <p>Caso seja da equipe Carl Zeiss e não possua o acesso, entre em contato com nosso Suporte e solicite a criação do seu usuário.</p>
          <span>0800 000 000</span>
        </HelpContainer>
      </Form>
    </Container>
);
}

export default Login;
