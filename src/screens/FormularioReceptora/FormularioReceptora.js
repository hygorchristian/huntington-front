import React, { useState } from 'react';
import Termos from './Termos';
import Formulario from './Formulario';
import Confirmacao from './Confirmacao';

import {
  Container, Content
} from './styles';


function FormularioReceptora() {
  const [index, setIndex] = useState(1);

  const handleChangeIndex = (i) => {
    setIndex(i);
  };

  return (
    <Container>
      <Content index={index} onChangeIndex={handleChangeIndex}>
        <Termos index={0} onNext={() => setIndex(1)} />
        <Formulario index={1} />
        <Confirmacao index={2} />
      </Content>
    </Container>
  );
}

export default FormularioReceptora;
