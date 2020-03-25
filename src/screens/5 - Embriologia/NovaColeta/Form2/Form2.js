import React from 'react';

import { Container } from './styles';
import { Status } from '~/screens/5 - Embriologia/NovaColeta/styles';
import StatusInput from '~/components/StatusInput';
import Botao from '~/components/Botao';

function Form2({ onPrev }) {
  return (
    <Container>
      <StatusInput
        l="L1"
        ovulos={7}
        palhetas={2}
        onOvulosChange={() => {}}
        onPalhetasChange={() => {}}
      />
      <StatusInput
        l="L2"
        ovulos={7}
        palhetas={2}
        onOvulosChange={() => {}}
        onPalhetasChange={() => {}}
      />
      <StatusInput
        l="L3"
        ovulos={7}
        palhetas={2}
        onOvulosChange={() => {}}
        onPalhetasChange={() => {}}
      />
      <StatusInput
        l="L4"
        ovulos={7}
        palhetas={2}
        onOvulosChange={() => {}}
        onPalhetasChange={() => {}}
      />
      <div className="separator" />
      <div className="controller">
        <Botao startIcon="arrow-left" color="error" onClick={onPrev}>Anterior</Botao>
        <Botao endIcon="check">Concluir</Botao>
      </div>
    </Container>
  );
}

export default Form2;
