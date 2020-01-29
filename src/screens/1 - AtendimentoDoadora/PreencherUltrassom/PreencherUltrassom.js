import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Api from '~/services/api';

import Voltar from '~/components/Voltar';
import MuiInput from '~/components/MuiInput';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';
import validationSchema from './validationSchema';
import initialValues from './initialValues';
import MuiBoolean from '~/components/MuiBoolean';
import Resumo from '~/components/Resumo';

import {
  Container, Content, Header, Main
} from './styles';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';

function PreencherUltrassom() {
  const [donor, setDonor] = useState(null);
  const { id, doadora } = useParams();
  const history = useHistory();

  const onSubmit = async (values) => {
    const data = { ...values };
    data.donor = doadora;

    await Api.createUltrasound(data).catch((err) => {
      showErrorMessage('Erro ao criar ultrasson');
    });

    showSuccessMessage('Ultrasson criado com sucesso!');
    history.push(`/doadora/pre-cadastros/${id}/${doadora}?tab=ultrassons`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  useEffect(() => {
    async function loadDonor() {
      const res = await Api.getDoadora(doadora);
      setDonor(res.data);
    }

    loadDonor();
  }, []);


  return (
    <Container>
      <Main>
        <Voltar
          route={`/doadora/pre-cadastros/${id}/${doadora}?tab=ultrassons`}
          label={donor && `Ultrassons | ${donor.name}`}
        />
        <Header>
          <h1>Ultrassom</h1>
        </Header>
        <Content>
          <MuiInput
            label="Contagem de folículos"
            type="number"
            name="follicles"
            onChange={formik.handleChange}
            value={formik.values.follicles}
            error={formik.errors.follicles}
            helperText={formik.errors.follicles}
          />
          <MuiBoolean
            label="Apta para doação?"
            name="able_to_donate"
            formik={formik}
          />
          <MuiTextarea
            label="Conduta medica"
            placeholder="Escreva aqui..."
            name="conduta_medica"
            onChange={formik.handleChange}
            value={formik.values.conduta_medica}
            error={formik.errors.conduta_medica}
            helperText={formik.errors.conduta_medica}
          />
          <div className="separator" />
          <div className="controller">
            <Botao endIcon="check" onClick={formik.submitForm}>Concluir</Botao>
          </div>
        </Content>
      </Main>
      <Resumo doadora={donor} />
    </Container>
  );
}

export default PreencherUltrassom;
