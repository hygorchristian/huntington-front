import React from 'react';
import { withRouter } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';

import { Container } from './styles';
import AdicionarRow from '~/components/AdicionarRow';
import LabelValue from '~/components/LabelValue';

function Historico({ history }) {
  return (
    <Container>
      <AdicionarRow onClick={() => history.push('/receptora/lista-espera/1/adicionar-historico')} />
      <fieldset>
        <legend>Avaliação OD</legend>
        <div className="info">
          <div className="data">
            <FiCalendar size={14} color="#BCBCBC" />
            <span>19/06/2019</span>
          </div>
          <LabelValue label="PIN OD">
            <span>12345678</span>
          </LabelValue>
          <LabelValue label="Nome">
            <span>Andrea Galluzi</span>
          </LabelValue>
          <LabelValue label="Lote">
            <span>L3</span>
          </LabelValue>
          <LabelValue label="Status">
            <span>Recusada</span>
          </LabelValue>
        </div>
      </fieldset>
      <fieldset>
        <legend>Avaliação OD</legend>
        <div className="info">
          <div className="data">
            <FiCalendar size={14} color="#BCBCBC" />
            <span>19/06/2019</span>
          </div>
          <LabelValue label="PIN OD">
            <span>12345678</span>
          </LabelValue>
          <LabelValue label="Nome">
            <span>Fernanda Vieira</span>
          </LabelValue>
          <LabelValue label="Lote">
            <span>L3</span>
          </LabelValue>
          <LabelValue label="Status">
            <span>Em avaliação</span>
          </LabelValue>
        </div>
      </fieldset>
    </Container>
);
}

export default withRouter(Historico);
