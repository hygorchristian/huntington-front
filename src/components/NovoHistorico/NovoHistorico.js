import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Api from '~/services/api';

import { Container, Content, Header } from './styles';
import Voltar from '../Voltar/Voltar';
import Botao from '~/components/Botao';

import tabsConsulta from './tabsConsulta';
import tabsPrimeiraConsulta from './tabsPrimeiraConsulta';

function NovoHistorico() {
  const { id, doadora } = useParams();
  const [tabs, setTabs] = useState(null);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function checkDoadoraHasConsultation() {
      try {
        const doadoraResponse = await Api.getDoadora(doadora);
        const hasConsultation = doadoraResponse.data.consultations.length > 0;
        if (!hasConsultation) {
          setTabs(tabsConsulta);
          setSelected(tabsConsulta[0]);
        } else {
          setTabs(tabsPrimeiraConsulta);
          setSelected(tabsPrimeiraConsulta[0]);
        }
      } catch (e) {
        setError('Houve um erro. Atualize a página');
      }
    }

    checkDoadoraHasConsultation();
  }, []);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
    }
  }, [error]);

  return (
    <Container>
      <Voltar label="Histórico | Maria Carolina do Rosário" route={`/doadora/pre-cadastros/${id}/${doadora}`} />
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
    </Container>
  );
}

export default NovoHistorico;
