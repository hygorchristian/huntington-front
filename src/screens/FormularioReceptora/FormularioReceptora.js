import React, { useEffect, useState } from 'react';
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


function FormularioReceptora() {
  const [index, setIndex] = useState(0);
  const [valid, setValid] = useState('invalid');
  const [data, setData] = useState(null);

  const token = getUrlParam('token', null);

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

      setData(decoded);
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
          <Formulario index={1} onNext={() => setIndex(2)} data={data} />
          <Confirmacao index={2} data={data} />
        </Content>
      )}
      { valid === 'invalid' && (
        <Card>
          <Erro />
        </Card>
      ) }

      { valid === 'expired' && (
        <Card>
          <Warning data={data} />
        </Card>
      ) }
    </Container>
  );
}

export default FormularioReceptora;
