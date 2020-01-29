import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
 FiCalendar, FiUser, FiCheckCircle, FiXCircle
} from 'react-icons/fi';

import AdicionarRow from '~/components/AdicionarRow';
import { showErrorMessage } from '~/utils/notistack';
import { Loading } from '~/screens/Login/styles';
import Api from '~/services/api';

import { Container } from './styles';
import { ERROR, SUCCESS } from '~/utils/colors';

function DoadoraUltrassons() {
  const history = useHistory();
  const { id, doadora } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const preencher = () => {
    history.push(`/doadora/pre-cadastros/${id}/${doadora}/adicionar-ultrassom`);
  };

  const fetchUltrassons = async () => {
    const response = await Api.getDoadoraUltrassound(doadora).catch((err) => {
      showErrorMessage('Erro ao carregar ultrassons. Tente novamente');
    });

    const ultrasounds = response.data;
    const filtered = ultrasounds.filter((item) => item.pre_register);
    const ultra = filtered.length > 0 ? filtered[0] : null;
    setData(ultra);
    setLoading(false);
  };

  useEffect(() => {
    fetchUltrassons();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {
        data ? (
          <fieldset>
            <legend>
              <FiCalendar />
              <span>21/05/2019</span>
            </legend>
            <div className="info">
              <div className="item">
                <FiUser />
                <span>{data.by.email}</span>
              </div>
              <div className="item">
                <span>Contagem de Folículos</span>
                <span className="number">{data.follicles}</span>
              </div>
              <div className="item">
                <span>Doadora apta?</span>
                {
                  data.able_to_donate ? (
                    <FiCheckCircle color={SUCCESS} />
                  ) : (
                    <FiXCircle color={ERROR} />
                  )
                }
              </div>
            </div>
            <div className="conduta">
              <h4>Conduta Médica</h4>
              <p>{data.conduta_medica}</p>
            </div>
          </fieldset>
        ) : (
          <AdicionarRow onClick={preencher} label="Preencher" />
        )
      }
    </Container>
);
}

export default DoadoraUltrassons;
