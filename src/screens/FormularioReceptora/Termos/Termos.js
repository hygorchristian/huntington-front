import React, { useState } from 'react';

import { Container, Scroll, Thumb } from './styles';
import Botao from '~/components/Botao';
import { primary } from '~/styles/colors';

function Termos({ onNext }) {
  const [top, setTop] = useState(0);

  const handleUpdateScroll = ({ top }) => {
    setTop(top);
  };

  return (
    <Container>
      <img src="/img/logo-dark.svg" />
      <h2>Questionário</h2>
      <h4>Ovodoação/Embriodoação</h4>
      <div className="scroll">
        <Scroll
          handleUpdate={handleUpdateScroll}
          renderThumbVertical={(props) => <Thumb {...props} />}
        >
          <p>O Programa de Doação de óvulos e embriões é uma alternativa cada vez mais solicitada em Reprodução Assistida. Realizada há anos pelo Grupo Huntington de forma ética e transparente, nosso maior objetivo é ajudar os receptores na realização de uma gravidez saudável.</p>
          <p>O programa respeita as exigências do Conselho Federal de Medicina (CFM), através da Resolução nº 2.168/2017 onde adotamos as normas éticas para a utilização das técnicas de reprodução com DOAÇÃO DE GAMETAS OU EMBRIÕES.</p>
          <p>O questionário a seguir trata de temas relacionados à Terceira Via (Ovodoação/Embriodoação) e foi elaborado para coletar dados fundamentais na condução deste procedimento. Sua sinceridade no preenchimento das respostas vai ajudar a todos, principalmente a você (s). Preencha de forma legível e anexe uma ou mais cópias coloridas de uma fotografia sua (s).</p>
          <p>IMPORTANTE: Apesar da utilização dos mais criteriosos métodos para pareamento das características físicas (fenotípicas) entre doadores e receptores e dada a grande variabilidade genética da população brasileira, não existe garantia de que as características físicas do (s) filho (s) gerado (s) por esse tratamento sejam idênticas as dos receptores.</p>
        </Scroll>
        <div className="overlay" />
      </div>
      <Botao endIcon="arrow-right" onClick={onNext}>Próximo</Botao>
      <div className="separator" />
      <p className="disclaimer">Este questionário é uma exigência do Ministério da Saúde através da regulamentação federal RDC nº33, art.20 da ANVISA, de maio de 2011</p>

    </Container>
);
}

export default Termos;
