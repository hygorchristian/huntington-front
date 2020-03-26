import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Voltar from '~/components/Voltar';
import Api from '~/services/api';

import Form1 from '~/screens/5 - Embriologia/NovaColeta/Form1';
import Form2 from '~/screens/5 - Embriologia/NovaColeta/Form2';

import validationSchema from './validationSchema';
import initialValues from './initialValues';

import {
  Container, Content, Header
} from './styles';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';


function NovaColeta() {
  const [coleta, setColeta] = useState(null);
  const [tela, setTela] = useState(1);
  const { collecting } = useParams();
  const history = useHistory();

  const onSubmit = async (values) => {
    Api.updateCollecting(collecting, values)
      .then(() => {
        showSuccessMessage('Coleta realizada com sucesso!');
        history.push('/embriologia/dashboard');
      })
      .catch((err) => {
      console.tron.error(err);
      showErrorMessage('Não foi possível criar a coleta');
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  const handleNext = () => {
    if (formik.values.ovule_total > 0) {
      setTela(2);
    }
  };

  useEffect(() => {
    Api.getCollecting(collecting).then((response) => {
      console.tron.log(response);
      setColeta(response.data);
    });
  }, []);

  if (!coleta) {
    return null;
  }

  return (
    <Container>
      <Voltar
        route="/embriologia/dashboard"
        label="Banco de Óvulos"
      />
      <Header>
        <h1>Nova Coleta</h1>
      </Header>
      <Content>
        {tela === 1 ? (
          <Form1 formik={formik} onNext={handleNext} coleta={coleta} />
        ) : (
          <Form2 formik={formik} onPrev={() => setTela(1)} coleta={coleta} />
        )}
      </Content>
    </Container>
  );
}

export default NovaColeta;
