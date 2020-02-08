import React from 'react';

import { ReportProblem } from '@material-ui/icons';
import { Container } from './styles';
import { formatarDiaMesAno } from '~/utils/data';

function Warning({ data }) {
  console.tron.log({ data });

  return (
    <Container>
      <img src="/img/logo-dark.svg" />
      <div className="info">
        <ReportProblem style={{ color: 'rgba(209,85,85,0.5)', fontSize: 40 }} />
        <h2>Questionário expirado!</h2>
        { data && (
        <h4>
          {`O questionário expirou em ${formatarDiaMesAno(data.data.expire_date)}`}
        </h4>
        )}
        <p className="disclaimer">Entre em contato com a equipe da Huntington para receber o questionário atualizado.</p>
      </div>
    </Container>
  );
}

export default Warning;
