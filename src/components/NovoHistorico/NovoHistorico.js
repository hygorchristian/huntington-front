import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '~/services/api';

import {
 Container, Content, Header, Main 
} from './styles';
import Voltar from '../Voltar/Voltar';
import Botao from '~/components/Botao';

import tabsConsulta from './tabsConsulta';
import tabsPrimeiraConsulta from './tabsPrimeiraConsulta';
import { showErrorMessage } from '~/utils/notistack';
import Resumo from '~/components/Resumo';

function NovoHistorico() {
  const { id, doadora } = useParams();
  const [tabs, setTabs] = useState(null);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    async function checkDoadoraHasConsultation() {
      try {
        const doadoraResponse = await Api.getDoadora(doadora);
        const hasConsultation = doadoraResponse.data.consultations.length > 0;
        if (hasConsultation) {
          setTabs(tabsConsulta);
          setSelected(tabsConsulta[0]);
        } else {
          setTabs(tabsPrimeiraConsulta);
          setSelected(tabsPrimeiraConsulta[0]);
        }

        setDonor(doadoraResponse.data);
      } catch (e) {
        setError('Houve um erro. Atualize a página');
      }
    }

    checkDoadoraHasConsultation();
  }, []);

  useEffect(() => {
    if (error) {
      showErrorMessage(error);
    }
  }, [error]);

  return (
    <Container>
      <Main>
        <Voltar
          route={`/doadora/pre-cadastros/${id}/${doadora}?tab=historico`}
          label={donor && `Histórico | ${donor.name}`}
        />
        <Header>
          <h1>Novo Histórico</h1>
        </Header>

        {
          tabs && (
            <Content>
              <div className="buttons-top">
                {
                  tabs.map((tab) => (
                    <Botao
                      key={tab.id}
                      style={{ marginRight: 10 }}
                      color={(selected && tab.label === selected.label) ? 'primary' : ''}
                      onClick={() => setSelected(tab)}
                    >
                      {tab.label}
                    </Botao>
                  ))
                }
              </div>
              <div className="main">
                {selected && selected.component}
              </div>
            </Content>
          )
        }
      </Main>
      <Resumo doadora={donor} />
    </Container>
  );
}

export default NovoHistorico;
