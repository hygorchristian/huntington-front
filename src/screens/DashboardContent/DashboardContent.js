import React from 'react';

import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { AuthActions } from '~/store/ducks/auth';

function DashboardContent() {
  const dispatch = useDispatch();

  const click = (role) => {
    dispatch(AuthActions.setRole(role));
  };

  return (
    <Container>
      <p>Estes botões são para navegar entres os tipos de paineis, apenas para testes. A versão final não irá conter essa tela.</p>
      <button onClick={() => click('atendimento-doadora')}>Atendimento a Doadora</button>
      <button onClick={() => click('atendimento-receptora')}>Atendimento a Receptora</button>
      <button onClick={() => click('atendimento-financeiro')}>Atendimento Financeiro</button>
      <button onClick={() => click('controladoria')}>Controladoria</button>
      <button onClick={() => click('embriologia')}>Embriologia</button>
    </Container>
);
}

export default DashboardContent;
