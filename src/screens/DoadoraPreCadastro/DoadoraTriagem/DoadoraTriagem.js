/* eslint-disable object-curly-newline */

import React from 'react';
import Voltar from '~/components/Voltar/Voltar';

import {
 Container, Content, Header
} from './styles';
import MuiTriagemInput from '~/components/MuiTriagemInput';
import MuiInput from '~/components/MuiInput';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';

const perguntas = [
  { id: 1, label: 'Já teve ou tem algum problema de saúde?', selected: true, observacaoPlaceholder: 'Observações' },
  { id: 2, label: 'Utiliza alguma medicação atualmente?', selected: true, observacaoPlaceholder: 'Qual?' },
  { id: 3, label: 'Está em uso de anticoncepcional?', selected: true, observacaoPlaceholder: 'Observações' },
  { id: 4, label: 'É fumante?', selected: true, observacaoPlaceholder: 'Quantos por dia?' },
  { id: 5, label: 'Já fez alguma cirurgia?', selected: true, observacaoPlaceholder: 'Qual e há quanto tempo?' },
  { id: 6, label: 'Tem filhos?', selected: true, observacaoPlaceholder: 'Quantos?' },
  { id: 7, label: 'Já teve aborto?', selected: true, observacaoPlaceholder: 'Quantos?' },
  { id: 8, label: 'Faz ou fez uso de drogas?', selected: true, observacaoPlaceholder: 'Qual?' },
  { id: 9, label: 'Faz ou fez tratamento psiquiátrico?', selected: true, observacaoPlaceholder: 'Observação' },
  { id: 10, label: 'Possui interesse em preservar seus óvulos?', selected: true, observacaoPlaceholder: 'Observação' },
  { id: 11, label: 'Possui interesse em ser doadora de óvulos?', selected: true, observacaoPlaceholder: 'Observação' },
  { id: 12, label: 'Já teve histórico de depressão ou histórico de depressão na família?', selected: true, observacaoPlaceholder: 'Observação' },
  { id: 13, label: 'Na família, alguém com doença hereditária?', selected: true, observacaoPlaceholder: 'Qual? Grau de parentesco?' },
  { id: 14, label: 'Alguém na fampilia tem ou teve câncer de mama, ovário ou útero?', selected: true, observacaoPlaceholder: 'Quem?' },
  { id: 15, label: 'Há histórico de infertilidade na família?', selected: true, observacaoPlaceholder: 'Observação' },
];

function DoadoraTriagem() {
  return (
    <Container>
      <Voltar label="Maria Carolina do Rosário" route="/doadora/detalhes/1" />
      <Header>
        <h1>Triagem</h1>
      </Header>
      <Content>
        <div className="perguntas">
          {
            perguntas.map((pergunta) => (
              <MuiTriagemInput key={pergunta.id} label={pergunta.label} placeholder={pergunta.observacaoPlaceholder} data={pergunta} />
            ))
          }
        </div>
        <div className="infos">
          <MuiInput label="Peso" placeholder="Kg" />
          <MuiInput label="Altura" placeholder="cm" />
          <MuiInput label="Pressão Arterial" />
          <MuiTextarea label="Observações" placeholder="Escreva as observações" />
        </div>
        <div className="controller">
          <Botao endIcon="check">Salvar</Botao>
        </div>
      </Content>
    </Container>
);
}

export default DoadoraTriagem;
