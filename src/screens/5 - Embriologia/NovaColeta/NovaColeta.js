import React, { useState } from 'react';
import InputLabel from '~/components/InputLabel';
import Voltar from '~/components/Voltar';

import {
 Container, Content, Header, Status, Dados
} from './styles';
import StatusInput from '~/components/StatusInput';

function NovaColeta() {
  const [tela, setTela] = useState(1);

  return (
    <Container>
      <Voltar
        route="/embriologia/dashboard/coletas/1"
        label="Banco de Óvulos"
      />
      <Header>
        <h1>Nova Coleta</h1>
      </Header>
      <Content>
        {tela === 1 ? (
          <Dados>
            <form>
              <InputLabel
                width="100%"
                label="PIN Doadora"
              />
              <InputLabel
                label="Nome"
              />
              <InputLabel
                label="Data da Coleta"
                type="date"
              />
              <div />
              <InputLabel
                label="Quantidade total de óvulos"
                type="number"
              />
              <div className="row">
                sdsd
              </div>
              <InputLabel
                label="Método"
                type="number"
              />
              <InputLabel
                label="Tanque"
                type="number"
              />
            </form>
            <div className="separator" />
            <div className="controller">
              <button className="btn light" onClick={() => setTela(2)}>Próximo</button>
            </div>
          </Dados>
        ) : (
          <Status>
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
              <button className="btn light" onClick={() => setTela(1)}>Anterior</button>
              <button className="btn">Concluir</button>
            </div>
          </Status>
        )}


      </Content>
    </Container>
  );
}

export default NovaColeta;
