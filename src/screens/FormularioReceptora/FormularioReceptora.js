import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Termos from './Termos';
import Formulario from './Formulario';
import Confirmacao from './Confirmacao';
import Erro from './Erro';
import Warning from './Warning';

import {
  Container, Content, Card
} from './styles';
import { getUrlParam } from '~/utils/url';
import { decode, encode, isValid } from '~/utils/jwt';
import Api from '~/services/api';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';
import initialValues from '~/screens/FormularioReceptora/Formulario/initialValues';
import validationSchema from '~/screens/FormularioReceptora/Formulario/validationSchema';


function FormularioReceptora() {
  const [index, setIndex] = useState(0);
  const [valid, setValid] = useState('invalid');

  const token = getUrlParam('token', null);

  const onSubmit = (v) => {
    const values = { ...v };
    const id = values.data.receiver_id;
    delete values.data;

    Object.keys(values).forEach((key) => {
      if (values[key] === null) {
        delete values[key];
      }
    });

    const _data = {
      receiver: id,
      form: {
        ...values
      }
    };

    Api.confirmForm(_data).then((response) => {
      showSuccessMessage(response);
    }).catch((err) => {
      showErrorMessage(err);
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  const handleChangeIndex = (i) => {
    setIndex(i);
  };

  const checkToken = async () => {
    decode(token).then((decoded) => {
      if (isValid(decoded.data.expire_date)) {
        setValid('valid');
      } else {
        setValid('expired');
      }

      formik.setFieldValue('receiver_name', decoded.data.receiver_name);
      formik.setFieldValue('data', decoded.data);
    }).catch((err) => {
      if (err.name === 'InvalidToken') {
        setValid('invalid');
      }

      if (err.name === 'JsonWebTokenError') {
        setValid('invalid');
      }
    });
  };

  useEffect(() => {
    checkToken();
  }, []);


  return (
    <Container>
      { valid === 'valid' && (
        <Content id="form-content" index={index} onChangeIndex={handleChangeIndex}>
          <Termos index={0} onNext={() => setIndex(1)} />
          <Formulario formik={formik} index={1} onNext={() => setIndex(2)} />
          <Confirmacao formik={formik} index={2} />
        </Content>
      )}
      { valid === 'invalid' && (
        <Card>
          <Erro />
        </Card>
      ) }

      { valid === 'expired' && (
        <Card>
          <Warning data={formik.values.data} />
        </Card>
      ) }
    </Container>
  );
}

export default FormularioReceptora;
