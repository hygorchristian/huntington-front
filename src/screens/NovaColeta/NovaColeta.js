import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { Container, Content, Header } from './styles';
import Voltar from '~/components/Voltar';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiCheckbox from '~/components/MuiCheckbox';
import Botao from '~/components/Botao';

import validationSchema from './validationSchema';
import initialValues from './initialValues';
import Loading from '~/components/Loading';

function NovaColeta() {
  const [loading, setLoading] = useState(false);
  const { id, doadora } = useParams();

  const onSubmit = (val) => {
    setLoading(true);

    // pegando apenas as keys de cada exame
    const vals = [];
      Object.keys(val).forEach((key) => {
      if (val[key]) {
        vals.push(key);
      }
    });


    console.tron.log({ vals, doadora });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });


  return (
    <Container>
      <Voltar
        route={`/doadora/pre-cadastros/${id}/${doadora}?tab=exames`}
        label="Exames | Maria Carolina do Rosário"
      />
      <Header>
        <h1>Nova Coleta</h1>
      </Header>
      <Content>
        <form>
          <MuiDatePicker
            minDate={new Date()}
            name="coleta"
            label="Data da Coleta"
            value={formik.values.coleta}
            onChange={(e) => {
              formik.setFieldValue('coleta', e);
            }}
            error={formik.errors.coleta}
            helperText={formik.errors.coleta}
          />
          <div className="checkcontrol">
            <MuiCheckbox
              label="ABO/RH"
              checked={formik.values.aborh}
              onChange={(val) => formik.setFieldValue('aborh', val)}
            />
            <MuiCheckbox
              label="Sorologias"
              value={formik.values.sorologias}
              onChange={(val) => formik.setFieldValue('sorologias', val)}
            />
            <MuiCheckbox
              label="Cariótipo"
              value={formik.values.cariotipo}
              onChange={(val) => formik.setFieldValue('cariotipo', val)}
            />
            <MuiCheckbox
              label="Chlamidia/Neisseria"
              value={formik.values.chlamidia}
              onChange={(val) => formik.setFieldValue('chlamidia', val)}
            />
            <MuiCheckbox
              label="Citologia Oncótica"
              value={formik.values.citologia}
              onChange={(val) => formik.setFieldValue('citologia', val)}
            />
            <MuiCheckbox
              label="CGT"
              value={formik.values.cgt}
              onChange={(val) => formik.setFieldValue('cgt', val)}
            />
            <MuiCheckbox
              label="Cartão DNA"
              value={formik.values.dna}
              onChange={(val) => formik.setFieldValue('dna', val)}
            />
          </div>
          {loading && <Loading />}
        </form>
        <div className="separator" />
        <div className="controller">
          <Botao endIcon="check" onClick={formik.submitForm}>Salvar</Botao>
        </div>
      </Content>
    </Container>
  );
}

export default NovaColeta;
