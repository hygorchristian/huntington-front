import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';

import Api from '~/services/api';
import { Container } from './styles';
import AdicionarRow from '~/components/AdicionarRow';
import ExameStatus from '~/components/ExameStatus';
import ExameContext from '~/contexts/ExameContext';

import { formatarDiaMesAno } from '~/utils/data';
import { showErrorMessage } from '~/utils/notistack';
import {
 groupExams, populateInitialExams, getExamName, populateProgrammedExams
} from '~/utils/exames';


function DoadoraExames({ history }) {
  const { id, doadora } = useParams();
  const [initialExams, setInitialExams] = useState([]);
  const [programmedExams, setProgrammedExams] = useState([]);
  const [groups, setGroups] = useState([]);

  const adicionarColeta = () => {
    history.push(`/doadora/listagem/${doadora}/exames/nova-coleta`);
  };

  const adicionarColetaProgramada = () => {
    history.push(`/doadora/listagem/${doadora}/exames/nova-coleta-programada`);
  };

  const getExames = async () => {
    const response = await Api.getDoadora(doadora).catch((error) => {
      showErrorMessage('Erro ao buscar exames');
    });

    const { exams } = response.data;

    setInitialExams(populateInitialExams(exams));
    setProgrammedExams(populateProgrammedExams(exams));
    setGroups(groupExams(exams));
  };

  useEffect(() => {
    getExames();
  }, []);

  return (
    <Container>
      <div className="header">
        <h2>EXAMES INICIAIS</h2>
        <div className="line" />
      </div>
      <div className="exames-iniciais">
        <ExameContext.Provider value={{ getExames }}>
          {Object.keys(initialExams).map((key) => (
            <ExameStatus key={key} id={key} exam={initialExams[key]} />
          ))}
        </ExameContext.Provider>
      </div>
      <AdicionarRow onClick={adicionarColeta} label="Adicionar coleta" />
      <div className="header">
        <h2>EXAMES PROGRAMADA</h2>
        <div className="line" />
      </div>
      <div className="exames-iniciais">
        <ExameContext.Provider value={{ getExames }}>
          {Object.keys(programmedExams).map((key) => (
            <ExameStatus key={key} id={key} exam={programmedExams[key]} />
          ))}
        </ExameContext.Provider>
      </div>
      <AdicionarRow onClick={adicionarColetaProgramada} label="Adicionar coleta" />
      { Object.keys(groups).map((key) => (
        <fieldset key={key}>
          <legend>
            <FiCalendar />
            <span>{formatarDiaMesAno(key)}</span>
          </legend>
          <div className="data">
            {
              groups[key].map((exame) => (
                <div className="col">
                  <label>{getExamName(exame.name)}</label>
                  <span>{exame.result || '-'}</span>
                </div>
              ))
            }
            {/* <div className="inserir-resultados"> */}
            {/*  <span>Inserir resultados</span> */}
            {/* </div> */}
          </div>
        </fieldset>
      ))}

    </Container>
  );
}

export default withRouter(DoadoraExames);
