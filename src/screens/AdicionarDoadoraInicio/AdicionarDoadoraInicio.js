import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import InputLabel from '~/components/InputLabel';
import OptionsLabel from '~/components/OptionsLabel';

import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';

function AdicionarDoadoraInicio({ onProximo }) {
  const [estadoCivil, setEstadoCivil] = useState(null);
  const [etnia, setEtnia] = useState(null);

  return (
    <Container>
      <Voltar label="Mutirão dia da saúde" route="/doadora/pre-cadastros/1" />
      <Header>
        <h1>Pré-cadastro</h1>
        <span>(Recepção)</span>
      </Header>
      <Content>
        <form>
          <InputLabel
            label="Nome"
            type="text"
            width={400}
          />
          <InputLabel
            label="Data de Nascimento"
            type="date"
            width={300}
          />
          <OptionsLabel
            label="Estado Civil"
            data={[
              'Casada',
              'Solteira',
              'Divorciada',
              'Viúva'
            ]}
            value={estadoCivil}
            onSelect={(value) => setEstadoCivil(value)}
          />
          <OptionsLabel
            label="Etnia"
            data={[
              'Branca',
              'Loira',
              'Parda',
              'Negra',
              'Oriental',
              'Outra',
            ]}
            value={etnia}
            onSelect={(value) => setEtnia(value)}
          />
        </form>
        <div className="buttons">
          <button onClick={onProximo} className="light">Próximo</button>
        </div>
      </Content>
    </Container>
  );
}

export default withRouter(AdicionarDoadoraInicio);
