import React from 'react';
import { FiCalendar, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

import Voltar from '../../components/Voltar';
import { Container, Content, Header } from './styles';
import ItemResultado from '../../components/ItemResultado';

function ResultadoExame() {
  return (
    <Container>
      <Voltar
        route="/doadora/1"
        label="Exames | Maria Carolina do Rosário"
      />
      <Header>
        <h1>Resultado do Exame</h1>
      </Header>
      <Content>
        <div className="data">
          <FiCalendar color="#BCBCBC" />
          <h2>28/04/2019 | Mutirão Dia da Saúde</h2>
        </div>
        <div className="resultados">
          <ItemResultado
            label="ABO/RH"
            value="O+"
            icon={() => <FiCheckCircle color="#42D16D" />}
          />
          <ItemResultado
            label="Sorologia"
            value="Positivo"
            icon={() => <FiAlertCircle color="#FF0404" />}
            observacao="HIV"
          />
          <ItemResultado
            label="Cariótipo"
            value="Normal"
            icon={() => <FiCheckCircle color="#42D16D" />}
          />
          <ItemResultado
            label="Chlamidia/Neisseria"
            value="Positivo"
            icon={() => <FiAlertCircle color="#FF0404" />}
          />
          <ItemResultado
            label="Citologia"
            value=""
            observacao="Resultado liberado!"
          />
          <ItemResultado
            label="CGT"
            value=""
          />
          <ItemResultado
            label="Cartão DNA"
            value=""
          />
        </div>
        <div className="separator" />
        <div className="controller">
          <button className="btn">Salvar</button>
        </div>
      </Content>
    </Container>
  );
}

export default ResultadoExame;
