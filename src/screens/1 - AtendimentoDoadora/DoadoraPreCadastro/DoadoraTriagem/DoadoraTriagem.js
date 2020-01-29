/* eslint-disable object-curly-newline */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Voltar from '~/components/Voltar/Voltar';

import MuiTriagemInput from '~/components/MuiTriagemInput';
import MuiInput from '~/components/MuiInput';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';
import { PreCadastroActions } from '~/store/ducks/doadora/preCadastro';

import {
 Container, Content, Header
} from './styles';

import initialValues from './initialValues';
import validationSchema from './schema';
import Api from '~/services/api';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';

function DoadoraTriagem() {
  const { id, doadora } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { data } = useSelector((state) => state.doadora.preCadastro.item);

  const onSubmit = (values) => {
    Api.updateDoadora(doadora, { triagem: values })
      .then(() => {
        showSuccessMessage('Triagem criada com sucesso!');
        history.push(`/doadora/pre-cadastros/${id}/${doadora}?tab=info`);
      })
      .catch((err) => {
        console.tron.log(err);
        showErrorMessage('Erro ao criar triagem');
      });
  };

  useEffect(() => {
    dispatch(PreCadastroActions.preCadastroItemRequest(doadora));
  }, []);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  if (!data) {
    return null;
  }

  return (
    <Container>
      <Voltar
        route={`/doadora/pre-cadastros/${id}/${doadora}?tab=info`}
        label={data && `Informações | ${data.name}`}
      />
      <Header>
        <h1>Triagem</h1>
      </Header>
      <Content>
        <div className="perguntas">
          <form>
            <MuiTriagemInput
              name="health_problem"
              label="Já teve problemas de saúde?"
              placeholder="Observações"
              formik={formik}
            />
            <MuiTriagemInput
              name="medication"
              label="Utiliza alguma medicação atualmente?"
              placeholder="Qual?"
              formik={formik}
            />
            <MuiTriagemInput
              name="contraceptive"
              label="Está em uso de anticoncepcional?"
              placeholder="Observações"
              formik={formik}
            />
            <MuiTriagemInput
              name="smoking"
              label="É fumante?"
              placeholder="Quantos por dia?"
              formik={formik}
            />
            <MuiTriagemInput
              name="surgery"
              label="Já fez alguma cirurgia?"
              placeholder="Qual e há quanto tempo?"
              formik={formik}
            />
            <MuiTriagemInput
              name="children"
              label="Tem filhos?"
              placeholder="Quantos?"
              formik={formik}
            />
            <MuiTriagemInput
              name="abortion"
              label="Já teve aborto?"
              placeholder="Quantos?"
              formik={formik}
            />
            <MuiTriagemInput
              name="drugs"
              label="Faz ou fez uso de drogas?"
              placeholder="Qual?"
              formik={formik}
            />
            <MuiTriagemInput
              name="psychiatric_treatment"
              label="Faz ou fez tratamento psiquiátrico?"
              placeholder="Observação"
              formik={formik}
            />
            <MuiTriagemInput
              name="ovule_preserving"
              label="Possui interesse em preservar seus óvulos?"
              placeholder="Observação"
              formik={formik}
            />
            <MuiTriagemInput
              name="ovule_donor"
              label="Possui interesse em ser doadora de óvulos?"
              placeholder="Observação"
              formik={formik}
            />
            <MuiTriagemInput
              name="depression"
              label="Já teve histórico de depressão ou histórico de depressão na família?"
              placeholder="Observação"
              formik={formik}
            />
            <MuiTriagemInput
              name="inheriting_desease"
              label="Na família, alguém com doença hereditária?"
              placeholder="Qual? Grau de parentesco?"
              formik={formik}
            />
            <MuiTriagemInput
              name="cancer"
              label="Alguém na família tem ou teve câncer de mama, ovário ou útero?"
              placeholder="Quem?"
              formik={formik}
            />
            <MuiTriagemInput
              name="sterile"
              label="Há histórico de infertilidade na família?"
              placeholder="Observação"
              formik={formik}
            />
          </form>
        </div>
        <div className="infos">
          <MuiInput
            name="weight"
            label="Peso"
            placeholder="Kg"
            value={formik.values.weight}
            onChange={formik.handleChange}
            error={formik.touched.weight && formik.errors.weight}
            helperText={formik.touched.weight && formik.errors.weight}
          />
          <MuiInput
            name="height"
            label="Altura"
            placeholder="cm"
            value={formik.values.height}
            onChange={formik.handleChange}
            error={formik.touched.height && formik.errors.height}
            helperText={formik.touched.height && formik.errors.height}
          />
          <MuiInput
            name="arterial_press"
            label="Pressão Arterial"
            value={formik.values.arterial_press}
            onChange={formik.handleChange}
            error={formik.touched.arterial_press && formik.errors.arterial_press}
            helperText={formik.touched.arterial_press && formik.errors.arterial_press}
          />
          <MuiInput
            name="imc"
            label="I.M.C."
            value={formik.values.imc}
            onChange={formik.handleChange}
            error={formik.touched.imc && formik.errors.imc}
            helperText={formik.touched.imc && formik.errors.imc}
          />
          <MuiTextarea
            name="obs"
            label="Observações"
            placeholder="Escreva as observações"
            value={formik.values.obs}
            onChange={formik.handleChange}
            error={formik.touched.obs && formik.errors.obs}
            helperText={formik.touched.obs && formik.errors.obs}
          />
        </div>
        <div className="controller">
          <Botao endIcon="check" onClick={formik.submitForm}>Salvar</Botao>
        </div>
      </Content>
    </Container>
);
}

export default DoadoraTriagem;
