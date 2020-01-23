import React from 'react';
import { isAfter, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  FiCheckCircle, FiClock, FiAlertCircle, FiPlusCircle, FiXCircle
} from 'react-icons/fi';

import { Container } from './styles';

function ExamName({ id }) {
  switch (id) {
    case 'aborh':
      return <label>ABO/RH</label>;
    case 'sorologias':
      return <label>Sorologias</label>;
    case 'cariotipo':
      return <label>Cariótipo</label>;
    case 'chlamidia':
      return <label>Chlamidia/Neisseria</label>;
    case 'citologia':
      return <label>Citologia Oncótica</label>;
    case 'cgt':
      return <label>CGT</label>;
    case 'dna':
      return <label>Cartão DNA</label>;
    default:
      return null;
  }
}

function ExamIcon({ exam }) {
  if (exam) {
    const is_after = isAfter(new Date(exam.expected_result_date), new Date());
    const has_result = !!exam.result;

    if (is_after && !has_result) {
      return <FiClock size={20} color="#FFD447" />;
    }

    if (has_result) {
      if (exam.is_result_ok) {
        return <FiCheckCircle size={20} color="#42D16D" />;
      }
      return <FiAlertCircle size={20} color="#FF0101" />;
    }
    return <FiPlusCircle size={20} color="#42D16D" />;
  }

  return <FiXCircle size={20} color="#8D8D8D" />;
}

function ExamStatusLabel({ exam }) {
  if (exam) {
    const is_after = isAfter(new Date(exam.expected_result_date), new Date());
    const has_result = !!exam.result;

    if (is_after && !has_result) {
      const formatted = formatDistance(new Date(exam.expected_result_date), new Date(), {
        addSuffix: true,
        locale: ptBR,
      });

      const strFormatted = formatted[0].toUpperCase()
        + formatted.slice(1);

      return <span>{strFormatted}</span>;
    }


    if (has_result) {
      return false;
    }
      return <a>Resultado disponível</a>;
  }

  return <span>Colher</span>;
}

function ExameStatus({ id, exam }) {
  return (
    <Container>
      <div className="col">
        <div className="title">
          <ExamIcon exam={exam} />
          <ExamName id={id} />
        </div>
        <ExamStatusLabel exam={exam} />
      </div>

      {/* <div className="col"> */}
      {/*  <div className="title"> */}
      {/*    <FiAlertCircle size={15} color="#FF0404" /> */}
      {/*    <label>Sorologias</label> */}
      {/*  </div> */}
      {/* </div> */}
      {/* <div className="col"> */}
      {/*  <div className="title"> */}
      {/*    <FiClock size={15} color="#FFD447" /> */}
      {/*    <label>Cariótipo</label> */}
      {/*  </div> */}
      {/*  <span>Em 2 dias</span> */}
      {/* </div> */}
      {/* <div className="col"> */}
      {/*  <div className="title"> */}
      {/*    <FiPlusCircle size={15} color="#42D16D" /> */}
      {/*    <label>Chlamidia/Neisseria</label> */}
      {/*  </div> */}
      {/*  <a>Resultado disponível</a> */}
      {/* </div> */}
      {/* <div className="col"> */}
      {/*  <div className="title"> */}
      {/*    <FiXCircle size={15} color="#8D8D8D" /> */}
      {/*    <label>Citologia Oncótica</label> */}
      {/*  </div> */}
      {/*  <span>Colher</span> */}
      {/* </div> */}
      {/* <div className="col"> */}
      {/*  <div className="title"> */}
      {/*    <FiXCircle size={15} color="#8D8D8D" /> */}
      {/*    <label>CGT</label> */}
      {/*  </div> */}
      {/*  <span>Colher</span> */}
      {/* </div> */}
      {/* <div className="col"> */}
      {/*  <div className="title"> */}
      {/*    <FiXCircle size={15} color="#8D8D8D" /> */}
      {/*    <label>Cartão DNA</label> */}
      {/*  </div> */}
      {/*  <span>Colher</span> */}
      {/* </div> */}
    </Container>
);
}

export default ExameStatus;
