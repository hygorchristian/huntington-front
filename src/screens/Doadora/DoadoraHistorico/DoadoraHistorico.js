import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import { useHistory, useParams } from 'react-router-dom';
import Api from '~/services/api';

import { Container } from './styles';
import ResultadoPrimeiraConsulta from '~/components/ResultadoPrimeiraConsulta';
import { showErrorMessage } from '~/utils/notistack';

function DoadoraHistorico() {
  const [data, setData] = useState(null);
  const { doadora } = useParams();
  const history = useHistory();

  const adicionarHistorico = () => {
    history.push('/doadora/detalhes/1/novo-registro');
  };

  useEffect(() => {
    Api.getDoadora(doadora).then((response) => {
      const consults = lodash.get(response, 'data.consultations', []);
      const consult = consults.length > 0 ? consults[0] : null;
      setData(consult);
    }).catch((err) => {
      showErrorMessage('Erro ao carregar dados');
    });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Container>
      {/* <div className="adicionar-historico"> */}
      {/*  <Botao startIcon="add" onClick={adicionarHistorico}>Adicionar</Botao> */}
      {/* </div> */}
      {/* <fieldset> */}
      {/*  <legend>DOADORA PROGRAMADA</legend> */}
      {/*  <div className="data"> */}
      {/*    <FiCalendar size={14} color="#BCBCBC" /> */}
      {/*    <span>19/04/2019</span> */}
      {/*  </div> */}
      {/*  <div className="row" style={{ marginTop: 10 }}> */}
      {/*    <div className="check-label"> */}
      {/*      <span>Ultrassom</span> */}
      {/*      <FiCheckCircle size={14} color="#42D16D" /> */}
      {/*    </div> */}
      {/*    <div className="check-label"> */}
      {/*      <span>Exames</span> */}
      {/*      <FiCheckCircle size={14} color="#42D16D" /> */}
      {/*    </div> */}
      {/*    <div className="check-label"> */}
      {/*      <span>Ultrassom</span> */}
      {/*      <FiCheckCircle size={14} color="#42D16D" /> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </fieldset> */}
      <ResultadoPrimeiraConsulta data={data} />
      {/* <fieldset style={{ marginBottom: 100 }}> */}
      {/*  <legend>cadastro | MUTIRÃO DIA DA SAÚDE</legend> */}
      {/*  <div className="data"> */}
      {/*    <FiCalendar size={14} color="#BCBCBC" /> */}
      {/*    <span>19/04/2019</span> */}
      {/*    <FiMapPin size={14} color="#BCBCBC" /> */}
      {/*    <span>Vila Mariana</span> */}
      {/*    <FiUser size={14} color="#BCBCBC" /> */}
      {/*    <span>Lorena Martins | Recepção</span> */}
      {/*  </div> */}
      {/* </fieldset> */}
    </Container>
);
}

export default DoadoraHistorico;
