import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Api from '~/services/api';

import Voltar from '~/components/Voltar';
import MuiInput from '~/components/MuiInput';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';
import validationSchema from './validationSchema';
import initialValues from './initialValues';
import MuiBoolean from '~/components/MuiBoolean';
import { UltrassomActions } from '~/store/ducks/doadora/ultrassom';
import Resumo from '~/components/Resumo';

import {
  Container, Content, Header, Main
} from './styles';

function PreencherUltrassom() {
  const [donor, setDonor] = useState(null);
  const { id, doadora } = useParams();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(UltrassomActions.ultrassomCreateRequest({ donor: doadora, ...values }));
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
          label="Ultrassons | Maria Carolina do Rosário"
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
            label="Observação"
            placeholder="Escreva a observação"
            name="obs"
            onChange={formik.handleChange}
            value={formik.values.obs}
            error={formik.errors.obs}
            helperText={formik.errors.obs}
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
