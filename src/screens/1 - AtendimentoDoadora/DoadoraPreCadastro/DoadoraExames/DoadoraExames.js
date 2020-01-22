import React from 'react';
import {
 FiCalendar, FiCheckCircle, FiClock, FiAlertCircle, FiPlusCircle, FiXCircle
} from 'react-icons/fi';
import { withRouter, useParams } from 'react-router-dom';

import { Container } from './styles';
import AdicionarRow from '~/components/AdicionarRow';

function DoadoraExames({ history }) {
  const { id, doadora } = useParams();

  const adicionarColeta = () => {
    history.push('/doadora/detalhes/1/exames/nova-coleta');
    history.push(`/doadora/pre-cadastros/${id}/${doadora}/exames/nova-coleta`);
  };

  const inserirResultado = () => {
    history.push('/doadora/detalhes/1/exames/resultado');
  };

  // todo: (hygor) load all exams

  return (
    <Container>
      <div className="header">
        <h2>EXAMES INICIAIS</h2>
        <div className="line" />
      </div>
      <div className="exames-iniciais">
        <div className="col">
          <div className="title">
            <FiCheckCircle size={15} color="#42D16D" />
            <label>ABO/RH</label>
          </div>
        </div>
        <div className="col">
          <div className="title">
            <FiAlertCircle size={15} color="#FF0404" />
            <label>Sorologias</label>
          </div>
        </div>
        <div className="col">
          <div className="title">
            <FiClock size={15} color="#FFD447" />
            <label>Cariótipo</label>
          </div>
          <span>Em 2 dias</span>
        </div>
        <div className="col">
          <div className="title">
            <FiPlusCircle size={15} color="#42D16D" />
            <label>Chlamidia/Neisseria</label>
          </div>
          <a>Resultado disponível</a>
        </div>
        <div className="col">
          <div className="title">
            <FiXCircle size={15} color="#8D8D8D" />
            <label>Citologia Oncótica</label>
          </div>
          <span>Colher</span>
        </div>
        <div className="col">
          <div className="title">
            <FiXCircle size={15} color="#8D8D8D" />
            <label>CGT</label>
          </div>
          <span>Colher</span>
        </div>
        <div className="col">
          <div className="title">
            <FiXCircle size={15} color="#8D8D8D" />
            <label>Cartão DNA</label>
          </div>
          <span>Colher</span>
        </div>
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
