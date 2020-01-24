import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Api from '~/services/api';

import {
 Container, Content, Header, Main
} from './styles';
import Voltar from '~/components/Voltar';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiCheckbox from '~/components/MuiCheckbox';
import Botao from '~/components/Botao';

import validationSchema from './validationSchema';
import initialValues from './initialValues';
import Loading from '~/components/Loading';
import { showSuccessMessage, showWarningMessage } from '~/utils/notistack';
import { formatarDiaMesAno } from '~/utils/data';
import Resumo from '~/components/Resumo';

function NovaColeta() {
  const [loading, setLoading] = useState(false);
  const [donor, setDonor] = useState(null);
  const history = useHistory();
  const { id, doadora } = useParams();

  const onSubmit = async (val) => {
    setLoading(true);
    let is_ok = false;

    // pegando apenas as keys de cada exame
    const exams = [];
    Object.keys(val.exams).forEach((key) => {
      if (val.exams[key]) {
        exams.push(key);
      }
    });

    for (const exam of exams) {
      const result = exam === 'cgt' || exam === 'dna'
        ? formatarDiaMesAno(val.coleta)
        : null;

      const data = {
        name: exam,
        donor: doadora,
        collect_date: val.coleta,
        result
      };

      const response = await Api.createExam(data).catch((error) => {
        // showErrorMessage(error.data.message);
      });

      if (response) {
        is_ok = true;
        showSuccessMessage(`Exame ${exam} criado com sucesso!`);
      } else {
        showWarningMessage(`O exame ${exam} já foi criado e está pendente`);
      }
    }

    if (is_ok) {
      history.push(`/doadora/pre-cadastros/${id}/${doadora}?tab=exames`);
    }
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
                checked={formik.values.exams.aborh}
                onChange={(val) => formik.setFieldValue('exams.aborh', val)}
              />
              <MuiCheckbox
                label="Sorologias"
                value={formik.values.exams.sorologias}
                onChange={(val) => formik.setFieldValue('exams.sorologias', val)}
              />
              <MuiCheckbox
                label="Cariótipo"
                value={formik.values.exams.cariotipo}
                onChange={(val) => formik.setFieldValue('exams.cariotipo', val)}
              />
              <MuiCheckbox
                label="Chlamidia/Neisseria"
                value={formik.values.exams.chlamidia}
                onChange={(val) => formik.setFieldValue('exams.chlamidia', val)}
              />
              <MuiCheckbox
                label="Citologia Oncótica"
                value={formik.values.exams.citologia}
                onChange={(val) => formik.setFieldValue('exams.citologia', val)}
              />
              <MuiCheckbox
                label="CGT"
                value={formik.values.exams.cgt}
                onChange={(val) => formik.setFieldValue('exams.cgt', val)}
              />
              <MuiCheckbox
                label="Cartão DNA"
                value={formik.values.exams.dna}
                onChange={(val) => formik.setFieldValue('exams.dna', val)}
              />
            </div>
            {loading && <Loading />}
          </form>
          <div className="separator" />
          <div className="controller">
            <Botao endIcon="check" onClick={formik.submitForm}>Salvar</Botao>
          </div>
        </Content>
      </Main>
      <Resumo doadora={donor} />

    </Container>
  );
}

export default NovaColeta;
