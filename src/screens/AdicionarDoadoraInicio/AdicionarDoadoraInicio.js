import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import InputLabel from '../../components/InputLabel';
import OptionsLabel from '../../components/OptionsLabel';

import {
  Container, Header, Voltar, Content
} from './styles';

function AdicionarDoadoraInicio({ history, onProximo }) {
  const [estadoCivil, setEstadoCivil] = useState(null);
  const [etnia, setEtnia] = useState(null);

  console.tron.log(onProximo);

  const navigate = () => {
    history.push('/pre-cadastros/1');
  };

  return (
    <Container>
      <Voltar onClick={navigate}>
        <FiChevronLeft />
        <h3>Mutirão dia da saúde</h3>
      </Voltar>
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
