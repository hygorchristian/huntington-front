import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';

import Api from '~/services/api';
import { Container } from './styles';
import AdicionarRow from '~/components/AdicionarRow';
import { populateInitialExams } from './utils';
import ExameStatus from '~/components/ExameStatus';

// const ex = {
//   aborh: {
//     history: [
//       '5e28ee322377800017e9d0ac'
//     ],
//     _id: '5e28ee322377800017e9d0ab',
//     name: 'aborh',
//     collect_date: '2020-01-23T00:51:41.478Z',
//     expected_result_date: '2020-01-19T00:52:01.989Z',
//     createdAt: '2020-01-23T00:52:02.117Z',
//     updatedAt: '2020-01-23T00:52:02.357Z',
//     __v: 0,
//     donor: '5e0e351a4e1cd9001772cd18',
//     id: '5e28ee322377800017e9d0ab'
//   },
//   sorologias: {
//     history: [
//       '5e28b6f0ba03c6001721dede'
//     ],
//     _id: '5e28b6f0ba03c6001721dedd',
//     name: 'sorologias',
//     collect_date: '2020-01-22T20:56:06.433Z',
//     expected_result_date: '2020-01-23T20:56:16.302Z',
//     createdAt: '2020-01-22T20:56:16.375Z',
//     updatedAt: '2020-01-22T20:56:17.032Z',
//     result: 'sjjjss',
//     is_result_ok: true,
//     __v: 0,
//     donor: '5e0e351a4e1cd9001772cd18',
//     id: '5e28b6f0ba03c6001721dedd'
//   },
//   cariotipo: {
//     history: [
//       '5e28b6efba03c6001721ded8'
//     ],
//     _id: '5e28b6efba03c6001721ded7',
//     name: 'cariotipo',
//     collect_date: '2020-01-22T20:56:06.433Z',
//     expected_result_date: '2020-02-11T20:56:15.020Z',
//     createdAt: '2020-01-22T20:56:15.069Z',
//     updatedAt: '2020-01-22T20:56:15.205Z',
//     result: 'sjjjss',
//     is_result_ok: false,
//     __v: 0,
//     donor: '5e0e351a4e1cd9001772cd18',
//     id: '5e28b6efba03c6001721ded7'
//   },
//   chlamidia: {
//     history: [
//       '5e28b6efba03c6001721deda'
//     ],
//     _id: '5e28b6efba03c6001721ded9',
//     name: 'chlamidia',
//     collect_date: '2020-01-22T20:56:06.433Z',
//     expected_result_date: '2020-01-27T20:56:15.324Z',
//     createdAt: '2020-01-22T20:56:15.383Z',
//     updatedAt: '2020-01-22T20:56:15.484Z',
//     __v: 0,
//     donor: '5e0e351a4e1cd9001772cd18',
//     id: '5e28b6efba03c6001721ded9'
//   },
//   citologia: {
//     history: [
//       '5e28b6f0ba03c6001721dedc'
//     ],
//     _id: '5e28b6f0ba03c6001721dedb',
//     name: 'citologia',
//     collect_date: '2020-01-22T20:56:06.433Z',
//     expected_result_date: '2020-02-01T20:56:16.033Z',
//     createdAt: '2020-01-22T20:56:16.067Z',
//     updatedAt: '2020-01-22T20:56:16.160Z',
//     __v: 0,
//     donor: '5e0e351a4e1cd9001772cd18',
//     id: '5e28b6f0ba03c6001721dedb'
//   },
//   cgt: null,
//   dna: null
// };

const ex2 = {
  aborh: {
    history: [
      '5e28ee322377800017e9d0ac'
    ],
    _id: '5e28ee322377800017e9d0ab',
    name: 'aborh',
    collect_date: '2020-01-23T00:51:41.478Z',
    expected_result_date: '2020-01-19T00:52:01.989Z',
    createdAt: '2020-01-23T00:52:02.117Z',
    updatedAt: '2020-01-23T00:52:02.357Z',
    __v: 0,
    donor: '5e0e351a4e1cd9001772cd18',
    id: '5e28ee322377800017e9d0ab'
  },
  sorologias: {
    history: [
      '5e28b6f0ba03c6001721dede'
    ],
    _id: '5e28b6f0ba03c6001721dedd',
    name: 'sorologias',
    collect_date: '2020-01-22T20:56:06.433Z',
    expected_result_date: '2020-01-10T20:56:16.302Z',
    createdAt: '2020-01-22T20:56:16.375Z',
    updatedAt: '2020-01-22T20:56:17.032Z',
    __v: 0,
    donor: '5e0e351a4e1cd9001772cd18',
    id: '5e28b6f0ba03c6001721dedd'
  },
  cariotipo: {
    history: [
      '5e28b6efba03c6001721ded8'
    ],
    _id: '5e28b6efba03c6001721ded7',
    name: 'cariotipo',
    collect_date: '2020-01-22T20:56:06.433Z',
    createdAt: '2020-01-22T20:56:15.069Z',
    updatedAt: '2020-01-22T20:56:15.205Z',
    expected_result_date: '2020-01-19T00:52:01.989Z',
    __v: 0,
    donor: '5e0e351a4e1cd9001772cd18',
    id: '5e28b6efba03c6001721ded7'
  },
  chlamidia: {
    history: [
      '5e28b6efba03c6001721deda'
    ],
    _id: '5e28b6efba03c6001721ded9',
    name: 'chlamidia',
    collect_date: '2020-01-22T20:56:06.433Z',
    expected_result_date: '2020-01-19T00:52:01.989Z',
    createdAt: '2020-01-22T20:56:15.383Z',
    updatedAt: '2020-01-22T20:56:15.484Z',
    __v: 0,
    donor: '5e0e351a4e1cd9001772cd18',
    id: '5e28b6efba03c6001721ded9'
  },
  citologia: {
    history: [
      '5e28b6f0ba03c6001721dedc'
    ],
    _id: '5e28b6f0ba03c6001721dedb',
    name: 'citologia',
    collect_date: '2020-01-22T20:56:06.433Z',
    expected_result_date: '2020-01-19T00:52:01.989Z',
    createdAt: '2020-01-22T20:56:16.067Z',
    updatedAt: '2020-01-22T20:56:16.160Z',
    __v: 0,
    donor: '5e0e351a4e1cd9001772cd18',
    id: '5e28b6f0ba03c6001721dedb'
  },
  cgt: {
    history: [
      '5e28b6f0ba03c6001721dedc'
    ],
    _id: '5e28b6f0ba03c6001721dedb',
    name: 'cgt',
    collect_date: '2020-01-22T20:56:06.433Z',
    expected_result_date: '2020-01-19T00:52:01.989Z',
    createdAt: '2020-01-22T20:56:16.067Z',
    updatedAt: '2020-01-22T20:56:16.160Z',
    __v: 0,
    donor: '5e0e351a4e1cd9001772cd18',
    id: '5e28b6f0ba03c6001721dedb'
  },
  dna: null
};

function DoadoraExames({ history }) {
  const { id, doadora } = useParams();
  const [data, setData] = useState();
  const [initialExams, setInitialExams] = useState(ex2);

  const adicionarColeta = () => {
    history.push(`/doadora/pre-cadastros/${id}/${doadora}/exames/nova-coleta`);
  };

  const inserirResultado = () => {
    history.push('/doadora/detalhes/1/exames/resultado');
  };

  // todo: (hygor) load all exams

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await Api.getDoadora(doadora).catch((error) => {
  //       console.tron.error(error);
  //     });
  //
  //     const { exams } = response.data;
  //
  //     const initial_exams_temp = populateInitialExams(exams);
  //     setInitialExams(initial_exams_temp);
  //
  //     console.tron.log({ initial_exams_temp });
  //   }
  //
  //   fetchData();
  // }, []);

  return (
    <Container>
      <div className="header">
        <h2>EXAMES INICIAIS</h2>
        <div className="line" />
      </div>
      <div className="exames-iniciais">
        {
        Object.keys(initialExams).map((key) => (
          <ExameStatus key={key} id={key} exam={initialExams[key]} />
        ))
      }
      </div>
      <AdicionarRow onClick={adicionarColeta} label="Adicionar coleta" />
      <fieldset onClick={inserirResultado}>
        <legend>
          <FiCalendar />
          <span>28/04/2019 | Mutirão Dia da Saúde</span>
        </legend>
        <div className="data">
          <div className="col">
            <label>ABO/RH</label>
            <span>O+</span>
          </div>
          <div className="col">
            <label>Sorologias</label>
            <span>Positivo | HIV</span>
          </div>
          <div className="col">
            <label>Cariótipo</label>
            <span>-</span>
          </div>
          <div className="col">
            <label>Chlamidia/Neisseria </label>
            <span>-</span>
          </div>

          <div className="inserir-resultados">
            <span>Inserir resultados</span>
          </div>
        </div>
      </fieldset>
    </Container>
);
}

export default withRouter(DoadoraExames);
